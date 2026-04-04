---
title: "Shipping a Real-Time Price Alert System: Clean Architecture, Kafka, and Structured AI Workflows"
description: "How I built a production-grade price alert microservices platform with 6 modules, Kafka event streaming, and full observability — using AI-assisted development."
date: 2026-02-15
category: system-design
tags:
  - System Design
  - Kafka
  - Microservices
  - Observability
  - Clean Architecture
---

I recently shipped a real-time price alert system — users set thresholds on US equities, the system evaluates live market ticks in microseconds and triggers notifications reliably.

## What I Built

A multi-module Gradle + Spring Boot 4 platform on Java 25 with six independently deployable modules using hexagonal architecture.

**Key numbers:**
- 6 modules, clean hexagonal architecture
- 113 tests across unit, integration, and business layers
- Kafka-first event streaming with a 3-broker KRaft cluster
- ~90% reduction in evaluation overhead with lock-free design

## Four-Layer Deduplication

The hardest problem wasn't processing speed — it was ensuring **zero duplicate alerts**. A user who sets an alert for AAPL > $200 should get exactly one notification when the price crosses, not ten.

My solution: four independent deduplication layers.

1. **Database constraint** — unique composite key on (user, symbol, threshold, direction)
2. **Redis set** — check-before-trigger with TTL-based expiry
3. **Kafka consumer idempotency** — offset tracking + message dedup key
4. **Notification service** — last-resort dedup before sending

Any single layer can fail, and duplicates still won't leak through.

## Observability Stack

Full observability from day one:
- **Prometheus** — metrics collection
- **Grafana** — dashboards and alerting
- **Loki + Promtail** — centralized logging
- **Tempo** — distributed tracing via OpenTelemetry

Every Kafka message carries a trace ID. I can follow a price tick from ingestion through evaluation to notification delivery in a single Tempo trace.

## AI-Assisted Development

This wasn't one-shot prompts. I started from an MVP and improved gradually, using structured Claude markdown files to maintain full system context across sessions. What typically takes days compressed into focused work blocks.

The key insight: AI works best as a pair programmer when you give it architectural context upfront — not when you ask it to generate code from scratch.

---

*The full source code and architecture wiki are available on [GitHub](https://github.com/puneethkumarck/price-alert).*
