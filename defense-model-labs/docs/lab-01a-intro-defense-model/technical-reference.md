---
sidebar_position: 14
title: Technical Reference
---

# Appendix: Technical Reference

## AAR Schema Overview

The AAR schema used in this lab includes the following major sections:

| Section | Description | Key Fields |
|---------|-------------|------------|
| **document** | Metadata about the AAR itself | title, dateCreated, AIQualityScore, accessConstraints |
| **operation** | Details about the military operation | operationName, operationDate, missionObjectives, commanderIntent |
| **participants** | Personnel and units involved | personnel (name, rank, position), units (unitName, unitType) |
| **equipmentIdentified** | Equipment used in operation | equipmentName, equipmentType, janesData, performanceInOperation |
| **executionSummary** | Timeline and narrative of events | eventsTimeline, keyEvents, outcomeAchieved |
| **observations** | Key findings and lessons | keyObservations, lessonsLearned |
| **recommendations** | Suggested improvements | immediate, shortTerm, longTerm |
| **sustainImprove** | What to sustain and improve | sustain, improve |
| **environmentalConditions** | Operating environment | weather, terrain, lightConditions |

## Janes Data Integration

Equipment entities are enriched with the following Janes data fields:

- **Identification:** id, label, type, legacyJguid
- **Classification:** primaryType, equipmentType, role, mobility, operationalDomain
- **Relationships:** manufacturedBy, operatedBy, inFamily, relatedEquipment
- **Specifications:** Technical details and performance characteristics
- **Context:** description, operation, endUserType
- **Metadata:** lastModifiedDate, @context (JSON-LD)

## Useful Resources

- **IBM Defense Model Documentation:** [Contact your IBM representative]
- **Janes Defence Intelligence:** https://www.janes.com
- **US Army UDRA:** https://api.army.mil/e2/c/downloads/2025/02/07/37ae5c1c/udra-v1-1.pdf
- **DoD Data Strategy:** https://media.defense.gov/2020/Oct/08/2002514180/-1/-1/0/DOD-DATA-STRATEGY.PDF

## Support and Feedback

If you encounter any issues during this lab or have questions:

1. **Technical Issues:** Contact your lab instructor or IBM support representative
2. **Feedback:** We welcome your input on how to improve this lab experience
3. **Questions:** Don't hesitate to ask - understanding these concepts is crucial for effective use of the IBM Defense Model

---

**Lab Version:** 1.0  
**Last Updated:** June 2026  
**Author:** IBM Defense Model Bootcamp Team
