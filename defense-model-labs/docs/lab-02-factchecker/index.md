---
sidebar_position: 1
title: Lab Overview
---

# Lab 2: Defense Intelligence Information Checker

**Tools:** IBM Defense Model, Llama 3.1 70B, GPT OSS 120B

## Overview

### Lab Overview

- **Duration:** 30-45 minutes
- **Difficulty:** Beginner
- **Prerequisites:** None

### What is the Defense Intelligence Information Checker?

The Defense Intelligence Information Checker tool leverages an IBM Defense Model to fact-check defense intelligence entities, including orders of battle, military equipment inventories, and defense procurement data. The application analyzes user-provided text and PDF documents, cross-referencing identified claims against authoritative Janes intelligence databases to validate factual accuracy and ensure reliable information assessment.

This guided demo will show a set of claims drawn from military systems, orders of battle, and geopolitical scenarios. For each claim, three models are evaluated side-by-side: the IBM Defense Model, Llama 3.1 70B, and GPT OSS 120B. The comparison is designed to highlight where Jane's-grounded retrieval produces more reliable, traceable, and nuanced verdicts than models operating from training data alone.

### Models in This Demo

| Model | Role in Demo |
|-------|--------------|
| **IBM Defense Model** | Model built with defense-specific analysis backed by Jane's Intelligence retrieval. Evaluated on accuracy, appropriate uncertainty, and source grounding. |
| **Llama 3.1 70B** | Baseline general-purpose reasoning model. Included as an independent comparator with no defense data grounding. |
| **GPT OSS 120B** | Alternative open-source large model. Included as a second comparator to highlight cross-model inconsistencies. |

### How the IBM Defense Model Works

The IBM Defense Model processes each factual claim through a structured multi-step pipeline:

**Step 1 — Route Prediction:** Model classifies the claim to determine the correct Jane's API endpoint (e.g., equipment, military-groups, platforms).

**Step 2 — Jane's Retrieval:** A targeted API query is sent to the Jane's Intelligence database, and the raw JSON record is returned.

**Step 3 — Verdict Generation:** The retrieved record is passed to GPT OSS 120B, which synthesizes a TRUE / FALSE / UNSURE verdict with an explanation grounded in the retrieved data.

### Lab Steps Overview

This lab consists of 9 hands-on scenarios plus setup:

1. **[Lab Setup](./lab-setup.md)** - Access the Fact Checker interface
2. **[Prompt Management](./prompt-management.md)** - Understanding system prompts
3. **[Step 1: Known True Claim](./step-01-known-true.md)** - Verify F-35 Lightning II classification
4. **[Step 2: Implausible Claim](./step-02-implausible.md)** - Detect operationally impossible claims
5. **[Step 3: Operational Status](./step-03-operational-status.md)** - Verify Murted Air Base status
6. **[Step 4: Equipment Identification](./step-04-equipment-id.md)** - Confirm Iran M40 possession
7. **[Step 5: Equipment Depth](./step-05-equipment-depth.md)** - Analyze Tor-M1 installations in Iran
8. **[Step 6: Inventory Precision](./step-06-inventory-precision.md)** - Verify Pantsir-S1 quantities
9. **[Step 7: Supply Chain Verification](./step-07-supply-chain.md)** - Test Mi-17 transfer claims
10. **[Step 8: Order of Battle Integrity](./step-08-oob-integrity.md)** - Detect planted foreign units
11. **[Step 9: Military Group Verification](./step-09-military-group.md)** - Confirm 52nd ADA Brigade affiliation

### Demo Learning Outcomes

By the end of this demonstration, participants will have observed:

- How Jane's API retrieval provides traceable, citable evidence for every verdict
- How IBM Defense Model uses tool calling to trusted Janes intelligence sources to fact-check defense intelligence entities
- Cross-model inconsistencies that reveal the unreliability of ungrounded models on niche defense topics
- Scenarios where IBM Defense Model identifies operationally significant nuances (e.g., equipment received vs. operational; planted foreign units in an order of battle)

### What You'll Learn

Through these scenarios, you'll experience:

- **AI-powered fact-checking** that validates defense intelligence claims
- **Jane's Intelligence integration** providing authoritative source grounding
- **Multi-model comparison** revealing strengths and weaknesses of different approaches
- **Precision verification** for equipment inventories and orders of battle
- **The IBM Defense Model** combining RAG architecture with domain expertise