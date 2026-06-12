# Defense Model Bootcamp - Lab Guides

This repository contains the lab guides and documentation for the IBM Defense Model Bootcamp, built with [Docusaurus](https://docusaurus.io/).

## 🚀 Quick Start

### Prerequisites

- Node.js 20.0 or higher
- npm or yarn
- Git

### Installation

```bash
cd defense-model-labs
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory.

## 📦 Deployment

### Deploy to GitHub Pages (Current Method)

Since GitHub Actions are disabled for the organization, we use branch deployment:

```bash
npm run deploy-manual
```

Or directly:

```bash
./deploy.sh
```

**First time setup:**
1. Make the script executable: `chmod +x deploy.sh`
2. Configure GitHub Pages in repository settings to deploy from `gh-pages` branch

See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed instructions.

### Future: GitHub Actions Deployment

When GitHub Actions are enabled, the repository includes workflow files in `.github/workflows/` that will automatically deploy on push to main.

## 📚 Documentation Structure

```
docs/
├── intro.mdx                          # Landing page
├── getting-started.md                 # Getting started guide
├── background.md                      # Background information
├── what-is-defense-model.md          # Defense Model overview
├── what-is-argus-ai.md               # Argus AI overview
├── lab-01a-intro-defense-model/      # Lab 1A: Introduction
├── lab-01b-unstructured-data/        # Lab 1B: Unstructured Data
├── lab-02-factchecker/               # Lab 2: Fact Checker
├── lab-03-fine-tuning/               # Lab 3: Fine Tuning
└── resources/                         # Additional resources
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build production site
- `npm run serve` - Serve built site locally
- `npm run deploy-manual` - Deploy to GitHub Pages (branch method)
- `npm run clear` - Clear Docusaurus cache
- `npm run docusaurus` - Run Docusaurus CLI

## 🔗 Links

- **Live Site**: https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/
- **Repository**: https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp
- **Docusaurus Docs**: https://docusaurus.io/docs

## 📝 Contributing

1. Create a new branch for your changes
2. Make your edits to the markdown files in `docs/`
3. Test locally with `npm start`
4. Commit and push your changes
5. Deploy with `npm run deploy-manual`

## 🏗️ Project Structure

- `docs/` - Markdown documentation files
- `src/` - React components and custom pages
- `static/` - Static assets (images, files)
- `docusaurus.config.js` - Site configuration
- `sidebars.js` - Sidebar navigation configuration
- `deploy.sh` - Deployment script for GitHub Pages

## 📄 License

Copyright © 2024 IBM Corporation. All rights reserved.
