---
sidebar_position: 10
title: Step 9 - Review JSON
---

# Step 9: Review the JSON Schema Structure

**Objective:** Understand the organization and content of the structured output.

## Instructions

1. Open the downloaded JSON file using:
   - A text editor (VS Code, Notepad++, Sublime Text)
   - A JSON viewer/formatter (online tools or browser extensions)
   - Your IDE of choice
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

### Equipment with Janes Enrichment
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

## 📊 Data Quality Assessment

Notice the `AIQualityScore` field in the document metadata. This score (0-100) indicates the IBM Defense Model's assessment of the AAR's completeness and quality, helping users understand the reliability of the extracted data.
