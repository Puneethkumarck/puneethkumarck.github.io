---
title: Real-Time Price Alert System
description: Production-grade price alert microservices platform with Kafka event streaming, lock-free evaluation engine, and full observability stack.
date: 2025-06-01
category: system-design
tags:
  - Java
  - Spring Boot
  - Kafka
  - Prometheus
  - Grafana
  - Clean Architecture
github: https://github.com/puneethkumarck/price-alert
featured: true
stats:
  services: 6
  tests: 113
---

## Overview

A real-time stock price alert system where users set thresholds on US equities. The system evaluates live market ticks in microseconds and triggers notifications reliably under high concurrency with zero duplicate alerts daily.

## Architecture Highlights

- **Six independently deployable modules** using hexagonal architecture
- **Kafka-first event streaming** with a 3-broker KRaft cluster
- **Four-layer deduplication** mechanism ensuring zero duplicate notifications
- **Lock-free evaluation engine** with O(log n) threshold lookups
- **Full observability**: Prometheus, Grafana, Loki, Promtail, Tempo with OpenTelemetry

## Technical Stack

- Java 25 + Spring Boot 4
- Multi-module Gradle with Kotlin DSL
- Apache Kafka (KRaft mode)
- PostgreSQL for persistence
- Redis for caching and deduplication
- Docker Compose for local development

## Key Achievement

~90% reduction in evaluation overhead through the lock-free concurrent design, capable of processing thousands of price ticks per second while maintaining alert accuracy.
