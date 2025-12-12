# Vercel Deployment Guide

This Angular application is configured for deployment on Vercel.

## Deployment Steps

1. **Import the Project to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import this repository

2. **Configure Project Settings**
   - **Root Directory**: `PromptLab UI`
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist/promptlab-ai/browser` (auto-detected from vercel.json)

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application

## Configuration

The `vercel.json` file in the `PromptLab UI` directory contains the necessary configuration:
- Build command and output directory
- Rewrites for Angular routing (SPA support)

## Notes

- The build process is configured to disable font inlining to ensure successful builds
- Google Fonts are loaded via link tags in index.html
- All routes are rewritten to index.html to support Angular's client-side routing
