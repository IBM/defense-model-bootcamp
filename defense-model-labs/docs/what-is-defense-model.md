---
sidebar_position: 2
title: What is the IBM Defense Model?
---

# What is the IBM Defense Model?

![High-Level Introduction to IBM Defense Model.png](/img/lab-01/High-Level-Introduction-to-IBM-Defense-Model.png)

## Executive Overview

The IBM Defense Model is a purpose-built AI model for defense and national security workflows. It is built on IBM Granite foundation models, delivered through IBM watsonx.ai, and developed in collaboration with Janes, a provider of open-source defense intelligence.

The Defense Model is designed to help defense organizations synthesize information, extract insights, identify patterns, support planning and reporting, and operate in secured mission environments.

Unlike a general-purpose large language model, the Defense Model is optimized for defense-specific terminology, operational context, equipment information, intelligence workflows, and secure deployment requirements.

![watsonx AI Defense](/img/lab-01/watsonx-ai-defence-ls_5x2.webp)

Learn more at: [https://www.ibm.com/products/watsonx-ai/defense-model](https://www.ibm.com/products/watsonx-ai/defense-model)

## What It Is

The IBM Defense Model is a Granite-based, defense-focused large language model designed to support defense and national security use cases in trusted, secured environments.

It combines:

- **IBM Granite foundation models** as the AI foundation
- **IBM watsonx.ai** as the enterprise AI platform for development, deployment, and orchestration
- **Janes defense intelligence** to support domain-specific context, retrieval, and analysis
   - Learn more about Janes at **[https://www.janes.com →](https://www.janes.com)**

:::info

The **IBM Defense Model** is a **Granite-based AI model** adapted for defense workflows, terminology, and intelligence tasks, using Janes-informed data patterns and watsonx.ai deployment capabilities to support secure, mission-relevant decision workflows.

:::

## Why It Matters

Defense organizations operate in environments where decision-making depends on large volumes of complex, fast-changing information. IBM positions the Defense Model as a capability to help users make decisions with greater speed, precision, and confidence in secured, mission-critical environments.

The model is intended to address several **common defense AI challenges**:

- General-purpose AI models may not understand defense terminology, equipment, doctrine, or operational context well enough for domain-specific workflows
- Defense teams often need AI capabilities that can work with trusted data sources rather than relying only on static model knowledge
- Many mission environments require on-premises, edge, classified, or air-gapped deployment options
- Defense AI must be governed, secure, traceable, and aligned with responsible AI principles

## IBM + Janes Collaboration

IBM and Janes collaborated to bring together IBM's enterprise AI capabilities and Janes' defense intelligence data. The collaboration combines **authoritative defense** and security data from Janes with IBM trusted AI solutions to support situational awareness, operational risk reduction, and mission-critical decision support.

**Janes** contributes domain-specific defense intelligence, including structured information relevant to equipment, capabilities, military context, and defense analysis. **IBM** contributes watsonx.ai, Granite foundation models, enterprise AI infrastructure, governance capabilities, and secure deployment patterns.

IBM's [collaboration announcement](https://newsroom.ibm.com/2025-10-29-ibm-announces-defense-focused-ai-model-to-accelerate-mission-planning-and-decision-support) outlines the technical pattern as using an IBM Granite model with a Retrieval-Augmented Generation pattern using Janes data to support operational decision support, situational analysis, and mission planning.

## Core Components

### 1. IBM Granite Foundation Models

The Defense Model is built on IBM Granite foundation models. IBM's model card identifies `ibm-defense-3-3-8b-instruct` as a defense-focused model that is fine-tuned from `granite-3-3-8b-instruct` — meaning it starts from Granite's pre-trained weights and is then further trained on defense-specific data. `granite-3-3-8b-instruct` is an 8-billion-parameter instruction-tuned model with a 128K context length.

Granite provides the underlying language, reasoning, summarization, extraction, and instruction-following capabilities that the Defense Model adapts for defense-specific use cases.

### 2. Janes Defense Intelligence

Janes provides trusted defense intelligence used to inform defense-specific workflows. Janes provides verified, validated, unbiased, and relevant foundational defense intelligence. The Defense Model is trained on general defense industry knowledge and use of the Janes API, and is designed for tool-calling against the Janes Inventory API and Retrieval-Augmented Generation tasks.

### 3. watsonx.ai

The Defense Model is delivered through **IBM watsonx.ai**, which provides the **enterprise AI platform layer** for building, deploying, and managing AI models and applications.

**IBM watsonx.data** is an open, hybrid data lakehouse built to scale analytics and AI workloads across structured and unstructured data stored anywhere — on-premises, in the cloud, or at the edge. It uses open data formats and an open metadata layer to give organizations a unified, governed view of their enterprise data without requiring it to be moved or duplicated.

In a deployed solution, watsonx.data acts as the data layer that feeds the Defense Model hosted on watsonx.ai: organization-specific data — such as logistics records, mission reports, or asset inventories — is stored and queried in watsonx.data, then surfaced to the model at inference time via RAG or API tool calls, so responses reflect the organization's own authoritative data rather than pre-trained knowledge alone.

### 4. Retrieval-Augmented Generation and Tool Calling

The Defense Model is designed to support Retrieval-Augmented Generation (RAG), where the model uses **relevant external data to generate more grounded responses**. The Defense Model is designed for tool-calling of the Janes Inventory API, enabling it to interact with structured defense data sources as part of a response workflow, with a Granite model using a RAG pattern with Janes data.


## How the Defense Model Works Conceptually

The Defense Model can be understood as a layered capability:

### Layer 1: Foundation Model

IBM Granite provides the underlying language model foundation. The documented model, `ibm-defense-3-3-8b-instruct`, builds on `granite-3-3-8b-instruct`.

### Layer 2: Defense-Specific Adaptation

The model is adapted for defense-specific knowledge, terminology, and operational context. IBM says the model is trained on military doctrine and Janes data to understand domain-specific terminology and operational context.

### Layer 3: Trusted Data Access

The model can use RAG and Janes API tool-calling patterns to retrieve, synthesize, and analyze defense-relevant data rather than relying only on model memory.

### Layer 4: Secure Deployment

IBM positions the model for deployment in secured environments, including air-gapped, classified, edge, and on-premises settings.

## Key Differentiators

### ⭐ Defense-Specific Context

The Defense Model is optimized for defense terminology, military doctrine, operational context, and domain-specific tasks.

### ⭐ Trusted Defense Data

The model is designed to work with Janes defense intelligence and Janes API-enabled workflows, helping ground responses in relevant defense data.

### ⭐ Secure Deployment Options

IBM states that the Defense Model supports deployment in air-gapped, classified, edge, and on-premises environments.

### ⭐ Mission-Relevant Use Cases

IBM identifies use cases including defense planning, analyst reporting, document enrichment, wargaming, simulation, equipment analysis, logistics optimization, and supply chain planning.

### ⭐ Enterprise AI Governance Alignment

IBM connects the Defense Model to its broader trusted AI and watsonx governance approach, including responsible AI, security, risk management, and compliance.

## Representative Use Cases

| Use Case | Description |
|----------|-------------|
| **Analyst Reporting** | The Defense Model can support analyst reporting by helping users synthesize information, extract relevant details, and generate data-augmented reporting outputs. |
| **Mission Planning and Decision Support** | The Defense Model supports planning, reporting, strategy, and mission-relevant decision workflows. |
| **Document Enrichment** | Document enrichment is one of the model's mission-relevant use cases |
| **Wargaming and Simulation** | Wargaming and simulation is among the Defense Model's mission-relevant use cases. |
| **Equipment and Capability Analysis** | Analysis of types, locations, and capabilities of defense or technical equipment. |
| **Logistics and Supply Chain Optimization** | Logistics efficiency, supply chain optimization, disruption simulation, and route planning 
| **Maintenance and Parts Forecasting** | Forecasting parts and equipment needs, aligning maintenance strategies, and predicting failure patterns   
| **Defense Industrial Base Planning** | DefenseScoop reported that Janes viewed early use cases as including operational planning and intelligence functions, as well as strategy and planning within the defense industrial base. |

## Deployment Considerations

The Defense Model is designed for environments where data security, sovereignty, and mission connectivity constraints matter. IBM states that the model can support air-gapped, classified, edge, and on-premises deployment settings.

This deployment orientation is important because defense organizations often cannot send mission data to public cloud-only AI services. The model is positioned to operate closer to the mission environment, including secured and disconnected settings.

## Trust, Governance, and Responsible AI

IBM frames the Defense Model within its broader trusted AI and responsible AI strategy. IBM's announcement emphasizes accurate insights, security, ethics, mission planning, and operational readiness as core elements of the model's value proposition.

IBM's collaboration announcement also references watsonx.governance as part of IBM's approach to responsible AI adoption, risk mitigation, and compliance.

For defense workflows, the model should be implemented with human review, validation, data governance, access controls, and mission-owner oversight. The Defense Model **supports** decision workflows rather than replacing accountable human decision-making.

## What the Defense Model Is Not

- The Defense Model is **not** simply a general-purpose chatbot with defense branding. It is a purpose-built, Granite-based model optimized for defense-specific tasks and secured deployment environments.

- The Defense Model is **not** a replacement for commanders, analysts, maintainers, planners, or mission owners. It supports analysis, planning, reporting, document enrichment, and decision-support workflows.

- The Defense Model is **not** automatically applicable to every defense workflow. Successful implementation depends on mission context, data access, security requirements, licensing, accreditation, integration patterns, and user validation.

## Key Capabilities Summary

- **Defense-trained AI**: Fine-tuned with defense taxonomy and doctrine to deliver contextual, mission-ready intelligence across applications such as threat planning, supply chain resilience, geopolitical forecasting, weapons evaluation, and battlefield readiness

- **Trusted insights at scale**: Combines IBM Granite foundation models with Janes' continuously updated intelligence - 170M+ connections validated through 500K+ analyst hours annually

- **Accelerated decisions**: Cuts research time by up to 85%, enabling analysts to focus on higher-value strategic tasks and faster mission planning

- **Secure and sovereign**: Deployable on-premises or in air-gapped environments to safeguard sensitive data and ensure mission integrity

- **Operational advantage**: Provides timely, unbiased, and actionable intelligence to improve readiness, confidence, and effectiveness in the digital battlespace

- **Analyze unstructured military documents** such as After Action Reports, intelligence briefings, and operational plans

- **Extract critical information** including equipment, personnel, locations, and tactical observations

- **Enrich data** by cross-referencing with authoritative sources like Janes Defence databases

- **Standardize outputs** according to DoD data schemas and common data standards

- **Accelerate decision-making** by transforming raw documents into actionable intelligence

## Key Takeaways

- The IBM Defense Model is a Granite-based, defense-focused AI model, not a general-purpose chatbot

- Janes defense intelligence is central to its domain relevance and supports RAG and API-enabled workflows

- The model is designed for secured mission environments, including air-gapped, classified, edge, and on-premises deployment settings

- Strong use cases include analyst reporting, planning, logistics, equipment analysis, document enrichment, wargaming, simulation, and maintenance support

- The model supports decision workflows; it does not replace accountable human decision-making