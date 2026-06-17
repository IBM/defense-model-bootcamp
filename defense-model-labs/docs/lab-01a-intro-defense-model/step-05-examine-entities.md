---
sidebar_position: 6
title: Step 5 - Examine Entities
---

# Step 5: Examine the Entity Table

**Objective:** Review the structured presentation of extracted entities.

## Instructions

1. Examine the entity table displayed by ARGUS AI
![Look up entities list 1](/img/lab-01/look-up-entities-list-1.png)
![Look up entities list 2](/img/lab-01/look-up-entities-list-2.png)

2. Note the organization of information in the CSV table:
   - **Equipment (as in document):** The designation as it appears in the AAR
   - **Janes Name:** The standardized name from Janes database
   - **Type:** Classification (In-Service Inventory, Equipment Family, Equipment Variant)
   - **Manufacturer:** The company that produces the equipment
   - **Country:** Country of origin
   - **Role(s):** Functional categories (C4ISTAR, Combat/offensive, etc.)
   - **Janes Link:** Reference link to detailed specifications

3. Review the matched entities:
   - **Communications equipment:** AN/PRC-152A, AN/PRC-117G (L3Harris Technologies)
   - **Night vision devices:** AN/PVS-14, AN/PVS-7B, AN/PVS-31A (L3Harris Technologies)
   - **Thermal/targeting systems:** AN/PAS-13 (Raytheon), AN/TPQ-50 (SRC Inc)
   - **Vehicles:** M1151A1 HMMWV, M-ATV (Oshkosh Defense)
   - **Command systems:** FBCB2 (Northrop Grumman)
   - **Navigation:** AN/PSN-13 (Collins Aerospace)

4. Note entities with no Janes match:
   - M1126 Stryker infantry carrier vehicle
   - AN/TPS-80 G/ATOR ground/air task-oriented radar
   - Generic commercial quadcopter (UAS) references
   - "Counter-UAS" procedures/equipment (no specific system named)
   - Unit-specific designations (e.g., "Scout Platoon", "Forward Support Company 801st BSB")
   

> **Note:** Entities without Janes matches are expected and not a concern. These items may be generic references, procedural mentions, or unit-specific designations that don't correspond to specific equipment in the Janes database. They will still appear in the equipment mentions throughout the analysis and contribute to the overall understanding of the document.

## What to Look For

- **Janes Integration:** How many entities were successfully matched to the Janes database?
- **Equipment Categories:** What types of equipment dominate (communications, vehicles, sensors)?
- **Manufacturer Patterns:** Which defense contractors appear most frequently?
- **Unmatched Entities:** Are the unmatched items generic references or unit designations as expected?
- **Data Richness:** Does each matched entity include manufacturer, country, and role information?

## 📊 Analysis Insight

<div style={{backgroundColor: '#fffbcc', padding: '15px', borderLeft: '4px solid #f0c000', borderRadius: '4px', margin: '10px 0'}}>
<strong>💡 Key Insight:</strong> The entity table transforms narrative text into queryable data, enabling analysts to quickly identify key assets, participants, and locations across multiple documents. This transformation is fundamental to the Defense Model's ability to scale analysis across large document collections.
</div>

- Showing this results list in this step is useful because it lets learners immediately verify what was extracted, distinguish matched versus unmatched entities, and build confidence before using these results in later analysis.
