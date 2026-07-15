# Push & Deploy Plan — Lab-01b and Lab-03

## Overview

Push all lab content changes from the local `lab1b` branch to the remote `dallas-gsc-gov/defense-model-bootcamp` repo on GitHub Enterprise, merge into `main` via a PR, and redeploy the Docusaurus site to the `gh-pages` branch so the Pages site at `https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/` reflects the new content.

**Scope:** Changes in `lab1b` branch covering:
- `defense-model-labs/docs/lab-01b-unstructured-data/` (step1–4, setup, overview)
- `defense-model-labs/docs/lab-03-fine-tuning/` (all files: index, overview, introduction, setup, step1–3, completion)
- `defense-model-labs/static/img/lab-01b/` and `defense-model-labs/static/img/lab-03/` (screenshots)
- `defense-model-labs/sidebars.js`

**Deploy method:** GitHub Actions are disabled for the org. Deployment uses `deploy.sh` (manual build → push static output to `gh-pages` branch).

**⚠️ Config mismatch to fix before deploying:** `docusaurus.config.js` has `organizationName: 'dallas-gsc-health'` and `baseUrl: '/dallas-gsc-health/defense-model-bootcamp/'` but the actual remote org is `dallas-gsc-gov`. The Pages site URL is `pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/`. This must be corrected before the build or the deployed site will have broken asset paths.

---

## Sub-Tasks

---

### Sub-Task 1 — Fix the org name mismatch in docusaurus.config.js

**Intent:** Correct the stale `dallas-gsc-health` org reference in the Docusaurus config to `dallas-gsc-gov` so the build produces correct asset paths and links for the actual Pages site.

**Expected Outcomes:**
- `url`, `baseUrl`, `organizationName`, `projectName`, `editUrl`, and all `href` references in `docusaurus.config.js` point to `dallas-gsc-gov`
- The built site will serve assets from `/dallas-gsc-gov/defense-model-bootcamp/`

**Todo List:**
1. In `defense-model-labs/docusaurus.config.js`, change:
   - `baseUrl: '/dallas-gsc-health/defense-model-bootcamp/'` → `/dallas-gsc-gov/defense-model-bootcamp/`
   - `organizationName: 'dallas-gsc-health'` → `dallas-gsc-gov`
   - `projectName: 'defense-model-bootcamp'` → (already correct, no change)
   - `editUrl` reference from `dallas-gsc-health` → `dallas-gsc-gov`
   - All navbar/footer `href` values from `dallas-gsc-health` → `dallas-gsc-gov`
2. Verify no other config files reference `dallas-gsc-health`

**Relevant Context:**
- File: `defense-model-labs/docusaurus.config.js` lines 15–19, 34, 74, 119
- Deploy target: `https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/`
- Remote: `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp.git`

**Status:** `[ ] pending`

---

### Sub-Task 2 — Stage, commit, and push lab1b to origin

**Intent:** Commit all local content changes and push the `lab1b` branch to `origin` so it exists as a remote branch ready for a PR.

**Expected Outcomes:**
- All modified and untracked files in `lab-01b-unstructured-data/`, `lab-03-fine-tuning/`, `static/img/lab-01b/`, `static/img/lab-03/`, and `sidebars.js` are committed
- `lab1b` branch is visible at `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/tree/lab1b`

**Todo List:**
1. From the repo root, run `git status` to confirm all changed files
2. Stage all changes: `git add -A`
3. Commit with a descriptive message, e.g.:
   `git commit -m "Update lab-01b and lab-03 content, images, and config org name"`
4. Push with upstream tracking: `git push -u origin lab1b`
5. Confirm the branch appears on the remote

**Relevant Context:**
- Current branch: `lab1b` (no remote tracking branch yet)
- Remote: `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp.git`
- Modified files per git status: `lab-01b-unstructured-data/step*.mdx`, `lab-01b-unstructured-data/setup.mdx`, `lab-01b-unstructured-data/overview.mdx`, `lab-03-fine-tuning/` all files, `sidebars.js`, `static/img/lab-01b/`, `static/img/lab-03/`, `docusaurus.config.js`

**Status:** `[ ] pending`

---

### Sub-Task 3 — Open and merge a PR from lab1b into main

**Intent:** Get the changes reviewed and merged into `main` through the standard PR workflow so the deploy runs from a clean `main` state.

**Expected Outcomes:**
- A PR exists at `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/pulls` for `lab1b → main`
- PR is merged and `main` contains all lab-01b and lab-03 updates

**Todo List:**
1. Go to `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/compare/main...lab1b`
2. Click **New pull request**
3. Title: `Update Lab 1B (Unstructured Data) and Lab 3 (Fine Tuning) content`
4. Description should summarize:
   - Lab 1B: step1–4 rewritten with new query-based exercises, overview updated, setup aligned
   - Lab 3: all files rewritten to match actual ARGUS AI Fine-tuning Lab UI; step1=configure comparison, step2=wait screen, step3=results dashboard with 7 screenshots
   - Config: org name corrected from `dallas-gsc-health` to `dallas-gsc-gov`
5. Request review if needed, then merge
6. Confirm `main` is updated after merge

**Relevant Context:**
- PR base: `main`
- PR head: `lab1b`
- Repo: `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp`

**Status:** `[ ] pending`

---

### Sub-Task 4 — Build and deploy to gh-pages

**Intent:** Rebuild the Docusaurus static site from `main` and push the output to the `gh-pages` branch so the live Pages site reflects all content changes.

**Expected Outcomes:**
- `defense-model-labs/build/` contains a fresh production build
- `gh-pages` branch on origin is updated with the new build
- `https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/` serves the updated content

**Todo List:**
1. Switch to `main` locally: `git checkout main && git pull origin main`
2. Navigate to the Docusaurus project: `cd defense-model-labs`
3. Install dependencies if needed: `npm install`
4. Run the deploy script: `npm run deploy-manual` (runs `bash deploy.sh`)
   - The script will: build the site → init git in `build/` → commit → force-push to `gh-pages`
5. Confirm the push succeeded — the script prints the Pages URL on success
6. Wait 1–2 minutes then verify the Pages site at `https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/`

**Relevant Context:**
- Deploy script: `defense-model-labs/deploy.sh`
- Script hard-codes remote: `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp.git`
- Script must be run from inside `defense-model-labs/` (checks for `package.json`)
- GitHub Actions are disabled for the org — manual deploy is the only option
- Node >= 20 required (`package.json` engine constraint)

**Status:** `[ ] pending`

---

## Dependency Order

```
Sub-Task 1 (fix config) → Sub-Task 2 (commit + push) → Sub-Task 3 (PR + merge) → Sub-Task 4 (build + deploy)
```

Each sub-task depends on the previous one completing successfully.
