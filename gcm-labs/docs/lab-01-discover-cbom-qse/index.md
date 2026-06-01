---
sidebar_position: 1
title: Lab Overview
---

# Lab 1: IBM Quantum Safe Explorer + IBM Bob

**Hands-On Lab Guide — Post-Quantum Cryptography Migration**

## Background

Quantum computers are advancing rapidly and will eventually break the public-key cryptography that protects most of today's digital systems — including encrypted communications, authentication tokens, and digital signatures. To stay ahead of this threat, government agencies and organizations must migrate their cryptographic implementations to **Post-Quantum Cryptography (PQC)** algorithms, which are designed to be secure even against quantum computers.

In this lab, you will take on the role of a **Security Administrator at the CCE Agency (Crypto Currency Exchange)**. Your mission is to use two IBM tools — **IBM Quantum Safe Explorer (QSE)** and **IBM Bob** — to assess and harden the CCE Agency's secure-chat application against quantum threats.

:::tip[No coding experience required]

You will be clicking through pre-built tools and asking IBM Bob (an AI assistant) questions in plain English. Follow each step in order.

:::

## Tools You Will Use

| Tool | What It Does |
|------|--------------|
| **IBM Quantum Safe Explorer (QSE)** | Scans application source code to find cryptographic weaknesses — like outdated encryption algorithms or insecure key sizes — and generates a detailed vulnerability report. |
| **IBM Bob** | An AI assistant embedded in your code editor. You ask Bob questions in plain English, and it explains vulnerabilities, suggests fixes, and can automatically update the code for you. |

## PQC Migration Phases Covered in This Lab

The National Institute of Standards and Technology (NIST) and leading cybersecurity frameworks define a structured approach to PQC migration. This lab walks you through three of these phases:

| Phase | Name | What Happens |
|-------|------|--------------|
| 1 | **Discover** | Scan the CCE Agency's secure-chat application to locate every place where cryptography is used. |
| 2 | **Assess & Prioritize** | Review the scan results to understand which vulnerabilities pose the greatest risk, including weak RSA key sizes and non-quantum-resistant algorithms. |
| 3 | **Remediate** | Use IBM Bob to automatically fix identified vulnerabilities, then commit the change so it flows through the CI/CD pipeline and is reflected back in GCM. |

## Estimated Duration

~45 minutes

## Lab Steps

| Step | Description |
|------|-------------|
| [Phase 1: Discover](./01-discover.md) | Review the QSE → Jenkins → GCM automated scan workflow |
| [Phase 2: Assess & Prioritize](./02-assess-prioritize.md) | Identify vulnerabilities in Guardium Cryptography Manager |
| [Phase 3: Remediate](./03-remediate.md) | Fix RSA vulnerabilities with IBM Bob, then validate through the pipeline |
| [Wrap-Up & Reference](./04-summary.md) | Lab summary, end state, glossary, and optional reset |

---

Proceed to **[Phase 1: Discover →](./01-discover.md)**
