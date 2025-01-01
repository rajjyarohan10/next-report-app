# Project Documentation

## Overview
This repository contains a Next.js-based React app and a CI/CD pipeline using GitHub Actions. The application can be built and tested locally, then automatically deployed to GitHub Pages.

---

## 1. Local Setup
Clone & Install
- Obtain the repository from GitHub and install the required dependencies using a package manager.
Run Development Server
- Start the Next.js development server; the app is typically accessible via a local URL.
Run Tests
- Execute the test command to verify that all tests pass.

## 2. CI Pipeline (GitHub Actions)
- Location: Stored in a workflow file under the `.github/workflows/` directory.
- Purpose
  1. Check out the repository's code.
  2. Use an appropriate Node.js version
  3. Install all dependencies.
  4. Build the project.
  5. Run tests.
 
## 3. Deployment (GitHub Pages)
- Location: An additional workflow file under the `.github/workflows/` directory handles deployment.
- Process:
  1. Check out the code.
  2. Use Node.js to install dependencies.
  3. Build and export the project as a static site (if compatible)
  4. Deploy the exported files to a dedicated branch designated for GitHub Pages (usually gh-pages).
- Enabling GitHub Pages
  1. Go to the repository's Settings and select Pages.
  2. Choose to deploy from the branch used by the deployment workflow.
  3. Save changes and wait for the site to become accessible.

## Challenges Faced
- Use of `--legacy-peer-deps`
Adding the `--legacy-peer-deps` flag to the `npm install` command. Telling npm to ignore peer dependency conflicts.
- Branch Creation
The `gh-pages` branch only becomes available after a successful deployment run, which can be confusing when selecting the deployment source.
- Next.js Static Export
Certain Next.js features (e.g., server-side rendering) do not apply to static export, requiring careful consideration of which pages can be deployed in this manner.
