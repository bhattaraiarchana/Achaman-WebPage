// assets/js/main.js

// ---------- CONFIG (dummy for now; you will change later) ----------
const WHATSAPP_NUMBER = "9848023682";
const COMPANY_EMAIL = "arcbhattarai11@gmail.com";
const FACEBOOK_URL = "https://facebook.com"; // change later to your real page

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

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const t = translations[langKey] && translations[langKey][key];
    if (t) {
      el.textContent = t;
    }
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang-toggle");
    btn.classList.toggle("active", btnLang === langKey);
  });
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
      navLinks.classList.toggle("open");
    });
  }
}

// ---------- WHATSAPP ----------
function initWhatsAppFab() {
  const fab = document.querySelector(".whatsapp-fab");
  if (!fab) return;
  fab.addEventListener("click", () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}`;
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

    // later: send to backend/email service here
    if (alertBox) {
      const lang = localStorage.getItem("lang") || "en";
      alertBox.textContent =
        translations[lang]["contact.form.success"] || "Message received.";
      alertBox.classList.add("alert-success");
      alertBox.style.display = "block";
    }

    form.reset();
  });
}

// ---------- FOOTER SOCIAL ----------
function initFooterSocial() {
  const fbLinks = document.querySelectorAll("[data-fb-link]");
  fbLinks.forEach((a) => {
    a.setAttribute("href", FACEBOOK_URL);
  });
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavbar();
  initWhatsAppFab();
  initContactForm();
  initFooterSocial();
});
