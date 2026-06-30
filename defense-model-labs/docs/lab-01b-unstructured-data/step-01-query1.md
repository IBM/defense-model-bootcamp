---
sidebar_position: 5
title: Step 1 - Query 1
---

# Step 1: Document Upload and Processing

**Objective:** Upload a defense document into the IBM watsonx.data environment and observe how the platform automatically ingests, processes, and structures the content.

## Instructions

Follow the steps in your click-through demo environment to complete this query:

1. Navigate to the document upload area in your lab environment
2. Upload the provided After Action Report (AAR) document
3. Wait for the ingestion pipeline to complete — the platform will:
   - Extract text and metadata from the document
   - Classify and tag the content using the Defense Model
   - Store the structured output in a Presto table for querying
4. Once processing is complete, confirm the document appears in your catalog

## What to Look For

- **Metadata extraction** — does the platform correctly identify document title, date, classification level, and author?
- **Entity recognition** — are key entities (personnel, equipment, locations, units) automatically identified and tagged?
- **Schema normalization** — is the unstructured content mapped to a consistent, queryable schema?
- **Lineage tracking** — can you trace the structured output back to the original source document?

## Expected Result

The document is successfully ingested and its content is available as structured data in the Presto table. You should be able to see the extracted metadata and entities in the catalog view.

## 💡 Key Insight

This step demonstrates the **Discover → Enrich** transition from the lab process flow. What was previously a static PDF or Word document is now a governed, searchable data asset — without any manual tagging or data entry.

---

Next: **[Step 2: Query 2 →](./step-02-query2.md)**
