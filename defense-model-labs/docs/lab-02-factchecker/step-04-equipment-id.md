---
sidebar_position: 7
title: 'Step 4: Equipment Identification'
---

# Step 4: Equipment Identification

**Scenario:** IBM Defense Model provides detailed equipment records; GPT OSS has no information on the M40

## Objective

Test how models verify equipment possession claims, particularly for less common military equipment.

## The Claim

```
Iran possesses M40
```

## Instructions

1. Enter the claim into the Fact Checker input field
2. Click the **Analyze** button
3. Observe that the IBM Defense Model returns **TRUE** — Jane's database confirms the M40 recoilless gun is listed as operated by the Iranian Army and a specific Iranian brigade. The model provides detailed equipment specifications alongside the verdict
4. Observe that Llama 3.1 70B also returns **TRUE**
5. Observe that GPT OSS 120B returns **UNSURE**
6. Expand the IBM Defense Model's Jane's API Trace and click **"Show JSON Response"** to display the underlying equipment record confirming Iranian M40 operations

![Step 4 - Iran M40 Possession](/img/lab-02/8.png)

## Expected Results

| Model | Verdict |
|-------|---------|
| **IBM Defense Model** | TRUE |
| **Llama 3.1 70B** | TRUE |
| **GPT OSS 120B** | UNSURE |

## Key Observations

### IBM Defense Model
- Returns **TRUE** with comprehensive Jane's Intelligence backing
- Shows the equipment API endpoint was queried
- Provides detailed specifications:
  - Equipment type: M40 recoilless gun
  - Operator: Iranian Army
  - Specific unit assignments
  - Technical specifications
- Verdict includes rich contextual information

### Llama 3.1 70B
- Returns **TRUE** based on training data
- Correct verdict but no supporting evidence
- Cannot provide equipment specifications or unit assignments
- No traceability to authoritative sources

### GPT OSS 120B
- Returns **UNSURE** — lacks confidence in the claim
- Cannot verify the equipment possession
- No access to defense intelligence databases
- **Hedges even when definitive data exists**

## Outcome

IBM Defense Model returns **TRUE** with Jane's equipment record detail, confirming M40 recoilless guns are operated by the Iranian Army. While Llama 3.1 70B also returns TRUE, only the IBM Defense Model provides the detailed equipment specifications and unit assignments that make the verdict actionable for intelligence analysts.

---

**Next Step:** Continue to [Step 5: Equipment Depth](./step-05-equipment-depth.md) to see how the IBM Defense Model handles large-scale equipment installations.