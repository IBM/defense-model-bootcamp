---
sidebar_position: 6
title: 'Step 3: Operational Status'
---

# Step 3: Operational Status Verification

**Scenario:** Three-way model disagreement on a single, verifiable installation status field

## Objective

Test how models handle a specific operational status claim that can be verified against Jane's Intelligence database records.

## The Claim

```
Murted Air Base is Active.
```

## Instructions

1. Enter the claim into the Fact Checker input field, or click Sample Fact #3 to auto-fill it automatically
2. Click the **Analyze** button
3. Observe that the IBM Defense Model returns **TRUE** — Jane's database lists Murted Air Base with an installation status of "Active," directly confirming the claim
4. Observe that Llama 3.1 70B returns **TRUE**
5. Observe that GPT OSS 120B returns **UNSURE**, hedging rather than committing to either answer
6. Expand the Jane's API Trace and click **"Show JSON Response"** to show the installations record confirming "Active" status

![Step 3 - Murted Air Base Status](/img/lab-02/7.png)

## Expected Results

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | TRUE |
| **Llama 3.1 70B** | TRUE |
| **GPT OSS 120B** | UNSURE |

## Key Observations

### IBM Defense Model
- Returns **TRUE** with Jane's Intelligence confirmation
- Shows the installations API endpoint was queried
- Provides the JSON record with "Active" installation status
- Verdict is directly traceable to authoritative source data

### Llama 3.1 70B
- Returns **TRUE** based on training data
- Correct verdict but no supporting evidence
- Cannot provide operational status
- No traceability to authoritative sources

### GPT OSS 120B
- Returns **UNSURE** — hedging on the claim
- Cannot commit to a definitive answer
- No access to authoritative sources for verification
- **Lacks confidence even when data exists**

## Outcome

Only the IBM Defense Model is correct and traceable, with Jane's confirming an "Active" installation status. This scenario demonstrates a critical three-way disagreement where only the grounded model provides the correct, verifiable answer.

---

**Next Step:** Continue to [Step 4: Equipment Identification](./step-04-equipment-id.md) to test equipment possession claims.