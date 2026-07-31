---
title: Oncall Support Agent
description: AI-powered GOAP agent for incident triage, root cause analysis, and guided remediation using Spring AI.
date: 2024-11-01
category: system-design
tags:
  - Java
  - Spring AI
  - AI Agents
  - Observability
github: https://github.com/puneethkumarck/oncall-support-agent
featured: false
---

## Overview

An AI agent that sits in the oncall rotation. When an incident fires, it triages — pulls logs, checks dashboards, correlates recent deploys — and produces a root-cause hypothesis with a suggested remediation. Built on GOAP (Goal-Oriented Action Planning) with Spring AI as the model integration layer.