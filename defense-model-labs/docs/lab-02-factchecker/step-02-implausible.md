---
sidebar_position: 5
title: 'Step 2: Implausible Claim'
---

# Step 2: Detecting an Implausible Claim

**Scenario:** IBM Defense Model returns FALSE with no Jane's records for an operationally implausible claim

## Objective

Test how models handle an operationally impossible claim that has no supporting evidence in Jane's Intelligence database.

## The Claim

```
The F-35 Lightning has been flown on Mars.
```

## Instructions

1. Enter the claim into the Fact Checker input field
2. Click the **Analyze** button
3. Observe that the IBM Defense Model returns **FALSE** — Jane's contains no record of F-35 operations on Mars, and the claim is operationally implausible
4. Note the Jane's API trace shows a query was made and returned no supporting records

![Step 2 - Implausible Claim](/img/lab-02/6.png)

## Expected Results

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | FALSE |
| **Llama 3.1 70B** | FALSE |
| **GPT OSS 120B** | FALSE |

## Key Observations

### IBM Defense Model
- Returns **FALSE** with clear reasoning
- Jane's API trace shows 0 records returned
- Correctly identifies the claim as operationally implausible
- Verdict is grounded in the absence of supporting evidence

### Llama 3.1 70B
- Returns **FALSE** based on general knowledge
- Recognizes the implausibility from training data
- No verification against authoritative sources

### GPT OSS 120B
- Returns **FALSE** based on general knowledge
- Recognizes the implausibility from training data
- No verification against authoritative sources

## Outcome

IBM Defense Model correctly returns **FALSE** for an operationally implausible claim with no Jane's records. While all models agree in this case, the IBM Defense Model's verdict is backed by the systematic absence of evidence in Jane's Intelligence, not just pattern matching.

---

**Next Step:** Continue to [Step 3: Operational Status](./step-03-operational-status.md) to see how models handle verifiable installation status claims.