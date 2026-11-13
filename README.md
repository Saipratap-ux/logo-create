# BrandMotion Logo Studio

A mobile-responsive, static logo concept studio built with HTML, CSS and vanilla JavaScript. It creates a vector logo concept from the entered company name, industry, visual style and palette, then animates the preview.

## Features
- Description-led logo concept workflow (browser-side template engine; no API key).
- Animated logo preview with replay and pause controls.
- SVG vector export.
- Responsive layout, dark mode and English / Hindi / Odia interface translations.
- Installable PWA with offline app-shell caching.
- Static admin dashboard with clearly labelled sample data.
- Automated smoke/unit checks using Node's built-in test runner.

## Run locally
You can open `index.html` directly for the logo builder. For PWA/service-worker features, serve the folder over localhost:

```bash
python -m http.server 8000
```
Then open http://localhost:8000.

## Run tests
Requires Node.js 18 or newer:

```bash
npm test
```

## Deploy to GitHub Pages
1. Create a new GitHub repository, for example `brandmotion-logo-studio`.
2. Extract this ZIP and upload **all files and folders** to the repository root (keep `index.html` at the root).
3. Commit the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main`, folder `/ (root)`, then Save.
7. Wait for the Pages deployment workflow to finish. Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

The project uses relative asset paths, so it works from a GitHub Pages project subpath. Do not remove `.nojekyll`.

## Important notes
- The logo maker is a deterministic, local concept generator, not a generative AI service. The company description informs the brief, while industry/style/palette select the vector design template. To add AI image generation, connect a secure backend/API; never put a secret API key in browser JavaScript.
- The admin dashboard is a visual demo with fictional metrics. It has no login, database, user management or real analytics until a backend is added.
- The exported SVG is editable vector artwork, but this tool does not check trademark availability, uniqueness, or legal rights. Review and customize a concept before commercial use.
- PWA installation requires HTTPS (GitHub Pages provides HTTPS) or localhost. Some browsers/platforms may offer installation through their own browser menu rather than the in-app button.
- Browser support depends on modern service-worker and install-prompt support. The website itself remains usable without PWA installation.
