---
sidebar_position: 8
title: 'Step 5: Equipment Depth'
---

# Step 5: Equipment Depth at Scale

**Scenario:** All models agree on the verdict, but only the IBM Defense Model grounds it in specific, citable data

## Objective

Test how models handle large-scale equipment installation queries and demonstrate the depth of intelligence provided by Jane's-grounded retrieval.

## The Claim

```
Tor-M1 Installations in Iran.
```

## Instructions

1. Enter the claim into the Fact Checker input field
2. Click the **Analyze** button
3. Observe that the IBM Defense Model and GPT OSS 120B both answer **TRUE**
4. Expand the IBM Defense Model result and note the level of depth provided
5. Expand the Jane's API Trace and show that the query against the installations route returned **602 matching records**
6. Contrast this with Llama 3.1 70B (returns **UNSURE**) and GPT OSS 120B (returns **TRUE**) — both offer no comparable site-level detail, coordinates, or operational status

![Step 5 - Tor-M1 Installations](/img/lab-02/9.png)

## Expected Results

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | TRUE |
| **Llama 3.1 70B** | UNSURE |
| **GPT OSS 120B** | TRUE |

## Key Observations

### IBM Defense Model
- Returns **TRUE** with comprehensive installation data
- Jane's API trace shows **602 records returned**
- Provides detailed information including:
  - Specific named installation sites
  - Geographic coordinates
  - Operational status for each site
  - Installation types and configurations
- Verdict is backed by extensive, structured intelligence

### Llama 3.1 70B
- Returns **UNSURE** — cannot confirm the claim
- No access to installation databases
- Cannot provide site-level details
- **Hedges even when extensive data exists**

### GPT OSS 120B
- Returns **TRUE** based on general knowledge
- Correct verdict but no supporting detail
- Cannot provide site names, coordinates, or operational status
- No traceability to authoritative sources

## Outcome

While the IBM Defense Model and GPT OSS 120B agree on **TRUE** (Llama returns **UNSURE**), the real distinction is **depth, not verdict**. The IBM Defense Model cites specific named sites, coordinates, and operational status drawn from 602 Jane's installation records. This transforms a simple TRUE/FALSE answer into actionable intelligence.

---

**Next Step:** Continue to [Step 6: Inventory Precision](./step-06-inventory-precision.md) to test how models handle precise equipment quantities.