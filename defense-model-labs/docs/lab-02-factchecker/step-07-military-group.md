---
sidebar_position: 10
title: 'Step 7: Military Group Verification'
---

# Step 7: Military Group Verification — 52nd Air Defense Artillery Brigade

**Scenario:** All models correctly confirm the 52nd ADA Brigade as a U.S. Army unit under the 10th AAMDC

## Objective

Following Step 8, this scenario isolates the 52nd Air Defense Artillery Brigade to verify its true affiliation and expose the contradiction in GPT OSS 120B's previous verdict.

## Background

In Step 6, the 52nd Air Defense Artillery Brigade was planted within a Russian order of battle. GPT OSS 120B incorrectly confirmed it as a Russian unit. This scenario verifies the unit's actual affiliation with the U.S. Army, directly contradicting that false claim.

## The Claim

```
52nd Air Defense Artillery Brigade - 10th AAMDC - U.S. Army.
```

## Instructions

1. Enter the claim into the Fact Checker input field, or click Sample Fact #6 to auto-fill it automatically
2. Click the **Analyze** button
3. Observe that all three models return **TRUE** — the 52nd Air Defense Artillery Brigade is correctly confirmed as a U.S. Army Air Defense Artillery brigade
4. Observe that all three models also confirm the 52nd is assigned to the 10th Army Air and Missile Defense Command (10th AAMDC)
5. **Return to Step 6 and compare:** GPT OSS 120B returned **TRUE** when the 52nd was listed as a Russian unit, yet also returns **TRUE** here confirming it is U.S. Army. This contradiction — asserting the same unit is both Russian and American — is a definitive hallucination failure

![Step 9 - 52nd ADA Brigade Verification](/img/lab-02/15.png)

## Expected Results

| Claim | IBM Defense Model | Llama 3.1 70B | GPT OSS 120B |
|-------|-------------------|---------------|--------------|
| The 52nd Air Defense Artillery Brigade is an Air Defense Artillery brigade of the U.S. Army. | TRUE | TRUE | TRUE |
| The 52nd Air Defense Artillery Brigade is assigned to the 10th Army Air and Missile Defense Command (10th AAMDC). | TRUE | TRUE | UNSURE |

## Key Observations

### IBM Defense Model
- Returns **TRUE** with Jane's Intelligence confirmation
- Confirms U.S. Army affiliation
- Confirms assignment to 10th AAMDC
- **Consistent with Step 6:** Returned UNSURE for Russian claim (no Russian record), TRUE for U.S. claim (confirmed record)
- **Integrity maintained across scenarios**

### Llama 3.1 70B
- Returns **TRUE** for U.S. Army affiliation
- Returns **TRUE** for 10th AAMDC assignment
- Correct verdicts in this scenario
- **Consistent with Step 6:** Correctly rejected the Russian claim

### GPT OSS 120B
- Returns **TRUE** for U.S. Army affiliation
- Returns **TRUE** for 10th AAMDC assignment
- **CRITICAL CONTRADICTION:** In Step 6, confirmed the same unit as Russian
- **Asserted the 52nd ADA Brigade is both Russian AND American**
- **Definitive hallucination failure**

## Cross-Reference Analysis: Step 6 vs Step 7

| Model | Step 6: Russian OOB Claim | Step 7: U.S. Army Claim | Consistency |
|-------|---------------------------|-------------------------|-------------|
| **IBM Defense Model** | UNSURE (no Russian record) | TRUE (confirmed U.S. record) | ✅ **Consistent** |
| **Llama 3.1 70B** | FALSE (rejected Russian claim) | TRUE (confirmed U.S. claim) | ✅ **Consistent** |
| **GPT OSS 120B** | TRUE (confirmed as Russian) | TRUE (confirmed as U.S.) | ❌ **CONTRADICTORY** |

## Outcome

All three models return **TRUE**, confirming the 52nd Air Defense Artillery Brigade as a U.S. Army unit under the 10th AAMDC. Cross-referencing with Step 6 exposes **GPT OSS 120B's critical contradiction**: it confirmed the same unit as both Russian and American. The IBM Defense Model's consistent handling — **UNSURE** in Step 6 (no Russian record), **TRUE** here (correct affiliation confirmed) — demonstrates the integrity of Jane's-grounded retrieval.

## Critical Contradiction Exposed
**GPT OSS 120B confirmed the 52nd ADA Brigade as BOTH Russian (Step 6) AND American (Step 7).** This is impossible and represents a fundamental reliability failure. The same unit cannot belong to two different militaries.

This contradiction proves that GPT OSS 120B:
- Fabricates confident answers without verification
- Cannot maintain consistency across related claims
- Is unsuitable for intelligence integrity verification
- Poses operational risks if used for order of battle analysis

---

**Next Step:** Proceed to [Lab Completion](./completion.md) to review what you've learned.