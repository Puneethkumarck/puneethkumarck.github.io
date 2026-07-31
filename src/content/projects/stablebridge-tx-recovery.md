---
title: Stablebridge TX Recovery
description: Enterprise-grade microservice for stablecoin transaction recovery across EVM and Solana chains — detects stuck or failed on-chain transactions and orchestrates automated recovery with configurable escalation.
date: 2025-10-01
category: system-design
tags:
  - Java
  - Spring Boot
  - Temporal
  - Kafka
  - PostgreSQL
  - Blockchain
github: https://github.com/puneethkumarck/stablebridge-tx-recovery
featured: true
---

## Overview

A dedicated recovery service that detects stuck transactions, orchestrates replacement (RBF on EVM, fee bumps on Solana), and escalates to human approval when automated recovery thresholds are exceeded. Runs as Temporal workflows so recovery state survives crashes and deploys.