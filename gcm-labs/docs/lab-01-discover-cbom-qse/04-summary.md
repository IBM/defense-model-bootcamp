---
sidebar_position: 5
title: "Wrap-Up & Reference"
---

# Wrap-Up & Reference

## Lab Summary

In this lab, you took on the role of a Security Administrator at the CCE Agency and completed a real-world PQC migration workflow using IBM Quantum Safe Explorer and IBM Bob. Here is what you accomplished:

- **Phase 1 — Discover:** Used GCM and QSE to scan the secure-chat application and inventory all cryptographic functions in use.
- **Phase 2 — Assess & Prioritize:** Identified critical vulnerabilities — including a 1024-bit RSA key and a non-quantum-resistant algorithm — and understood their risk.
- **Phase 3 — Remediate:** Used IBM Bob to automatically fix RSA vulnerabilities in the source code with AI-generated, context-aware code changes, then committed the fix and validated the result through the full CI/CD pipeline.

### Key Takeaway

PQC migration does not have to be a massive, disruptive project. By using automated scanning tools like QSE and AI-assisted remediation through IBM Bob, the CCE Agency was able to discover, assess, fix, and validate cryptographic vulnerabilities in a single, streamlined workflow — without requiring deep cryptography expertise from every team member involved.

---

## Lab End State

By the end of this lab, the CCE Agency's secure-chat application has:

- All cryptographic assets inventoried and visible in IBM Guardium Cryptography Manager (GCM).
- Known weaknesses (weak RSA key size, non-quantum-safe algorithms) identified and documented.
- RSA vulnerabilities remediated using AI-assisted code fixes via IBM Bob.
- All changes committed, validated through the Jenkins CI/CD pipeline, and confirmed clean in GCM.

---

## Quick Glossary

| Term | Definition |
|------|------------|
| **PQC (Post-Quantum Cryptography)** | Encryption algorithms that can withstand attacks from both classical and quantum computers. NIST finalized the first PQC standards in 2024. |
| **RSA** | A widely-used public-key encryption algorithm that will become vulnerable once large-scale quantum computers exist. |
| **Cryptographic Bill of Materials (CBOM)** | An inventory of every cryptographic algorithm and key used in an application — similar to a software bill of materials (SBOM). |
| **CI/CD Pipeline (Jenkins)** | An automated process that builds, tests, and scans your code every time a change is committed. Think of it as a quality control checkpoint. |
| **GCM (IBM Guardium Cryptography Manager)** | A dashboard that collects scan results and gives you a centralized view of your organization's cryptographic health. |
| **CWE** | Common Weakness Enumeration — a standardized catalog of known security weaknesses used to classify vulnerabilities. |

---

## Optional: Reset the Lab to Its Starting State

If you want to run through the lab again from the beginning, you can revert the secure-chat code to its original state.

1. Make sure you have at least one committed change after the initial setup commit.
2. Open a terminal in Visual Studio Code and run the following command:

   ```bash
   git reset --hard HEAD~1
   ```

3. Trigger a new Jenkins scan to push the reverted results back to GCM.
4. Restart Visual Studio Code so the QSE plugin reloads the updated scan data.
