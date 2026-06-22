---
sidebar_position: 9
title: 'Step 6: Inventory Precision'
---

# Step 6: Inventory Precision — Pantsir-S1 in Venezuela

**Scenario:** IBM Defense Model catches incorrect quantities; Llama 3.1 70B proves unreliable on precise numbers

## Objective

Test how models handle precise equipment inventory quantities and demonstrate the critical importance of numerical accuracy in defense intelligence.

## Part A — Correct Quantity Claim

### The Claim

```
6 Pantsir-S1 anti-aircraft systems in Venezuela.
```

### Instructions

1. Enter the claim into the Fact Checker input field
2. Click the **Analyze** button
3. Observe that the IBM Defense Model returns **TRUE** — Jane's database lists six Pantsir-S1 systems ordered, delivered, and in service with the Venezuelan Bolivarian Army, matching the claim exactly
4. Observe that Llama 3.1 70B also returns **TRUE**
5. Observe that GPT OSS 120B returns **TRUE**
6. Expand the IBM Defense Model Jane's API Trace to show 1 record returned, confirming the inventory entry

![Step 6A - Correct Quantity](/img/lab-02/10.png)

### Expected Results (Part A)

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | TRUE |
| **Llama 3.1 70B** | TRUE |
| **GPT OSS 120B** | TRUE |

## Part B — Incorrect Quantity Claim

### The Claim

```
10 Pantsir-S1 anti-aircraft systems in Venezuela.
```

### Instructions

1. Now change the number in the claim from **6** to **10** and click **Analyze** again
2. Observe that the IBM Defense Model now returns **FALSE** — Jane's database records only six Pantsir-S1 systems (estimated) in service with the Venezuelan Bolivarian Army, not ten. The model explicitly references the Jane's record to contradict the inflated quantity
3. Observe that Llama 3.1 70B **still returns TRUE** — it cannot distinguish between 6 and 10 units because it is operating from training data without precise inventory grounding
4. Observe that GPT OSS 120B returns **FALSE**
5. Highlight that Llama 3.1 70B returning TRUE for both 6 and 10 units demonstrates its unreliability when precision matters — it cannot be trusted for inventory verification tasks

![Step 6B - Incorrect Quantity](/img/lab-02/11.png)

### Expected Results (Part B)

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | FALSE |
| **Llama 3.1 70B** | TRUE |
| **GPT OSS 120B** | FALSE |

## Key Observations

### IBM Defense Model
- **Part A:** Returns **TRUE** for 6 units — exact match with Jane's record
- **Part B:** Returns **FALSE** for 10 units — detects the discrepancy
- Provides precise inventory numbers from Jane's Intelligence
- Verdict changes appropriately when the quantity changes
- **Reliable for inventory verification**

### Llama 3.1 70B
- **Part A:** Returns **TRUE** for 6 units
- **Part B:** Returns **TRUE** for 10 units
- **Cannot distinguish between different quantities**
- Operating from fuzzy training data patterns
- **Unreliable for precise inventory verification**
- **Critical failure for defense intelligence**

### GPT OSS 120B
- **Part A:** Returns **TRUE** for 6 units
- **Part B:** Returns **FALSE** for 10 units
- Correctly changes verdict when quantity changes
- However, lacks the Jane's Intelligence grounding to show why

## Outcome

IBM Defense Model correctly returns **FALSE**, citing Jane's record of only six Pantsir-S1 systems. Llama 3.1 70B returns **TRUE** for both quantities — proving it cannot verify precise inventory numbers and is unreliable for this class of claim.

## Critical Failure
**Llama 3.1 70B returning TRUE for both 6 and 10 units is a disqualifying failure** for defense intelligence work. When a model cannot distinguish between different quantities of the same equipment, it cannot be trusted for:
- Inventory verification
- Force estimation
- Threat assessment
- Procurement tracking

---

**Next Step:** Continue to [Step 7: Supply Chain Verification](./step-07-supply-chain.md) to test defense procurement claims.