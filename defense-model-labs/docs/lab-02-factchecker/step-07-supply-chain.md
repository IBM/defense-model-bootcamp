---
sidebar_position: 10
title: 'Step 7: Supply Chain Verification'
---

# Step 7: Supply Chain Verification — Russia Mi-17 Transfer to China

**Scenario:** Llama 3.1 70B hallucination exposed when precise quantities are changed

## Objective

Test each model's ability to verify a specific defense procurement claim and observe how models respond when precise figures are varied — revealing which models are grounded in data versus which models fabricate confident answers.

## Background

This scenario tests defense procurement verification. You will test two different quantities to observe how each model responds, revealing which models are grounded in verifiable data versus which models pattern-match on training text.

## Part A — 54 Mi-17 Helicopters

### The Claim

```
Russia supplied 54 Mi-17 helicopters to China.
```

### Instructions

1. Enter the claim into the Fact Checker input field
2. Click the **Analyze** button
3. Observe that the IBM Defense Model returns **UNSURE** — Jane's database returned 0 records for an Mi-17 transfer from Russia to China. The model correctly declines to assert a verdict without supporting evidence
4. Observe that Llama 3.1 70B returns **TRUE** — it asserts confidence based on training data, claiming Russia did indeed supply Mi-17 helicopters to China
5. Observe that GPT OSS 120B returns **UNSURE** — like the IBM Defense Model, it cannot confirm the specific quantity and hedges appropriately
6. Note the Jane's API Trace: **0 records returned**. This absence of evidence should prompt UNSURE, not TRUE

![Step 7A - 54 Mi-17 Helicopters](/img/lab-02/12.png)

### Expected Results (Part A)

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | UNSURE |
| **Llama 3.1 70B** | TRUE |
| **GPT OSS 120B** | UNSURE |

## Part B — 80 Mi-17 Helicopters

### The Claim

```
Russia supplied 80 Mi-17 helicopters to China.
```

### Instructions

1. Change the quantity from **54** to **80** and click **Analyze** again
2. Observe that all three models now return **FALSE** — there is no record of any Mi-17 transfer from Russia to China at any quantity, and the inflated number triggers a clear rejection across all models
3. **Critically compare Part A and Part B:** Llama 3.1 70B returned **TRUE** for 54 Mi-17s but **FALSE** for 80 Mi-17s. This inconsistency proves the model is not grounded in verifiable data — it is pattern-matching on training text rather than verifying facts
4. The IBM Defense Model and GPT OSS 120B remain consistent (UNSURE → FALSE), correctly reflecting the absence of any Jane's record for this transfer at any quantity

![Step 7B - 80 Mi-17 Helicopters](/img/lab-02/13.png)

### Expected Results (Part B)

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | FALSE |
| **Llama 3.1 70B** | FALSE |
| **GPT OSS 120B** | FALSE |

## Key Observations

### IBM Defense Model
- **Part A (54 units):** Returns **UNSURE** — no Jane's records found
- **Part B (80 units):** Returns **FALSE** — no Jane's records found
- Consistent behavior reflecting the absence of evidence
- Appropriate epistemic caution when data is missing
- **Reliable and consistent**

### Llama 3.1 70B
- **Part A (54 units):** Returns **TRUE** — confident assertion
- **Part B (80 units):** Returns **FALSE** — rejection
- **Direct contradiction exposes unreliability**
- Pattern-matching on training data, not verifying facts
- **Cannot be trusted for procurement verification**
- **Critical hallucination failure**

### GPT OSS 120B
- **Part A (54 units):** Returns **UNSURE** — appropriate hedging
- **Part B (80 units):** Returns **FALSE** — rejection
- Consistent behavior (UNSURE → FALSE)
- Lacks Jane's grounding but maintains logical consistency

## Outcome

All three models return **FALSE** for 80 Mi-17 helicopters. The key takeaway: **Llama 3.1 70B said TRUE at 54 units and FALSE at 80** — a direct contradiction that exposes its unreliability. There is no Jane's record of any Mi-17 transfer from Russia to China, and the IBM Defense Model's consistent UNSURE → FALSE behavior reflects that ground truth.

---

**Next Step:** Continue to [Step 8: Order of Battle Integrity](./step-08-oob-integrity.md) to test detection of planted foreign units.