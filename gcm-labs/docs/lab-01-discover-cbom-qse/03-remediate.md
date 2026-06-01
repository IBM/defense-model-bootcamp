---
sidebar_position: 4
title: "Phase 3: Remediate"
---

# Phase 3: Remediate — Fix Vulnerabilities Using QSE + IBM Bob

Switch to the **Developer** role. Use the QSE plugin in VS Code and IBM Bob to understand and fix RSA vulnerabilities, then push the fix through the CI/CD pipeline and confirm the results in GCM.

## Part 3: Fix Vulnerabilities in Visual Studio Code

You are now acting as the Developer who received the SecOps ticket. You will open the secure-chat project in Visual Studio Code, review the exact lines flagged by QSE, and then ask IBM Bob to help fix them — in plain English, no manual code editing required.

### Step A: Open the Project in Visual Studio Code

1. Before opening Visual Studio Code, confirm the QSE service is running. Look for the **QSE Service** icon (labeled **A**) in the system tray.
2. If the service is not running, double-click the **QSE Service** icon (labeled **B**) to start it, then minimize the window (labeled **C**).

   ![QSE Service icon in system tray and startup dialog](/img/lab-01/qse-service-icon.png)

3. Open Visual Studio Code and click **"Open Folder…"** (labeled **A**).
4. Navigate to and select the **"secure-chat"** folder (labeled **B**), then click **"Select Folder"** (labeled **C**).

   ![VS Code Open Folder dialog with secure-chat selected, and API discovery panel below](/img/lab-01/vscode-open-folder.jpg)

### Step B: Locate the Vulnerability

5. In the left panel, click **"API discovery"** and select the file **`src\Client.java`** (labeled **E**). The QSE plugin will automatically highlight **line 32** — the location of the vulnerability.
6. Click **"Cryptography analysis"** (labeled **A**) to open a full breakdown of every cryptographic function in the project and its associated vulnerabilities.
7. Click the first entry: **`keygen-(RSA)-(1024 bit)`** (labeled **B**). You will see it has **4 vulnerabilities** (labeled **C**).
8. Click through each vulnerability to jump to the affected line of code and read the details. Pay attention to the **CWE reference** (labeled **E**) — click it to read the full description of the weakness.

   ![VS Code Cryptography analysis panel showing keygen-RSA-1024 entry with 4 vulnerabilities](/img/lab-01/vscode-crypto-analysis.jpg)

:::note[Two types of issues]

You will notice two types of issues: **classic cryptography vulnerabilities** (e.g., key size too small) and **PQC-specific issues** (e.g., use of a non-quantum-resistant algorithm). Both need to be addressed for a complete migration.

:::

### Step C: Ask Bob to List Your Vulnerabilities

9. Open **IBM Bob**.

   Type the following message to Bob:

   > List my PQC vulnerabilities

10. Confirm that Bob calls the MCP tools in the background (you will see tool call indicators in the Bob panel). If no tools are invoked, ask your lab facilitator to verify the MCP connection.

    ![IBM Bob panel showing MCP tool call for list_findings with scan summary results](/img/lab-01/bob-list-vulnerabilities.png)

11. Review the list Bob returns. You can click any code reference in Bob's response to jump directly to that line in the file.

    ![IBM Bob listing PQC vulnerabilities by category including RSA findings](/img/lab-01/bob-vulnerability-list.png)

### Step D: Get Detailed Information on the RSA Vulnerabilities

In the Bob panel, type:

> Give me more details about the RSA vulnerabilities

Bob will call the `get_finding_detail` tool to retrieve the full details of each RSA finding from the QSE scan, including CWE guidance. This grounds Bob in the real scan data before making any code changes.

### Step E: Ask Bob to Fix the Vulnerabilities

In the Bob panel, type:

> Can you remediate some of these RSA vulnerabilities without adding additional libraries?

12. Bob will propose a remediation plan. **Review the plan before confirming.**

    ![IBM Bob Todo List showing planned RSA fixes across Client.java and Server.java](/img/lab-01/bob-remediation-plan.png)

13. Once Bob applies the fix, review the changes made to `Client.java` in the editor.

:::tip[Read the diff]

Bob is making real changes to your code. Take a moment to read through the diff to understand what changed and why. If anything looks unexpected, ask Bob to explain: *"Why did you make this change?"*

:::

### Step F: Verify the Fix with a New Scan

14. Run a new QSE scan to confirm the fix worked. In Visual Studio Code: go to **View → Command Palette → type "Quantum Safe Explorer: Scan Cryptography Analysis"** and press **Enter**.
15. After the scan completes, return to the **Cryptography analysis** panel. Confirm that the total vulnerability count has decreased and that the `keygen-(RSA)-(1024 bit)` entry now shows fewer vulnerabilities than before.

:::note[Vulnerability count]

The exact number of remaining vulnerabilities may vary depending on the specific changes Bob made. A reduction in vulnerabilities confirms the fix was successful.

:::

---

## Part 4: Commit Your Changes and Run the Pipeline

Now that the vulnerability has been fixed in the code, you need to commit the change so it flows through the automated CI/CD pipeline. Jenkins will re-scan the code and send the updated results back to GCM, giving you a clean audit trail.

### Step A: Commit in Visual Studio Code

1. Before committing, open **Jenkins** in your browser using the Jenkins bookmark and log in. Keep the Jenkins tab open — you will switch to it shortly.

   ![Jenkins dashboard open in browser via bookmark](/img/lab-01/jenkins-dashboard.png)

2. Back in Visual Studio Code, click the **"Source Control"** icon in the left sidebar (labeled **A**).
3. Click on **`Client.java`** (labeled **B**) to preview the changes you are about to commit.
4. Right-click on **`Client.java`** (labeled **B**) and select **"Stage Changes"** (labeled **C**).
5. In the commit message box, type:

   > fixed code with bob

6. Click **"Commit"** (labeled **E**).
7. Wait a few seconds and watch the commit graph (labeled **F**) update to show your new commit.

   ![VS Code Source Control panel with Client.java staged and commit message entered](/img/lab-01/vscode-source-control.jpg)

### Step B: Watch the Jenkins Pipeline Run

8. Switch to the **Jenkins** tab in your browser. Within a few seconds of your commit, a new build will start automatically.
9. Click on the build progress bar (labeled **A**) to watch the pipeline run in real time, or if the build has already finished, click the build number and select **"Console Output"** (labeled **B**).

   ![Jenkins dashboard showing new build triggered with Console Output option](/img/lab-01/jenkins-build-running.jpg)

10. Jenkins will scan the code, generate a findings report, and produce a **CycloneDX CBOM** (Cryptographic Bill of Materials) file. This file is automatically uploaded to GCM.

    ![Jenkins Console Output showing CBOM generation and successful file upload](/img/lab-01/jenkins-console-output.jpg)

---

## Part 5: Verify the Results in GCM

With the pipeline complete, return to GCM to confirm that the vulnerability has been resolved and that the updated scan results are reflected in the dashboard.

1. Navigate back to GCM (labeled **A**) and click **"Discovery" → "Import profiles"** in the top menu.
2. Check the **"Last import date"** (labeled **C**) for the QSE findings report to confirm it has been updated since your commit.

   ![GCM Discovery Import profiles page showing updated last import date for QSE report](/img/lab-01/gcm-discovery-import.jpg)

3. Click on the **"Code assets"** count (labeled **D**) and select **"secure-chat"**.
4. Confirm that the **"Use of small key size: 1024"** vulnerability is no longer listed.

   ![GCM secure-chat Vulnerabilities tab showing reduced findings after the fix](/img/lab-01/gcm-vulnerabilities-cleared.png)

:::tip[Import delay]

If the vulnerability is still showing, wait 30 seconds and refresh the page. The import can sometimes take a minute to complete after the Jenkins build finishes.

:::

---

Proceed to **[Wrap-Up & Reference →](./04-summary.md)**
