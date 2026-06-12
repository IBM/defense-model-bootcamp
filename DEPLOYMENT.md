# GitHub Pages Deployment Guide

This guide explains how to deploy the Defense Model Bootcamp site to GitHub Pages using branch deployment (without GitHub Actions).

## Current Setup

- **Repository**: `github.ibm.com/dallas-gsc-gov/defense-model-bootcamp`
- **Site URL**: `https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/`
- **Deployment Method**: Branch deployment (gh-pages branch)

## Why Branch Deployment?

GitHub Actions are currently disabled for the `dallas-gsc-gov` organization by enterprise administrators. Branch deployment allows us to:
- Deploy the site without requiring GitHub Actions
- Build locally and push the static files
- Maintain the same workflow files for future use when Actions are enabled

## One-Time Setup

### 1. Configure GitHub Pages Settings

1. Go to your repository on GitHub: `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar under "Code and automation")
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**

### 2. Make Deploy Script Executable

```bash
cd defense-model-labs
chmod +x deploy.sh
```

## Deploying the Site

### Method 1: Using npm script (Recommended)

```bash
cd defense-model-labs
npm run deploy-manual
```

### Method 2: Using the script directly

```bash
cd defense-model-labs
./deploy.sh
```

### What the deployment script does:

1. ✅ Checks you're in the correct directory
2. ⚠️  Warns if you have uncommitted changes
3. 📦 Builds the Docusaurus site (`npm run build`)
4. 🔄 Creates/updates the `gh-pages` branch
5. 📤 Pushes the built files to the `gh-pages` branch
6. ✅ Confirms deployment

## After Deployment

- Wait 1-2 minutes for GitHub Pages to process the changes
- Visit: `https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/`
- Check the Pages section in repository settings to see deployment status

## Troubleshooting

### Build fails
```bash
cd defense-model-labs
npm install
npm run build
```

### Permission denied when running deploy.sh
```bash
chmod +x deploy.sh
```

### Git authentication issues
Make sure you're authenticated with GitHub Enterprise:
```bash
git config --global credential.helper osxkeychain  # macOS
# or
git config --global credential.helper store  # Linux
```

### Changes not appearing
1. Check the Pages section in repository settings
2. Verify the gh-pages branch was updated
3. Clear your browser cache
4. Wait a few more minutes (can take up to 5 minutes)

## Development Workflow

### Local Development
```bash
cd defense-model-labs
npm start
```
This opens `http://localhost:3000` for live preview.

### Before Deploying
1. Test locally with `npm start`
2. Commit your changes to main branch
3. Run deployment script
4. Verify the live site

## Future: Migrating to GitHub Actions

When GitHub Actions become available (either on github.ibm.com or when moving to github.com):

1. The workflow files are already in `.github/workflows/`
2. Update repository Pages settings:
   - Change Source from "Deploy from a branch" to "GitHub Actions"
3. Push to trigger the workflow
4. The `deploy.sh` script will no longer be needed

## Files

- `deploy.sh` - Deployment script for branch deployment
- `.github/workflows/deploy.yml` - GitHub Actions workflow (for future use)
- `docusaurus.config.js` - Site configuration
- `package.json` - Contains `deploy-manual` script

## Support

For issues or questions:
- Check the Docusaurus documentation: https://docusaurus.io/docs/deployment
- Review GitHub Pages documentation: https://docs.github.com/en/pages