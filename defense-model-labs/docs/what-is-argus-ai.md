---
sidebar_position: 3
title: What is ARGUS AI?
---

# What is ARGUS AI?


**ARGUS AI** is a demonstration implementation of the IBM Defense Model. It provides:

- A **chat-based interface** for natural language interaction with military documents
- **Document upload and analysis** capabilities for various file formats
- **Integration with Janes databases** for equipment and entity verification
- **Structured data extraction** following military data standards
- **Real-time entity enrichment** with authoritative defense intelligence

The following are **available tabs** in Argus AI.

:::tip

**Explore beyond the guided labs:** The guided labs will focus on a **subset** of these tabs, but **feel free to explore other tabs** and their features on your own time afterwards.

:::

---

## Tab: New Chat + Modes

The **New Chat** panel is where users can start new conversations, select analysis modes, and access document management features.

The Modes include:

- **Document Enrichment Mode**: Enriches extracted entities with additional context, including Janes metadata (e.g., equipment specifications)
- **Standard Mode**: Standard document analysis and Q&A
- **Deep Research Mode**: Conducts in-depth research on specific topics
- **COA Generator Mode**: Generates COAs from document content

This tab supports ARGUS AI's broader mission by:
- Enabling users to initiate new analysis sessions with one click
- Providing access to specialized analysis modes for different document types
- Allowing quick access to document management and upload functionality
- Supporting iterative analysis workflows with easy session management
- Facilitating model improvement through data-driven insights
- Ensuring compliance with AI governance standards

![ARGUS AI New Chat Tab](/img/argus-ai/ArgusAI_NewChat_Modes.png)

---

## Tab: Documents

The **Document Library** panel is where users can manage document collections, enable **RAG Mode**, and upload files.

This tab supports ARGUS AI's broader mission by:
- Organizing documents into collections for specific analysis tasks
- Enabling retrieval-augmented generation with uploaded reference materials
- Allowing analysts to control which documents the AI uses for responses
- Grounding AI outputs in mission-relevant source documents

![ARGUS AI Documents Tab](/img/argus-ai/ArgusAI_Documents.png)

---

## Tab: Governance

The **Model Governance** view has deployment details, test results, model health metrics, and evaluation panels for monitoring AI quality and performance.

**Integrated Products:**
- **[watsonx.governance](https://www.ibm.com/products/watsonx-governance)**: Provides AI governance capabilities including model lifecycle management and compliance tracking
- **[OpenScale](https://www.ibm.com/docs/en/software-hub/5.4.x?topic=services-watson-openscale)**: Monitors AI models for fairness, explainability, and drift detection, functioning like an AI factsheet

This tab supports ARGUS AI's broader mission by:
- Providing visibility into AI model health and evaluation status
- Tracking quality metrics and identifying potential issues
- Supporting responsible AI use through continuous monitoring
- Ensuring AI workflows remain trustworthy and compliant
- Leveraging watsonx.governance for comprehensive AI lifecycle governance

![ARGUS AI Governance Tab](/img/argus-ai/ArgusAI_Governance.png)

---

## Tab: Architecture

The **Architecture** view displays available AI agent pipelines with different processing workflows and example prompts for testing.

This tab supports ARGUS AI's broader mission by:
- Showing the different AI processing workflows available for various tasks
- Helping users select the right pipeline for their analytical needs
- Providing transparency into how AI agents process information
- Enabling users to test pipelines before applying them to real scenarios

![ARGUS AI Architecture Tab](/img/argus-ai/ArgusAI_Architecture.png)

---

## Tab: Observability

The **Observability** dashboard has monitoring panels for website analytics, AI model performance, and infrastructure resources.

**Integrated Product:**
- **[Instana](https://www.ibm.com/products/instana)**: Provides comprehensive application performance monitoring (APM) and infrastructure observability, tracking website analytics, application health, and system resources in real-time

This tab supports ARGUS AI's broader mission by:
- Providing real-time visibility into application and AI performance
- Enabling rapid identification of performance issues or errors
- Tracking AI-specific metrics like token usage and model latency
- Supporting operational reliability through comprehensive system monitoring
- Leveraging Instana's APM capabilities for deep application and infrastructure insights
![ARGUS AI Observability Tab](/img/argus-ai/ArgusAI_Observability.png)

---

## Tab: Map

The **Map** view displays a geospatial intelligence interface with satellite imagery showing military installations, units, and real-time intelligence data overlaid on an interactive global map. The map integrates multiple intelligence data sources including:

- Military Installations ([Janes](https://www.janes.com/))
- Runway Directions
- Range Rings
- Live Aircraft
- AIS Ship Tracking
- Weather
- Events
- [RAIC](https://raiclabs.com/) Imagery Coverage
- [RAIC](https://raiclabs.com/) Detections

This tab supports ARGUS AI's broader mission by:
- Visualizing extracted entities and intelligence data in their geographic context
- Providing situational awareness through layered intelligence feeds (installations, aircraft, ships, weather, events)
- Enabling spatial analysis of military activities and infrastructure across regions
- Supporting mission planning with real-time geospatial intelligence integration

![ARGUS AI Map Tab](/img/argus-ai/ArgusAI_Map.png)

---

## Tab: Factchecker

The **Factchecker** tab is the fine-tuning evaluation interface where users can benchmark the IBM Defense Model against a base model using a structured evaluation dataset.

**Key features:**
- **Model Performance Comparison**: Side-by-side accuracy comparison between the fine-tuned Defense Model and a base model
- **Evaluation Dataset Upload**: Upload a labeled dataset to drive the benchmark run
- **Results Dashboard**: Explore accuracy scores, category breakdowns, and error listings after the comparison completes

This tab supports ARGUS AI's broader mission by:
- Demonstrating the measurable performance gains achieved through domain-specific fine-tuning
- Enabling analysts to validate model improvements before deploying to operational workflows
- Providing transparency into how well the Defense Model handles defense and intelligence-specific tasks
- Supporting responsible AI adoption by grounding model selection in empirical evaluation data

![ARGUS AI Factchecker Tab](/img/argus-ai/ArgusAI_Factchecker.png)


---

## Tab: Business Intelligence

The **Business Intelligence** tab demonstrates how the IBM Defense Model automates metadata enrichment for collections of defense-related documents, converting unstructured data into structured, searchable, and actionable formats that significantly improve information retrieval, intelligence analysis, and Q&A workflows.

**Integrated Products:**
- **IBM Defense Model**: Provides domain-specific AI capabilities for defense data analysis and entity extraction
- **IBM watsonx.data — Unstructured Data Curation (UDC)**: Catalogs and classifies unstructured defense documents with enriched metadata
- **IBM watsonx.data — Unstructured Data Integration (UDI)**: Ingests and pipelines unstructured data into structured, queryable formats

**Key features:**
- **Operational Tempo Analysis**: Analyze operations conducted by month to identify activity patterns
- **Operations with Location, Branch & Mission Outcome**: Retrieve operations with coordinates and outcomes for spatial and mission analysis
- **Equipment Issues Ranked**: Aggregate and rank equipment issues across the document collection
- **Equipment Performance Rating**: Identify best-performing equipment systems from unstructured reports

This tab supports ARGUS AI's broader mission by:
- Reducing manual effort required for tagging, categorization, and dissemination of defense data
- Enabling operator-driven pipelines for document ingestion and analysis
- Extracting and structuring key entities from unstructured text at scale
- Improving information retrieval and enhancing the quality and relevance of AI responses
- Unlocking value from large volumes of unstructured defense data through AI-driven metadata enrichment

![ARGUS AI Business Intelligence Tab](/img/argus-ai/ArgusAI_BusinessIntelligence.png)
