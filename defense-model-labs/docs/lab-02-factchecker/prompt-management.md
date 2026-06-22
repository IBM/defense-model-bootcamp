---
sidebar_position: 3
title: Prompt Management
---

# Prompt Management

## Understanding System Prompts

Every AI model receives a hidden set of written instructions before it sees your question — called a **system prompt**, which tells it how to behave, what role to play, and how to format its answers. Prompt Management lets you view and optionally edit those instructions for each model in this tool.

For the IBM Defense Model, Steps 1 and 2 are locked to protect the Jane's retrieval pipeline; only Step 3, which controls how retrieved data is turned into a verdict, can be modified. For the purposes of this demo, the defaults are already configured, and nothing needs to be changed.

## Accessing Prompt Management

The Prompt Management section is located at the bottom of the Fact Checker page and is collapsed by default. Click **Expand** to open it.

![Prompt Management Collapsed](/img/lab-02/2.png)

## IBM Defense Model — Three-Step Pipeline

The IBM Defense Model tab exposes the full three-step RAG pipeline. Steps 1 and 2 run on IBM Granite tool-calling and are read-only. Only Step 3 (Summarization) is editable.

![IBM Defense Model Pipeline](/img/lab-02/3.png)

| Step | Status | Description |
|------|--------|-------------|
| **Step 1** | READ-ONLY | **Route Prediction** — Model analyzes the claim and selects the most relevant Jane's API endpoint. Uses tool-calling and cannot be modified. |
| **Step 2** | READ-ONLY | **API Request Generation** — Model builds the specific query parameters for the selected Jane's endpoint, extracting entity names, identifiers, and attributes from the claim. |
| **Step 3** | EDITABLE | **Summarization** — The prompt is sent after Jane's data has been retrieved. It instructs the model how to interpret the retrieved records and arrive at a TRUE / FALSE / UNSURE verdict. |

### Step 3 Prompt Placeholders

The Step 3 Summarization prompt uses three runtime placeholders:

- **`{fact}`** — The atomic claim being evaluated (e.g., "The F-35 Lightning II is a fifth-generation fighter").
- **`{context}`** — The raw reference data returned from Jane's Intelligence for this claim.
- **`{api_arguments}`** — The query parameters that were sent to the Jane's API endpoint.

## Competitor Models — System Prompt

Llama 3.1 70B and GPT OSS 120B each use a single **System Prompt** — there is no RAG pipeline, no route prediction, and no Jane's retrieval. The entire instruction set is one editable text block.

![Competitor Model Prompts](/img/lab-02/4.png)

## Editing & Resetting Prompts

### To Edit a Prompt:

1. Scroll to the bottom of the Fact Checker page and click **Expand** next to Prompt Management
2. Select the model tab you want to configure: IBM Defense Model, Llama 3.1 70B, or GPT OSS 120B
3. Click the **Edit** button next to the editable prompt section
4. Modify the prompt text in the text area. Keep all required placeholders intact
5. Click **Save** to apply the changes, or **Cancel** to discard them

### To Reset All Prompts:

Click **Reset All Prompts** (red button at the bottom) to restore all models to their default prompts simultaneously.

## Outcome

Once saved, the updated instructions will change how the model interprets and presents its results, changing the tone, reasoning style, or verdict criteria without altering the underlying Jane's data being retrieved.

:::tip
For this lab, you do not need to modify any prompts. The default configurations are optimized for the demonstration scenarios.
:::

---

Now that you understand how prompt management works, you're ready to begin testing claims with [Step 1: Known True Claim](./step-01-known-true.md).