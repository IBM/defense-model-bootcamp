# GitHub Pages Deployment Setup

This guide will help you deploy the Defense Model Bootcamp documentation to GitHub Pages on IBM's GitHub Enterprise instance.

## Prerequisites

- Repository: `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp`
- Admin access to the repository settings
- GitHub Actions enabled for your organization

## Configuration Status

✅ **Docusaurus Configuration** - Updated for IBM GitHub Enterprise
✅ **GitHub Actions Workflow** - Already configured in `.github/workflows/deploy.yml`

## Required Steps to Enable Deployment

### 1. Enable GitHub Actions

Based on the warning message in your repository settings, GitHub Actions is currently disabled. You need to:

1. Navigate to your repository settings: `https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/settings`
2. Click on **"Actions"** in the left sidebar under "Code and automation"
3. Under "Actions permissions", select one of:
   - **"Allow all actions and reusable workflows"** (recommended for this project)
   - **"Allow enterprise, and select non-enterprise, actions and reusable workflows"**
4. Click **"Save"**

### 2. Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **"Source"**, select **"GitHub Actions"** from the dropdown
   - This is already configured in the screenshot you provided
3. The deployment will use the workflow in `.github/workflows/deploy.yml`

### 3. Configure Self-Hosted Runners (If Required)

The warning mentions "There are no runners configured." If your IBM GitHub Enterprise instance requires self-hosted runners:

1. Go to **Settings** → **Actions** → **Runners**
2. Click **"New self-hosted runner"**
3. Follow the instructions to set up a runner on your infrastructure
4. Alternatively, contact your GitHub Enterprise administrator to enable GitHub-hosted runners

**Note:** Many GitHub Enterprise instances have organization-level or enterprise-level runners already configured. Check with your administrator.

### 4. Trigger the Deployment

Once Actions are enabled and runners are configured:

1. Make a commit to the `main` branch (or merge a PR)
2. The workflow will automatically trigger
3. Monitor the deployment in the **Actions** tab
4. Once complete, your site will be available at:
   ```
   https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/
   ```

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) will:

1. **Build Job:**
   - Checkout the repository
   - Set up Node.js 20
   - Install dependencies with `npm ci`
   - Build the Docusaurus site with `npm run build`
   - Upload the build artifacts

2. **Deploy Job:**
   - Deploy the built site to GitHub Pages
   - Make it available at the configured URL

## Configuration Changes Made

The following files have been updated to work with IBM GitHub Enterprise:

### `defense-model-labs/docusaurus.config.js`

- **URL**: Changed from `https://IBM.github.io` to `https://pages.github.ibm.com`
- **Base URL**: Changed from `/defense-model-bootcamp/` to `/dallas-gsc-gov/defense-model-bootcamp/`
- **Organization**: Changed from `IBM` to `dallas-gsc-gov`
- **GitHub Links**: Updated all GitHub links to use `github.ibm.com` instead of `github.com`

## Troubleshooting

### Actions Not Running

- Verify GitHub Actions is enabled in repository settings
- Check if runners are available (organization or self-hosted)
- Review the Actions tab for any error messages

### Build Failures

- Check the Actions tab for detailed error logs
- Verify Node.js version compatibility (requires Node 20+)
- Ensure all dependencies are properly listed in `package.json`

### Page Not Loading

- Verify the deployment completed successfully in the Actions tab
- Check that the URL matches: `https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/`
- Allow a few minutes for DNS propagation after first deployment

### Permission Issues

If you see permission errors:
- Ensure the workflow has the correct permissions (already configured in the workflow file)
- Verify your GitHub token has the necessary scopes
- Contact your GitHub Enterprise administrator if issues persist

## Manual Deployment (Alternative)

If GitHub Actions cannot be enabled, you can deploy manually:

```bash
cd defense-model-labs
npm install
npm run build
# Then manually upload the contents of the 'build' directory to your web server
```

## Support

For issues specific to IBM's GitHub Enterprise instance:
- Contact your GitHub Enterprise administrator
- Check IBM's internal documentation for GitHub Enterprise
- Review runner configuration with your DevOps team

For Docusaurus-specific issues:
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)