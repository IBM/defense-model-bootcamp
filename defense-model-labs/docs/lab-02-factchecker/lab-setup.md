---
sidebar_position: 2
title: Lab Setup
---

# Lab Setup

## Accessing the Fact Checker

The Defense Intelligence Fact Checker is accessible via the IBM Defense Model web application. Navigate to the Fact Checker page from the left sidebar.

![Fact Checker Interface](/img/lab-02/1.png)

## Required Materials

For this lab, you will need:
- Access to the IBM Defense Model Fact Checker web interface (URL provided by instructor)
- A modern web browser (Chrome, Firefox, or Edge recommended)
- No additional files are required - all claims will be entered directly into the interface

## Before You Begin

1. Open your web browser and navigate to the IBM Defense Model Fact Checker interface
2. Verify you can see the main Fact Checker page with:
   - Input field for entering claims
   - Three model comparison panels (IBM Defense Model, Llama 3.1 70B, GPT OSS 120B)
   - Prompt Management section at the bottom (collapsed by default)

## Interface Overview

The Fact Checker interface consists of several key components:

### Main Input Area
- **Claim Input Field**: Where you enter the factual claims to be verified
- **Analyze Button**: Initiates the fact-checking process across all three models

### Results Display
Three side-by-side panels showing verdicts from:
- **IBM Defense Model**: With Jane's API trace and JSON response
- **Llama 3.1 70B**: General-purpose model results
- **GPT OSS 120B**: Alternative open-source model results

### Prompt Management (Optional)
Located at the bottom of the page, this section allows you to:
- View system prompts for each model
- Edit prompts (where permitted)
- Reset prompts to defaults

---

Once you have verified access to the Fact Checker interface, you're ready to begin with [Prompt Management](./prompt-management.md).