---
sidebar_position: 6
title: Step 2 - Query 2
---

# Step 2: Master Document Querying Techniques

**Objective:** Use natural language queries against your processed document collection to extract insights, surface relationships, and demonstrate the power of AI-driven information retrieval.

## Instructions

With your document ingested from Step 1, use the ARGUS AI assistant in your lab environment to run the following queries:

### Query A — Document Summary

Ask the assistant:

```
Summarize the key events and outcomes from the After Action Report.
```

Observe how the assistant draws on the structured, enriched metadata rather than performing a raw keyword search.

### Query B — Entity Extraction

Ask the assistant:

```
List all military equipment mentioned in the document and their operational status.
```

Review the response for accuracy against the source document. Notice how entities are returned with context and source attribution.

### Query C — Relationship Mapping

Ask the assistant:

```
What units were involved in the operation, and what were their roles?
```

This query demonstrates the **relationship mapping** capability — the model surfaces connections between entities that would require manual cross-referencing in a traditional workflow.

### Query D — Comparative Analysis *(Optional)*

If multiple documents are available in your environment, ask:

```
Compare the lessons learned across all available After Action Reports.
```

This shows how the platform scales — the same natural language interface works across a single document or an entire document collection.

## What to Look For

- **Accuracy** — are the responses grounded in the actual document content?
- **Source attribution** — does the assistant indicate which document or section its answer comes from?
- **Context awareness** — does the model understand defense-specific terminology and relationships?
- **Speed** — compare how long this takes vs. manually reading and cross-referencing the documents

## Expected Result

ARGUS AI returns precise, context-aware answers sourced directly from the governed, enriched document data in the Presto table. Each response should be traceable back to a specific section of the source document.

## 💡 Key Insight

This step demonstrates the **Access** layer of the architecture. Users interact with trusted enterprise data through natural language — no SQL, no file searching, no manual cross-referencing. The governance and enrichment work done in earlier pipeline stages is what makes this precision possible.

---

Next: **[Lab Completion →](./completion.md)**
