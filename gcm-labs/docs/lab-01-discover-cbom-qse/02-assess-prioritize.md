---
sidebar_position: 3
title: "Phase 2: Assess & Prioritize"
---

# Phase 2: Assess & Prioritize — Review Vulnerabilities in GCM

As **SecOps Manager**, use the GCM dashboard to find and prioritize the CCE Agency's cryptographic weaknesses.

## Part 2: Identify Vulnerabilities in Guardium Cryptography Manager

IBM Guardium Cryptography Manager (GCM) is your command center. It shows you every application that has been scanned, what cryptographic algorithms are in use, and which ones have known weaknesses. In this section, you are playing the role of the SecOps Manager — reviewing findings and deciding what the development team needs to fix.

### Step A: Navigate to the Code Repository

1. In GCM, click **"Inventory"** in the top menu, then select **"Code repositories"**.
2. Find the entry for the **secure-chat** application and click the value in the **"Impacted code assets"** column (labeled **A**).

   This opens a list of all source code files that contain cryptographic functions.

   ![GCM Inventory showing code repositories with secure-chat highlighted](/img/lab-01/gcm-code-repositories.png)

3. Click the **"Vulnerabilities"** tab (labeled **A**) to see a list of detected security weaknesses.
4. Locate the vulnerability called **"Use of small key size: 1024"** (labeled **B**) and click on it to expand the details.

   ![GCM Vulnerabilities tab showing Client.java line 32 with Use of small key size: 1024](/img/lab-01/gcm-vulnerabilities-tab.png)

:::note[Why this matters]

A 1024-bit RSA key is considered too small by modern security standards — it can be cracked by today's computers, let alone tomorrow's quantum computers. NIST recommends a minimum of 2048 bits for RSA, and recommends migrating away from RSA entirely.

:::

### Step B: Create a Ticket for the Development Team

As SecOps Manager, your job is to flag the issue for the developers. In a real workflow, you would open a ticket in your project management system.

5. Note the location of the vulnerability: **line 32 of `Client.java`** in the secure-chat application.
6. Create a ticket (or make a note) for the developer team to fix the small RSA key size on that line.

---

Proceed to **[Phase 3: Remediate →](./03-remediate.md)**
