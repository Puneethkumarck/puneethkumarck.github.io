---
title: Stablebridge Indexer
description: Multichain blockchain transaction indexer for stablecoin wallet infrastructure — detects deposits across Ethereum, Base, Solana, and Bitcoin chains in real time.
date: 2025-09-01
category: system-design
tags:
  - Java
  - Spring Boot
  - Kafka
  - PostgreSQL
  - Redis
  - Blockchain
github: https://github.com/puneethkumarck/stablebridge-indexer
featured: true
stats:
  chains: 4
---

## Overview

A real-time multichain transaction indexer that watches Ethereum, Base, Solana, and Bitcoin for incoming stablecoin deposits and streams them into the platform's event bus. Designed as the ChainListener half of the Stablebridge platform — every deposit the platform processes starts with this service detecting it.

## Architecture

- Per-chain detection adapters behind a unified `ChainPort` interface
- Kafka topic partitioning by transaction hash for ordered event delivery
- Idempotent deduplication at the consumer layer
- Reorg-aware block tracking on EVM and Solana chains