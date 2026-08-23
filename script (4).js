const app = document.querySelector("#app");
const backButton = document.querySelector("#backButton");

const pages = {
  home: {
    title: "Build better digital experiences.",
    html: `
      <section class="view hero" aria-labelledby="home-title">
        <div>
          <p class="eyebrow">Single Page Application</p>
          <h1 id="home-title">One page. Smooth navigation. No reloads.</h1>
          <p>Welcome to Innova, a small SPA simulation using plain HTML, CSS and JavaScript. Navigation changes the URL and updates only the main content area.</p>
          <a class="button" href="/services" data-route="services">Explore services</a>
        </div>
        <div class="stat-card"><strong>SPA</strong><span>Client-side routing</span></div>
      </section>`
  },
  services: {
    title: "Services",
    html: `
      <section class="view">
        <p class="eyebrow">What we do</p><h1 class="section-title">Services</h1>
        <div class="cards">
          <article class="card"><div class="icon" aria-hidden="true">⚡</div><h3>Performance</h3><p>Lightweight interfaces designed for fast loading and responsive interaction.</p></article>
          <article class="card"><div class="icon" aria-hidden="true">🎨</div><h3>UI Design</h3><p>Clean, responsive layouts that remain consistent across different devices.</p></article>
          <article class="card"><div class="icon" aria-hidden="true">💻</div><h3>Web Development</h3><p>Semantic HTML, modern CSS and JavaScript-driven experiences without unnecessary frameworks.</p></article>
        </div>
      </section>`
  },
  about: {
    title: "About",
    html: `
      <section class="view">
        <p class="eyebrow">Our approach</p><h1 class="section-title">About Innova</h1>
        <div class="about-grid">
          <article class="panel"><h2>Why a SPA?</h2><p>A single page application can update content dynamically without requesting a completely new document for every navigation action. This creates a smoother experience.</p></article>
          <article class="panel"><h2>How it works</h2><p>The application reads the current path, selects a view, updates the DOM, and uses the History API to keep browser navigation and URLs in sync.</p></article>
        </div>
      </section>`
  },
  contact: {
    title: "Contact",
    html: `
      <section class="view">
        <p class="eyebrow">Let's connect</p><h1 class="section-title">Contact</h1>
        <form class="contact-form" id="contactForm" novalidate>
          <div class="field"><label for="name">Name</label><input id="name" required><p class="error" id="nameError" aria-live="polite"></p></div>
          <div class="field"><label for="email">Email</label><input id="email" type="email" required><p class="error" id="emailError" aria-live="polite"></p></div>
          <div class="field"><label for="message">Message</label><textarea id="message" rows="4" required></textarea><p class="error" id="messageError" aria-live="polite"></p></div>
          <button class="button" type="submit">Send message</button>
          <p class="status" id="formStatus" role="status" aria-live="polite"></p>
        </form>
      </section>`
  }
};

function routeFromPath(path) {
  const clean = path.replace(/\/$/, "");
  if (clean === "" || clean === "/") return "home";
  const route = clean.slice(1);
  return pages[route] ? route : "not-found";
}

function render(route, push = false) {
  if (push) {
    const target = route === "home" ? "/" : `/${route}`;
    history.pushState({ route }, "", target);
  }

  if (route === "not-found") {
    app.innerHTML = `<section class="view not-found"><p class="eyebrow">404</p><h1 class="section-title">Page not found</h1><p>The requested route does not exist.</p><a class="button" href="/" data-route="home">Return home</a></section>`;
  } else {
    app.innerHTML = pages[route].html;
  }

  document.title = route === "not-found" ? "Innova | Page Not Found" : `Innova | ${pages[route].title}`;
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.dataset.route === route);
    if (link.dataset.route === route) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  bindViewEvents();
  app.focus({ preventScroll: true });
}

function bindViewEvents() {
  document.querySelectorAll("[data-route]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      render(link.dataset.route, true);
    });
  });

  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const errors = {
      name: document.querySelector("#nameError"),
      email: document.querySelector("#emailError"),
      message: document.querySelector("#messageError")
    };
    errors.name.textContent = name.value.trim() ? "" : "Please enter your name.";
    errors.email.textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? "" : "Please enter a valid email.";
    errors.message.textContent = message.value.trim() ? "" : "Please enter a message.";

    if (errors.name.textContent || errors.email.textContent || errors.message.textContent) return;

    document.querySelector("#formStatus").textContent = "Thank you! Your message was submitted successfully.";
    form.reset();
  });
}

window.addEventListener("popstate", () => render(routeFromPath(location.pathname)));
backButton.addEventListener("click", () => history.length > 1 ? history.back() : render("home", true));

render(routeFromPath(location.pathname));
