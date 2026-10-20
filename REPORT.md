# Internship Task Report — Week 5
## Developing a Single Page Application (SPA) Simulation

**Intern Name:** Kritika Joshi  
**Course:** B.Tech CSE  
**Internship Organization:** Yuva Intern  
**Role:** Frontend Web Developer  
**Task:** Week 5 — Developing a Single Page Application (SPA) Simulation

## 1. Introduction
The objective of this task was to simulate a small Single Page Application using HTML, CSS and JavaScript. A SPA updates relevant parts of a page in response to user actions rather than requesting a complete new page for every navigation step. The FlowSpace project was created as a small project-workspace interface to demonstrate this behavior, responsive design and interactive components.

## 2. Objectives
- Build a multi-view experience using one HTML document.
- Implement client-side navigation and support browser Back/Forward behavior.
- Update project results dynamically using search and category filters.
- Create a responsive layout for desktop and mobile-sized screens.
- Add useful interaction such as a theme switcher and validated contact form.
- Improve usability with semantic HTML, keyboard access and accessible labels.

## 3. Technologies Used
- **HTML5:** semantic structure, navigation, main content, form controls and metadata.
- **CSS3:** design tokens, Flexbox, CSS Grid, media queries, hover/focus states and dark theme.
- **Vanilla JavaScript:** route rendering, event handling, filtering, form validation feedback and theme switching.
- **GitHub Pages:** intended static hosting platform after the repository is created and publishing is verified.

## 4. Project Description
FlowSpace is a fictional project workspace. The Home view introduces the concept and highlights three sample projects. The Projects view provides live search and category filtering. Selecting a project opens a detail view. The About view explains the demo's structure and features, while the Contact view contains a form that validates user input in the browser and displays a local confirmation. The contact form is explicitly a front-end simulation; it does not send or store personal information.

## 5. Key Implementation Details

### 5.1 Client-side routing
The application reads the URL hash to decide which view should be rendered. The same HTML document stays loaded while the JavaScript replaces the content inside the `#app` element. A `hashchange` listener calls the render function, so browser Back and Forward navigation can change views.

```javascript
window.addEventListener('hashchange', render);

function render() {
  const route = (location.hash.slice(1) || 'home').split('/');
  const page = route[0];
  if (page === 'home') app.innerHTML = homeView();
  else if (page === 'projects') app.innerHTML = projectsView();
  else if (page === 'about') app.innerHTML = aboutView();
  else if (page === 'contact') app.innerHTML = contactView();
  else if (page === 'project') app.innerHTML = detailView(route[1]);
}
```

This route structure keeps navigation logic in one place and allows individual view functions to remain readable. The final project includes a fallback for unknown routes and updates the active navigation link.

### 5.2 Dynamic search and filtering
The project list is stored as an array of objects. Each object contains a project ID, title, category, description and detail text. Search and filter controls use the current input values to produce a matching list and update the results container without reloading the document.

```javascript
const matches = projects.filter(project =>
  (project.title + ' ' + project.description + ' ' + project.category)
    .toLowerCase().includes(term) &&
  (category === 'all' || project.category === category)
);
```

If no project matches, the interface displays a helpful empty state instead of leaving the results area blank.

### 5.3 Responsive layout
CSS Grid creates the project-card layout on wider screens. Media queries reduce the number of columns on tablets and stack cards on narrow mobile screens. The navigation changes to a toggleable menu at smaller widths. Flexible spacing and `clamp()` help typography and page padding adapt to available screen space.

### 5.4 Theme switcher
The theme control toggles a `dark` class on the body. CSS custom properties define the background, text, surface, border and accent colors. Reusing variables keeps the two themes consistent and avoids duplicating all component rules.

### 5.5 Contact form behavior
The contact form uses native required fields, an email input type and minimum-length constraints. JavaScript prevents a real network submission and displays a status message after browser validation succeeds. This makes the behavior suitable for a front-end demonstration without pretending that a backend service exists.

### 5.6 Accessibility choices
The page uses a skip link, semantic header/nav/main/footer landmarks, descriptive labels, accessible names for icon-only buttons, an expanded-state attribute for the mobile menu, and a live status region for the form response. CSS includes visible focus behavior and a reduced-motion preference. These choices improve navigation for keyboard users and people using assistive technologies.

## 6. Design Decisions
A clean workspace visual style was selected to make the interface easy to scan. A limited accent color highlights important actions, while muted text separates descriptions from headings. Cards use consistent spacing and borders to create a predictable layout. The mobile menu avoids squeezing desktop navigation into a narrow screen. The project uses plain JavaScript and CSS instead of a framework to keep the implementation transparent and easy to review.

## 7. Testing Plan and Evidence
The project should be checked in a current browser before submission. The following checks are included in the project README and should be completed with actual observations:

| Test | Procedure | Expected result |
|---|---|---|
| View navigation | Open Home, Projects, About and Contact | Each route renders the matching view without a full document navigation |
| Browser history | Open a project detail, then use Back and Forward | The previous and next hash routes render correctly |
| Search | Search for a word such as “task” | Only matching project cards remain visible |
| Category filter | Choose Analytics or another category | Cards update to the selected category |
| Responsive layout | Resize to tablet and mobile widths | Cards stack and the navigation menu can be opened |
| Theme | Toggle the theme control | Background and text theme changes; accessible label updates |
| Form validation | Submit empty or malformed fields | Browser validation prevents the form from proceeding |
| Valid form | Submit all required fields correctly | A local confirmation appears; no network submission occurs |
| Keyboard use | Navigate using Tab and Enter | Links and controls are reachable and focus is visible |
| Console check | Inspect browser developer console | No unexpected JavaScript errors appear during the checks |

**Results/evidence:** Fill in this section after running the checks. Add screenshots of the Home view, Projects search/filter, mobile layout and successful form validation. Do not report a performance score or test pass that has not been measured. If desired, run Lighthouse in Chrome DevTools and record the actual Performance, Accessibility, Best Practices and SEO scores with the test date and device conditions.

## 8. Performance Considerations
The project has no external JavaScript dependencies, framework bundle or remote font dependency. It uses a small number of local files and renders only the selected view. Responsive CSS is handled by media queries, and JavaScript is loaded with `defer` so HTML parsing is not blocked by script execution. These are implementation choices intended to keep the demo lightweight; quantitative performance improvements should only be claimed after measurement.

## 9. Limitations
This is a front-end simulation, not a production application. Project information is hard-coded in JavaScript and is not stored in a database. The contact form does not send messages. The hash router is intentionally simple and does not implement authentication, server-side routing or API calls. The hosting URL becomes active only after the project is uploaded to the correct GitHub repository and GitHub Pages publishing is verified.

## 10. Deployment Steps
The source files are prepared for static hosting. To deploy, upload the project files to the root of a GitHub repository, open Settings → Pages, choose deployment from the `main` branch and root folder, and save. Once GitHub displays the published URL, open it in a browser and verify all routes and interactions. The final report should include the verified live URL, not just an expected URL pattern.

## 11. Learning Outcomes
This task provided practice in separating HTML, CSS and JavaScript responsibilities; rendering views from route state; listening for browser events; updating DOM content based on user input; designing layouts with Grid and Flexbox; and considering keyboard accessibility and reduced motion. It also highlighted the difference between a working front-end demonstration and a production system that requires persistent data, backend processing and deployment verification.

## 12. Conclusion
FlowSpace demonstrates the core idea of a Single Page Application through client-side view updates, hash-based navigation, dynamic filtering and reusable layout patterns. Responsive styles and accessibility-minded controls make the interface more usable across screen sizes and input methods. The project source, README and this report are provided together so the implementation can be reviewed and tested. Before resubmission, the intern should run the testing checklist, add genuine screenshots and actual test observations, deploy to GitHub Pages, and include the verified live link.
