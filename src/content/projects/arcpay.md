---
title: ArcPay
description: Open-source payment protocol on Circle's Arc L1 blockchain — giving AI agents autonomous but policy-controlled access to USDC. Every payment runs a policy → compliance → on-chain settlement gauntlet before money moves.
date: 2025-12-01
category: payments
tags:
  - Java
  - Spring Boot
  - Temporal
  - Kafka
  - PostgreSQL
  - Solidity
  - USDC
  - AI Agents
github: https://github.com/puneethkumarck/arcpay
featured: true
---

## Overview

ArcPay is a payment protocol for AI agents. Agents can hold and spend USDC autonomously, but every payment is gated by a policy engine and compliance check before settlement. The agent proposes a payment; the protocol screens, sanctions-checks, and either approves or blocks it — then settles on-chain via Circle's Arc L1. Think of it as a programmable corporate card for AI.