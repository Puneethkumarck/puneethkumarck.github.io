---
title: Stablecoin Payments Platform
description: Cross-border B2B payment pipeline using the "sandwich model" — Fiat to USDC to Fiat — with 14 microservices, saga orchestration, and event-driven architecture.
date: 2025-01-01
category: payments
tags:
  - Java
  - Spring Boot
  - Temporal
  - Kafka
  - PostgreSQL
  - Redis
  - Kubernetes
  - Hexagonal Architecture
github: https://github.com/puneethkumarck/stablecoin-payments
featured: true
stats:
  services: 14
  tests: 2000
  integrations: 9
---

## Overview

A production-grade cross-border B2B payment platform using the "sandwich model": collect fiat from the sender, convert to USDC on-chain, then convert back to fiat for the recipient. This eliminates correspondent banking chains and settles in minutes instead of days.

## The Problem

Traditional cross-border payments through SWIFT involve:
- 1-5 business days for settlement
- 3-6% in cumulative fees
- 2-5 correspondent banks per transaction
- No visibility into intermediate status
- Banking hours only

## The Solution

Stablecoin rails replace the correspondent chain:

```
Sender (USD) → ACH → Platform → USDC on Base L2 → Platform → SEPA → Recipient (EUR)
```

The entire flow completes in minutes with sub-cent on-chain fees.

## Architecture

14 independently deployable microservices following hexagonal architecture:

| Service | Responsibility |
|---------|---------------|
| **S1 Payment Orchestrator** | Saga coordination via Temporal workflows |
| **S2 Compliance** | Sanctions screening, KYC/KYB, Travel Rule |
| **S3 Fiat On-Ramp** | ACH/SEPA collection via Stripe |
| **S4 Blockchain & Custody** | USDC minting, burning, and custody via Circle |
| **S5 Fiat Off-Ramp** | SEPA payout via Modulr |
| **S6 FX Engine** | Rate quoting with spread management |
| **S7 Ledger** | Double-entry accounting |
| **S10 API Gateway** | Authentication, rate limiting, routing |
| **S11 Onboarding** | Merchant KYB with Onfido |
| **S13 IAM** | Identity and access management |

## Key Engineering Decisions

### Saga Orchestration with Temporal

Each payment is a Temporal workflow with full compensation logic. If any step fails (compliance reject, on-chain failure, payout timeout), the saga compensates all previous steps automatically.

### Outbox Pattern for Event Delivery

Every state change publishes events through the outbox pattern — write to the outbox table inside the same database transaction, then a background process reliably publishes to Kafka. Zero message loss guarantee.

### Hexagonal Architecture Enforced by Tests

Domain logic has zero infrastructure dependencies. ArchUnit tests enforce architectural boundaries at build time — no JPA annotations in domain code, no domain imports in infrastructure.

### Circuit Breakers for Provider Failover

Every external provider integration (Circle, Modulr, Stripe, Chainalysis) is wrapped in Resilience4j circuit breakers. When a provider degrades, the circuit opens and either fails fast or falls back gracefully.

## What I Learned

- **Saga compensation is harder than the happy path** — designing correct rollback for every failure mode across 6+ services required exhaustive state machine modeling
- **The outbox pattern is non-negotiable** — every service that tried "just publish to Kafka" eventually lost events
- **WireMock is essential** — testing against live provider APIs is slow and flaky; WireMock stubs let us test every error scenario deterministically
- **ArchUnit pays for itself** — catching architecture violations at build time saved hours of code review discussions
