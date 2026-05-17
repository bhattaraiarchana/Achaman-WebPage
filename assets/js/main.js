// assets/js/main.js

// ---------- THEME ----------
function applyTheme(theme) {
  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  localStorage.setItem("theme", theme);

  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.textContent = theme === "dark" ? "☀" : "🌙";
    toggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  applyTheme(theme);

  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = document.body.classList.contains("theme-dark")
        ? "light"
        : "dark";
      applyTheme(next);
    });
  }
}

// ---------- LANGUAGE ----------
function applyLanguage(lang) {
  const langKey = lang === "np" ? "np" : "en";
  localStorage.setItem("lang", langKey);
  document.documentElement.setAttribute("lang", langKey === "np" ? "ne" : "en");

  if (typeof translations !== "undefined") {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const t = translations[langKey] && translations[langKey][key];
      if (t) {
        el.textContent = t;
      }
    });
  }

  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang-toggle");
    btn.classList.toggle("active", btnLang === langKey);
  });

  renderDynamicContent();
}

function initLanguage() {
  const saved = localStorage.getItem("lang") || "en";
  applyLanguage(saved);

  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-toggle");
      applyLanguage(lang);
    });
  });
}

// ---------- NAVBAR ----------
function initNavbar() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const brand = document.querySelector(".brand");
  if (brand) {
    brand.addEventListener("click", () => {
      const current = window.location.pathname.split("/").pop();
      if (current === "" || current === "index.html") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "index.html";
      }
    });
  }

  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

// ---------- CONTENT RENDERING ----------
function text(value) {
  return localize(value, currentLang());
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text(value);
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
}

function card(title, body) {
  return `<article class="card"><h2 class="card-title">${title}</h2><p class="card-text">${body}</p></article>`;
}

function listItems(items) {
  return (items || []).map((item) => `<li>${text(item)}</li>`).join("");
}

function renderSiteChrome(content) {
  const site = content.site;
  const logo = document.querySelector(".brand img");
  if (logo) {
    logo.src = site.logo || "assets/img/logo.png";
    logo.alt = `${site.organizationName} logo`;
  }

  document.querySelectorAll(".brand-name-ne").forEach((el) => {
    el.textContent = site.brandNe;
  });
  document.querySelectorAll(".brand-name-en").forEach((el) => {
    el.textContent = site.brandEn;
  });
  document.querySelectorAll(".footer-brand").forEach((el) => {
    el.textContent = site.organizationName;
  });
  document.querySelectorAll(".footer-tagline").forEach((el) => {
    el.textContent = text(site.tagline);
  });
  document.querySelectorAll("[data-site-email]").forEach((el) => {
    el.textContent = site.contact.email;
    if (el.tagName === "A") el.href = `mailto:${site.contact.email}`;
  });
  document.querySelectorAll("[data-site-phone]").forEach((el) => {
    el.textContent = site.contact.phone;
    if (el.tagName === "A") el.href = `tel:${site.contact.phoneRaw || site.contact.phone}`;
  });
  document.querySelectorAll("[data-site-location]").forEach((el) => {
    el.textContent = text(site.contact.location);
  });
  document.querySelectorAll("[data-fb-link]").forEach((a) => {
    a.href = site.socials.facebook || "#";
  });
  document.querySelectorAll("[data-whatsapp-link]").forEach((a) => {
    a.href = `https://wa.me/${site.socials.whatsapp}`;
  });
  document.querySelectorAll(".footer-bottom").forEach((el) => {
    el.textContent = `© ${new Date().getFullYear()} ${site.organizationName}. All rights reserved.`;
  });
}

function renderHome(content) {
  const home = content.pages.home;
  setText("[data-home='badge']", home.badge);
  setText("[data-home='title']", home.title);
  setText("[data-home='subtitle']", home.subtitle);
  setText("[data-home='primaryCta']", home.primaryCta);
  setText("[data-home='secondaryCta']", home.secondaryCta);
  setText("[data-home='featureTitle']", home.featureTitle);
  setText("[data-home='featureText']", home.featureText);
  setText("[data-home='sectionTitle']", home.sectionTitle);
  setText("[data-home='sectionSubtitle']", home.sectionSubtitle);

  const stats = document.querySelector("[data-home-stats]");
  if (stats) {
    stats.innerHTML = home.stats
      .map(
        (item) => `<div class="stat-item"><div class="stat-number">${item.value}</div><div class="stat-label">${text(item.label)}</div></div>`
      )
      .join("");
  }

  const highlights = document.querySelector("[data-home-highlights]");
  if (highlights) {
    highlights.innerHTML = home.highlights
      .map((item) => `<article class="card"><div class="card-tag">${text(item.title)}</div><p class="card-text">${text(item.text)}</p></article>`)
      .join("");
  }
}

function renderAbout(content) {
  const about = content.pages.about;
  setText("[data-about='title']", about.title);
  setText("[data-about='intro']", about.intro);
  setText("[data-about='missionTitle']", about.missionTitle);
  setText("[data-about='missionText']", about.missionText);
  setText("[data-about='objectivesTitle']", about.objectivesTitle);
  const list = document.querySelector("[data-about-objectives]");
  if (list) list.innerHTML = listItems(about.objectives);
}

function renderServices(content) {
  setText("[data-services='title']", content.pages.services.title);
  setText("[data-services='subtitle']", content.pages.services.subtitle);
  const grid = document.querySelector("[data-services-grid]");
  if (grid) grid.innerHTML = content.services.map((item) => card(text(item.title), text(item.text))).join("");
}

function renderResearch(content) {
  const page = content.pages.research;
  setText("[data-research='title']", page.title);
  setText("[data-research='subtitle']", page.subtitle);
  setText("[data-research='projectsTitle']", page.projectsTitle);
  setText("[data-research='projectsSubtitle']", page.projectsSubtitle);
  const grid = document.querySelector("[data-research-grid]");
  if (grid) grid.innerHTML = content.researchBlocks.map((item) => card(text(item.title), text(item.text))).join("");
  const projects = document.querySelector("[data-projects-grid]");
  if (projects) projects.innerHTML = content.projects.map((item) => card(text(item.title), text(item.text))).join("");
}

function renderExam(content) {
  const page = content.pages.exam;
  setText("[data-exam='title']", page.title);
  setText("[data-exam='subtitle']", page.subtitle);
  const layout = document.querySelector("[data-exam-list]");
  if (layout) {
    layout.innerHTML = content.exams
      .map(
        (exam) => `<article class="card"><span class="badge-pill">${exam.label}</span><h2 class="card-title">${text(exam.title)}</h2><p class="card-text">${text(exam.subtitle)}</p><h3 class="mini-title">${text(exam.overviewTitle)}</h3><p class="card-text">${text(exam.overview)}</p><h3 class="mini-title">${text(exam.featuresTitle)}</h3><ul class="list-check">${listItems(exam.features)}</ul><h3 class="mini-title">${text(exam.batchTitle)}</h3><ul class="list-check">${listItems(exam.batches)}</ul></article>`
      )
      .join("");
  }
}

function teamCard(member) {
  const image = member.image
    ? `<img class="team-photo" src="${member.image}" alt="${member.name}" />`
    : `<div class="team-photo team-photo-placeholder" aria-hidden="true">${member.name.charAt(0)}</div>`;
  return `<article class="team-card">${image}<h3 class="team-name">${member.name}</h3><div class="team-role">${text(member.role)}</div><div class="team-qual">${text(member.qualification)}</div><div class="team-contact"><a class="btn btn-outline" href="tel:${member.phone}">${currentLang() === "np" ? "फोन" : "Call"}</a><a class="btn btn-outline" href="mailto:${member.email}">${currentLang() === "np" ? "इमेल" : "Email"}</a></div></article>`;
}

function renderTeam(content) {
  const page = content.pages.team;
  setText("[data-team='title']", page.title);
  setText("[data-team='subtitle']", page.subtitle);
  setText("[data-team='coreTitle']", page.coreTitle);
  setText("[data-team='advisorsTitle']", page.advisorsTitle);
  const core = document.querySelector("[data-team-core]");
  const advisors = document.querySelector("[data-team-advisors]");
  if (core) core.innerHTML = content.team.filter((m) => m.group !== "advisor").map(teamCard).join("");
  if (advisors) advisors.innerHTML = content.team.filter((m) => m.group === "advisor").map(teamCard).join("");
}

function renderContact(content) {
  const page = content.pages.contact;
  const site = content.site;
  setText("[data-contact='title']", page.title);
  setText("[data-contact='subtitle']", page.subtitle);
  setText("[data-contact='orgTitle']", page.orgTitle);
  setText("[data-contact='address']", site.contact.address);
  setText("[data-contact='note']", page.note);
  setAttr("[data-contact-email]", "href", `mailto:${site.contact.email}`);
  setText("[data-contact-email]", site.contact.email);
  setAttr("[data-contact-phone]", "href", `tel:${site.contact.phoneRaw || site.contact.phone}`);
  setText("[data-contact-phone]", site.contact.phone);
}

function renderDynamicContent() {
  if (typeof getStoredContent !== "function") return;
  const content = getStoredContent();
  renderSiteChrome(content);
  renderHome(content);
  renderAbout(content);
  renderServices(content);
  renderResearch(content);
  renderExam(content);
  renderTeam(content);
  renderContact(content);
}

// ---------- WHATSAPP ----------
function initWhatsAppFab() {
  const fab = document.querySelector(".whatsapp-fab");
  if (!fab || typeof getStoredContent !== "function") return;
  fab.addEventListener("click", () => {
    const content = getStoredContent();
    const url = `https://wa.me/${content.site.socials.whatsapp}`;
    window.open(url, "_blank");
  });
}

// ---------- CONTACT FORM ----------
function initContactForm() {
  const form = document.querySelector("#contact-form");
  const alertBox = document.querySelector("#contact-alert");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // This static site does not persist inquiries in browser storage.
    // Future Sanity CMS or backend integration should submit this form securely.

    if (alertBox) {
      const lang = currentLang();
      alertBox.textContent =
        (typeof translations !== "undefined" && translations[lang]["contact.form.success"]) ||
        "Message received.";
      alertBox.classList.add("alert-success");
      alertBox.style.display = "block";
    }

    form.reset();
  });
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavbar();
  initWhatsAppFab();
  initContactForm();
});
