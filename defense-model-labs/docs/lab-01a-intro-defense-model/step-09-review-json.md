---
sidebar_position: 10
title: Step 9 - Review JSON
---

# Step 9: Review the JSON Schema Structure

**Objective:** Understand the organization and content of the structured output.

## Instructions

1. Open the downloaded JSON file in any viewer you prefer:
   - A browser
   - A text editor (VS Code, Notepad++, Sublime Text)
   - A JSON viewer/formatter (online tools or browser extensions)
   - Your IDE of choice

![Output schema](/img/lab-01/output-schema.png)
The above JSON output is viewed in a Firefox browser

2. Examine the structure of the data:
   - Top-level objects (document, operation, participants, equipment, etc.)
   - Nested structures for complex information
   - Arrays for multiple items (personnel, equipment, recommendations)
   - Enrichment data embedded within equipment entries


3. Compare the JSON structure to the original AAR document

## Key Sections to Review

### Document Metadata
```json
{
  "document": {
    "title": "...",
    "documentType": "AAR",
    "dateCreated": "...",
    "AIQualityScore": "...",
    "searchKeywordTags": [...]
  }
}
```
Note: For this lab, certain fields were not populated, but could be populated with additional prompting.

### Equipment with Janes Enrichment
![Output equipment Janes](/img/lab-01/output-equipment-janes.png)
```json
{
  "equipmentIdentified": [
    {
      "equipmentName": "...",
      "equipmentType": "...",
      "affiliation": "...",
      "janesData": {
        "id": "...",
        "description": "...",
        "specifications": [...],
        "operatedBy": [...],
        "relatedEquipment": [...]
      }
    }
  ]
}
```
Note: Even entities that did **not** have a match in Janes are still listed alongside enriched entity data.

### Observations and Lessons Learned
```json
{
  "observations": {
    "keyObservations": [...],
    "lessonsLearned": [
      {
        "lesson": "...",
        "recommendation": "...",
        "applicability": "..."
      }
    ]
  }
}
```

## What to Look For

- **Completeness:** Is all relevant information from the AAR captured?
- **Accuracy:** Are values correctly extracted and categorized?
- **Structure:** Does the organization make sense for downstream use?
- **Enrichment:** Are Janes data fields populated where applicable?


