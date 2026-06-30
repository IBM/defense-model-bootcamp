---
sidebar_position: 3
title: System Architecture
---

# System Architecture

## Architecture Overview

![System Architecture](/img/lab-01b/architecture.png)

This architecture leverages **IBM watsonx.data intelligence** as the central platform to transform enterprise data into trusted, AI-ready business assets.

## Data Sources

Data from multiple sources is ingested regardless of whether it is structured, semi-structured, or unstructured:

- Document repositories
- Databases
- Cloud storage
- On-premises applications
- Cloud applications
- Operational systems

## Data Types Supported

| Type | Examples |
|------|---------|
| Structured | Relational databases, spreadsheets, CSV |
| Semi-structured | JSON, XML, log files |
| Unstructured | PDFs, Word documents, emails, images, AARs |

## Platform Capabilities

Within the platform, a comprehensive **metadata layer** provides:

| Capability | Description |
|------------|-------------|
| Governance & Trust | Policy enforcement, access control, and compliance automation |
| Metadata & Discovery | Automatic cataloging and tagging of data assets |
| Lineage | End-to-end tracking of data origin and transformations |
| Data Quality & Observability | Continuous monitoring of data health and accuracy |
| Semantic & Knowledge | Business glossaries, ontologies, and relationship graphs |
| Data Product Enablement | Packaging data as governed, reusable products |

## AI Layer

AI-driven enrichment converts unstructured content into structured, contextualized metadata using:

- **AI Agents & Assistants** — conversational interfaces for data discovery and Q&A
- **AI-Enabled processing** — automated classification, extraction, and enrichment
- **MCP Server + Defense Model** — domain-specific intelligence applied to defense content

## Deployment Model

The architecture runs across **cloud, hybrid, and on-premises environments**, delivering trusted context to enterprise AI applications and users.

## Users and Use Cases

| User Type | Use Cases |
|-----------|-----------|
| AI Agents / Apps | AI agents and agentic workflows |
| Analysts | Business intelligence, self-service analytics |
| Operators | Operational applications, data quality programs |
| Decision-makers | Data products, cross-domain intelligence synthesis |

## Role of ARGUS AI

ARGUS AI serves as your intelligent assistant for document analysis, combining the conversational ease of modern AI chatbots with the precision and reliability required for defense applications. It sits in the **Access** layer of the architecture — consuming governed, enriched data and exposing it through natural language queries.

---

Next: **[Lab Setup →](./lab-setup.md)**
