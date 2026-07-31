---
title: Prism
description: High-performance real-time Solana transaction indexer — streams the mainnet firehose via Yellowstone gRPC and persists it to PostgreSQL. No Spring Boot, no JPA, no ORM.
date: 2025-11-01
category: system-design
tags:
  - Java
  - Helidon
  - Virtual Threads
  - PostgreSQL
  - Solana
  - gRPC
github: https://github.com/puneethkumarck/prism
featured: true
---

## Overview

A deliberately minimal, high-throughput Solana transaction indexer. Built on Helidon 4 SE with Java 25 virtual threads (Project Loom) — no Spring Boot, no JPA, no ORM overhead. Streams every Solana mainnet transaction via Yellowstone gRPC into a raw PostgreSQL sink with minimal latency. The point is speed: process the firehose without the framework tax.