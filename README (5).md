# Innova – Week 5 SPA Simulation

A small-scale Single Page Application simulation built with plain HTML, CSS and JavaScript.

## Files
- `index.html` – main application shell
- `style.css` – responsive UI and transitions
- `script.js` – client-side routing, DOM rendering, History API and form validation

## Features
- Client-side routing for Home, Services, About and Contact
- URL changes without full page reloads
- Browser Back/Forward support through `popstate`
- Dynamic DOM content rendering
- 404 route handling
- Contact form validation
- Responsive layout
- Reduced-motion support
- Accessible navigation and focus management

## GitHub Pages note
For GitHub Pages, enable Pages from the `main` branch. If direct refreshes on nested routes such as `/services` show a 404 on the hosting provider, the SPA can still be tested by opening the root URL and navigating through the menu. The application itself demonstrates the History API and client-side routing.
