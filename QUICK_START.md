# Quick Start: Deploy to GitHub Pages

## ✅ Setup Complete!

Your repository is now configured for GitHub Pages deployment using branch deployment (no GitHub Actions required).

## 🚀 Deploy Your Site Now

### Step 1: Build and Deploy

```bash
cd defense-model-labs
npm run deploy-manual
```

This will:
- Build your Docusaurus site
- Push the built files to the `gh-pages` branch
- Take about 1-2 minutes

### Step 2: Configure GitHub Pages (One-Time Only)

1. Go to: https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/settings/pages
2. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**
3. Click **Save**

### Step 3: Wait and Visit

- Wait 1-2 minutes for GitHub to process
- Visit: https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/

## 📝 What Was Set Up

### New Files Created:
- ✅ `defense-model-labs/deploy.sh` - Deployment script
- ✅ `DEPLOYMENT.md` - Detailed deployment guide
- ✅ `defense-model-labs/README.md` - Updated with deployment info
- ✅ `package.json` - Added `deploy-manual` script

### How It Works:
1. You run `npm run deploy-manual` locally
2. Script builds the site into `build/` directory
3. Script pushes `build/` contents to `gh-pages` branch
4. GitHub Pages serves from `gh-pages` branch

### Why This Approach?
- GitHub Actions are disabled for `dallas-gsc-gov` organization
- Branch deployment works without Actions
- When Actions are enabled later, you can switch to automated deployment
- The GitHub Actions workflow files are already in place for future use

## 🔄 Regular Workflow

### Making Changes:
1. Edit markdown files in `defense-model-labs/docs/`
2. Test locally: `cd defense-model-labs && npm start`
3. Commit changes to main branch
4. Deploy: `npm run deploy-manual`

### Local Development:
```bash
cd defense-model-labs
npm start
```
Opens http://localhost:3000 with live reload

## 🔮 Future: Moving to GitHub Actions

When you're ready to use GitHub Actions (on github.com or when enabled):

1. Repository already has `.github/workflows/deploy.yml`
2. Change Pages settings from "Deploy from a branch" to "GitHub Actions"
3. Push to main branch - automatic deployment!
4. No more manual `deploy.sh` needed

## 📚 Documentation

- **Full Deployment Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Project README**: See [defense-model-labs/README.md](defense-model-labs/README.md)
- **Docusaurus Docs**: https://docusaurus.io/docs/deployment

## ❓ Troubleshooting

### Build fails?
```bash
cd defense-model-labs
npm install
npm run build
```

### Script permission error?
```bash
chmod +x defense-model-labs/deploy.sh
```

### Site not updating?
- Check Pages settings are correct
- Verify `gh-pages` branch exists and was updated
- Clear browser cache
- Wait up to 5 minutes

## 🎉 You're Ready!

Run `npm run deploy-manual` from the `defense-model-labs` directory to deploy your site!