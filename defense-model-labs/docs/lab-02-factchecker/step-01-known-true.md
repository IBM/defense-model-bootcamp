---
sidebar_position: 4
title: 'Step 1: Known True Claim'
---

# Step 1: Verifying a Known True Claim

**Scenario:** All models agree — Jane's record confirms the verdict with traceable evidence

## Objective

Test a factual claim that all three models should correctly identify as TRUE, demonstrating how the IBM Defense Model provides traceable evidence through Jane's Intelligence.

## The Claim

```
The F-35 Lightning II is a fifth-generation multirole fighter aircraft.
```

## Instructions

1. Type the claim into the Fact Checker input field
2. Click the **Analyze** button (labeled **A** in the screenshot below)
3. Observe that all three models return a **TRUE** verdict
4. Expand the IBM Defense Model result to show the **Jane's API Trace** (labeled **B**)
5. Note that the equipment route was queried and returned 1 record for the F-35 Lightning II
6. Click **"Show JSON Response"** (labeled **C**) to display the raw Jane's data that grounds the verdict

![Step 1 - F-35 Analysis](/img/lab-02/5.png)

## Expected Results

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | TRUE |
| **Llama 3.1 70B** | TRUE |
| **GPT OSS 120B** | TRUE |

## Key Observations

### IBM Defense Model
- Returns **TRUE** with full Jane's Intelligence backing
- Shows the API trace revealing which endpoint was queried
- Provides the complete JSON record from Jane's database
- Verdict is traceable and citable

### Llama 3.1 70B
- Returns **TRUE** based on training data
- No source grounding or traceability
- Cannot show where the information came from

### GPT OSS 120B
- Returns **TRUE** based on training data
- No source grounding or traceability
- Cannot show where the information came from

## Outcome

All three models correctly identify the F-35 Lightning II as a fifth-generation multirole fighter. However, only the IBM Defense Model shows the Jane's API trace and supporting JSON record, providing verifiable evidence for the verdict.

---

**Next Step:** Continue to [Step 2: Implausible Claim](./step-02-implausible.md) to see how models handle operationally impossible scenarios.