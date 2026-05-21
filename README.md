# Deploying ibnu-abbas-website to Vercel

This repository contains a modern web project built with **Vite**, **React**, and **Bootstrap**. The following steps will get the site up and running on Vercel using your GitHub repository.

## Prerequisites
- A GitHub account with a repository for this project (push the current code to it).
- A Vercel account (sign‑up at https://vercel.com).

## Project Configuration for Vercel
1. **Vite base path** – The `vite.config.js` `base` option is set to `/` so the app works when deployed at the root domain.
2. **Vercel configuration** – The `vercel.json` file tells Vercel to treat this as a static build and serve the `dist/` directory after running `npm run build`.

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ]
}
```

## Deploy Steps
1. **Push to GitHub**
   ```bash
   git init               # if not already a git repo
   git add .
   git commit -m "Initial commit"
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git branch -M main
   git push -u origin main
   ```
2. **Import the repo into Vercel**
   - Log in to Vercel.
   - Click **New Project** → **Import Git Repository**.
   - Select your GitHub repository.
   - Vercel will auto‑detect the `npm run build` command and the `dist` folder (thanks to `vercel.json`).
   - Click **Deploy**.

Vercel will now build the project (`npm install` → `npm run build`) and serve the static files from `dist/`. Every push to the `main` branch triggers a new deployment automatically.

## Local Development
```bash
npm install   # install dependencies
npm run dev   # start Vite dev server (http://localhost:5173)
```

## Custom Domain (optional)
After the first deployment, you can add a custom domain in the Vercel dashboard under **Domain** → **Add**.

---
*The project is now ready for a seamless Vercel deployment via GitHub.*
