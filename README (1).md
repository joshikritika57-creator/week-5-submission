# FlowSpace — Week 5 SPA Simulation

**Intern:** Kritika Joshi  
**Course:** B.Tech CSE  
**Internship role:** Frontend Web Developer — Yuva Intern

## Overview
FlowSpace is a responsive single-page application (SPA) simulation made with HTML5, CSS3 and vanilla JavaScript. It updates the main content area based on hash routes rather than loading a new HTML document for each view.

## Features
- Home, Projects, About, Contact, and individual project-detail views
- Hash-based client-side navigation and browser back/forward support
- Live project search and category filtering
- Responsive card grid and mobile navigation menu
- Light/dark theme toggle
- Contact form browser validation and local confirmation (no server submission)
- Semantic landmarks, skip link, form labels, status messages and reduced-motion support
- No external JavaScript libraries or build step

## Run locally
1. Download and extract the ZIP.
2. Open `index.html` in a modern browser. For best testing, use VS Code Live Server or another local static server.

## Deploy on GitHub Pages
1. Create a GitHub repository named `week-5-spa-simulation` (or use the repository required by your internship portal).
2. Upload `index.html`, `styles.css`, `app.js`, `README.md`, and `REPORT.md` to the repository root.
3. Open **Settings → Pages**.
4. Under build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to finish publishing. Copy the actual published URL shown in Settings → Pages and open it to verify.
6. Submit that verified URL and the report to Yuva Intern.

Expected URL pattern (only after creating the repository and enabling Pages): `https://joshikritika57-creator.github.io/week-5-spa-simulation/`

## Testing checklist
- [ ] Open Home, Projects, About and Contact from the navigation.
- [ ] Open a project detail and use browser Back/Forward.
- [ ] Search for “task” and test each category filter.
- [ ] Resize the viewport to mobile width and check the menu/cards.
- [ ] Toggle light/dark theme.
- [ ] Submit the contact form with missing/invalid values, then with valid values.
- [ ] Navigate with keyboard Tab and verify the skip link/focus visibility.
- [ ] Check browser console for errors.

## Important reporting note
Do not claim measured performance scores, device coverage, or successful deployment until you have actually run those checks. Record real results/screenshots before final submission.
