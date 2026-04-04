---
title: "Virtual Accounts & Pooled Banking"
description: "How virtual accounts enable fiat on/off-ramp without giving every merchant their own bank account. The BaaS pattern that powers stablecoin payment platforms."
date: 2026-03-12
category: stablecoin-payments
tags:
  - Virtual Accounts
  - Banking
  - BaaS
  - Payments
series: "Stablecoin Payments 101"
seriesOrder: 2
---

Every stablecoin payment platform needs fiat on-ramp and off-ramp. But you can't open a bank account for every merchant. That's where virtual accounts come in.

## The Problem

You have 10,000 merchants. Each one needs to receive fiat payments. Opening 10,000 bank accounts is:
- Expensive (monthly fees per account)
- Slow (KYB per account)
- Operationally complex (reconciling 10,000 statements)

## The Solution: Pooled Banking

One physical bank account. Thousands of virtual accounts.

```
Physical Account: GB29 NWBK 6016 1331 9268 19
├── Virtual: VA-001 → Merchant A (balance: $45,230)
├── Virtual: VA-002 → Merchant B (balance: $12,800)
├── Virtual: VA-003 → Merchant C (balance: $89,100)
└── Virtual: VA-NNN → Merchant N (balance: $...)
```

Each virtual account gets a unique reference (sort code + account number, or IBAN). When money arrives, the Banking-as-a-Service provider identifies which virtual account it belongs to via the reference and sends a webhook.

## How It Works in a Payment Flow

1. Merchant registers on your platform
2. Platform creates a virtual account via BaaS API (e.g., Modulr, ClearBank)
3. Merchant's customer pays to the virtual account IBAN
4. BaaS provider sends webhook: "Payment received for VA-002, amount: EUR 5,000"
5. Platform credits the merchant's balance in your ledger
6. Platform initiates stablecoin conversion (fiat on-ramp)

## The Reconciliation Challenge

With pooled banking, your internal ledger **is** the source of truth. The physical bank account holds the aggregate balance. You must reconcile:

- **Bank statement** (what the bank says)
- **Virtual account balances** (what BaaS says)
- **Internal ledger** (what your system says)

Any mismatch means money is either missing or duplicated. This three-way reconciliation runs daily in production payment systems.

## What Surprised Me

Coming from traditional banking, I assumed every merchant needed a real bank account. The virtual account model is elegant — it's essentially the same pattern as sub-accounts in a ledger, but with real banking rails attached.

The catch: you're trusting your BaaS provider to correctly route incoming payments. If they misattribute a payment, your merchant gets credited incorrectly. Good webhook idempotency and reconciliation are non-negotiable.

---

*Next: Fiat on-ramp — how money enters the crypto world.*
