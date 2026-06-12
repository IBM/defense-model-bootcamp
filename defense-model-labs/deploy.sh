#!/bin/bash

# Deploy script for GitHub Pages (branch deployment method)
# This script builds the Docusaurus site and pushes it to the gh-pages branch

set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the defense-model-labs directory."
    exit 1
fi

# Check if git is clean (optional warning)
if [[ -n $(git status -s) ]]; then
    echo "⚠️  Warning: You have uncommitted changes. Consider committing them first."
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build the site
echo "📦 Building Docusaurus site..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Error: Build directory not found. Build may have failed."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to gh-pages branch
echo "📤 Deploying to gh-pages branch..."

# Navigate to build directory
cd build

# Initialize git if needed
if [ ! -d ".git" ]; then
    git init
    git checkout -b gh-pages
else
    git checkout gh-pages 2>/dev/null || git checkout -b gh-pages
fi

# Add remote if it doesn't exist
if ! git remote | grep -q origin; then
    git remote add origin https://github.ibm.com/dallas-gsc-gov/defense-model-bootcamp.git
fi

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push to gh-pages branch
echo "🚢 Pushing to gh-pages branch..."
git push -f origin gh-pages

cd ..

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://pages.github.ibm.com/dallas-gsc-gov/defense-model-bootcamp/"
echo ""
echo "📝 Next steps:"
echo "   1. Go to your repository settings on GitHub"
echo "   2. Navigate to Pages section"
echo "   3. Set source to 'Deploy from a branch'"
echo "   4. Select 'gh-pages' branch and '/ (root)' folder"
echo "   5. Save and wait a few minutes for deployment"

# Made with Bob
