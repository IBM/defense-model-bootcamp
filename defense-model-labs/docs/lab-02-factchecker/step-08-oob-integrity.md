---
sidebar_position: 11
title: 'Step 8: Order of Battle Integrity'
---

# Step 8: Order of Battle Integrity Check

**Scenario:** IBM Defense Model flags a planted non-Russian unit — GPT and Llama return inconsistent results

## Objective

Test each model's ability to detect a foreign unit deliberately planted within a claimed Russian order of battle — a critical capability for intelligence integrity verification.

## Background

This compound claim contains a deliberate anomaly: the **52nd Air Defense Artillery Brigade is a U.S. Army unit** (assigned to the 10th Army Air and Missile Defense Command — 10th AAMDC), not a Russian formation. It has been intentionally inserted to test each model's ability to detect foreign units planted within a claimed Russian order of battle.

## The Claim

```
Russian OOB — 54th Motor Rifle Regiment, 57th Motor Rifle Regiment, 10th Tank Regiment, 27th Artillery Regiment and 52nd Air Defense Artillery Brigade.
```

## Instructions

1. Enter the full compound claim and click **Analyze**
2. The system will decompose it into five individual atomic facts, one per unit
3. Observe the IBM Defense Model results: it returns **TRUE** for Russian units found in Jane's order of battle records. It returns **UNSURE** for the 52nd Air Defense Artillery Brigade — correctly declining to confirm it as a Russian unit because Jane's returns no Russian record for that brigade
4. Observe that GPT OSS 120B returns **TRUE** for the 52nd Air Defense Artillery Brigade — incorrectly confirming a U.S. Army unit as part of the Russian order of battle. This is a critical hallucination with operational consequences
5. Observe that Llama 3.1 70B returns **FALSE** for the 52nd Air Defense Artillery Brigade but also returns **FALSE** for legitimate Russian units such as the 27th Artillery Regiment — demonstrating inconsistent and unreliable results that cannot be trusted in either direction

![Step 8 - Order of Battle Integrity](/img/lab-02/14.png)

## Expected Results

| Claim | IBM Defense Model | Llama 3.1 70B | GPT OSS 120B |
|-------|-------------------|---------------|--------------|
| The 54th Motor Rifle Regiment is included in the Russian order of battle. | TRUE | TRUE | UNSURE |
| The 57th Motor Rifle Regiment is included in the Russian order of battle. | TRUE | TRUE | UNSURE |
| The 10th Tank Regiment is included in the Russian order of battle. | TRUE | TRUE | UNSURE |
| The 27th Artillery Regiment is included in the Russian order of battle. | TRUE | TRUE | UNSURE |
| **The 52nd Air Defense Artillery Brigade is included in the Russian order of battle.** | **UNSURE** *(Planted U.S. unit)* | **FALSE** | **TRUE** *(Hallucination)* |

## Key Observations

### IBM Defense Model
- Returns **TRUE** for legitimate Russian units (54th, 57th, 10th, 27th)
- Returns **UNSURE** for the 52nd ADA Brigade
- Correctly hedges because Jane's has no Russian record for this unit
- **Appropriate epistemic caution prevents false confirmation**
- Verdict is grounded in the presence/absence of Jane's records

### Llama 3.1 70B
- Returns **TRUE** for some legitimate Russian units
- Returns **FALSE** for the 52nd ADA Brigade (correct rejection)
- **Also returns FALSE for legitimate Russian units** (27th Artillery Regiment)
- Inconsistent and unreliable in both directions
- Cannot distinguish between planted units and legitimate units

### GPT OSS 120B
- Returns **UNSURE** for legitimate Russian units
- Returns **TRUE** for the 52nd ADA Brigade
- **Critical hallucination: confirms a U.S. Army unit as Russian**
- This error has operational consequences
- **Dangerous for intelligence integrity verification**

## Critical Question

**Which model's behavior would you want in an intelligence workflow?**
- One that hedges on missing data (IBM Defense Model)
- One that confidently confirms a wrong answer (GPT OSS 120B)
- One that is inconsistently wrong (Llama 3.1 70B)

## Outcome

IBM Defense Model correctly hedges on the 52nd ADA Brigade (a U.S. Army unit), returning **UNSURE** because Jane's has no Russian record for it. GPT OSS 120B critically hallucinates **TRUE**, confirming a foreign unit as Russian. Llama 3.1 70B returns **FALSE** for the planted unit but also incorrectly rejects legitimate Russian units.

**GPT OSS 120B confirming the 52nd ADA Brigade as a Russian unit is a critical intelligence failure.** This U.S. Army unit is assigned to the 10th AAMDC, not the Russian military. Confirming it as Russian could lead to:
- Incorrect threat assessments
- Flawed operational planning
- Intelligence integrity failures
- Potential friendly fire scenarios

## Key Takeaway
**Order of battle integrity requires source grounding.** Only the IBM Defense Model's Jane's-backed verification can reliably detect planted foreign units. Ungrounded models either hallucinate confirmations or reject legitimate units inconsistently.

---

**Next Step:** Continue to [Step 9: Military Group Verification](./step-09-military-group.md) to confirm the true affiliation of the 52nd ADA Brigade.