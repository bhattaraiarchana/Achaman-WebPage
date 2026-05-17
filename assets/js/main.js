// assets/js/main.js

// ---------- CONFIG (public contact links only) ----------
const WHATSAPP_NUMBER = "9848023682";
const FACEBOOK_URL = "https://facebook.com";
let currentLanguage = "en";

const PUBLIC_NOTICES = [
  {
    title: "Teacher training collaboration notice",
    category: "Training",
    date: "2026-06-10",
    priority: "Urgent",
    message: "Placeholder notice for upcoming teacher capacity-building collaboration with schools and local governments.",
    targetPage: "programs.html",
    cta: "View program"
  },
  {
    title: "Research support orientation",
    category: "Research",
    date: "2026-06-18",
    priority: "Normal",
    message: "Placeholder announcement for research design, tools and documentation support sessions.",
    targetPage: "research-innovation.html",
    cta: "Learn more"
  },
  {
    title: "Proposal writing clinic",
    category: "Proposal Writing",
    date: "2026-06-25",
    priority: "Normal",
    message: "Placeholder notice for NGOs, INGOs and education partners seeking proposal-writing support.",
    targetPage: "research-innovation.html",
    cta: "See details"
  },
  {
    title: "Shikshak Sewa support session",
    category: "Shikshak Sewa",
    date: "2026-07-02",
    priority: "Normal",
    message: "Placeholder notice for learner-focused Shikshak Sewa Aayog preparation as a sub-program.",
    targetPage: "programs.html",
    cta: "View support"
  },
  {
    title: "Academic workshop notice",
    category: "Workshop",
    date: "2026-07-12",
    priority: "Normal",
    message: "Placeholder update for future workshops and academic programs.",
    targetPage: "programs.html",
    cta: "View workshop"
  }
];

const GALLERY_ITEMS = [
  { title: "Teacher training session", caption: "Placeholder for classroom-focused professional development.", category: "Teacher Training", location: "Kathmandu", date: "2026", relatedProgram: "Teacher Training" },
  { title: "Municipality education program", caption: "Placeholder for local government collaboration activities.", category: "Municipality Programs", location: "Bagmati Province", date: "2026", relatedProgram: "Capacity Building" },
  { title: "NGO/INGO collaboration", caption: "Placeholder for partner-led education-development work.", category: "NGO/INGO Collaboration", location: "Nepal", date: "2026", relatedProgram: "Program Design" },
  { title: "Research activity", caption: "Placeholder for field research and documentation moments.", category: "Research Activities", location: "Field site", date: "2026", relatedProgram: "Research Support" },
  { title: "Academic workshop", caption: "Placeholder for workshops and academic support programs.", category: "Workshops", location: "Kathmandu", date: "2026", relatedProgram: "Workshop" },
  { title: "Shikshak Sewa class", caption: "Placeholder for learner-focused preparation support.", category: "Shikshak Sewa Classes", location: "Kathmandu", date: "2026", relatedProgram: "Shikshak Sewa" },
  { title: "Education event", caption: "Placeholder for public events and stakeholder gatherings.", category: "Events", location: "Nepal", date: "2026", relatedProgram: "Collaboration" }
];

const PROGRAMS = [
  { status: "upcoming", title: "Teacher professional development series", category: "Teacher Training", partnerType: "Municipality / School", partnerOrganization: "To be announced", location: "Kathmandu", districtProvince: "Bagmati Province", date: "Upcoming", summary: "Placeholder for a practical teacher capacity-building program.", cta: "Request collaboration" },
  { status: "upcoming", title: "Proposal writing clinic", category: "Proposal Writing", partnerType: "NGO / INGO", partnerOrganization: "Open for partners", location: "Online / Kathmandu", districtProvince: "Nepal", date: "Upcoming", summary: "Placeholder support program for concept notes, proposals and documentation.", cta: "Discuss proposal" },
  { status: "ongoing", title: "Research and documentation support", category: "Research", partnerType: "Education stakeholder", partnerOrganization: "Partner-led", location: "Field-based", districtProvince: "Nepal", date: "Ongoing", summary: "Placeholder for research design, field documentation and reporting support.", cta: "Learn more" },
  { status: "ongoing", title: "Academic workshop series", category: "Workshop", partnerType: "School / Teacher group", partnerOrganization: "To be updated", location: "Kathmandu", districtProvince: "Bagmati Province", date: "Ongoing", summary: "Placeholder for workshops and academic-support sessions.", cta: "View workshop" },
  { status: "completed", title: "Sample capacity-building program", category: "Teacher Training", partnerType: "Local government", partnerOrganization: "Sample partner", location: "Nepal", districtProvince: "To be updated", date: "Completed", summary: "Placeholder for completed training and reporting records.", cta: "View summary" },
  { status: "completed", title: "Shikshak Sewa support batch", category: "Shikshak Sewa", partnerType: "Learner group", partnerOrganization: "Internal sub-program", location: "Kathmandu", districtProvince: "Bagmati Province", date: "Completed", summary: "Placeholder for learner-focused support as one Achaman sub-program.", cta: "View notes" }
];


// ---------- THEME ----------
function applyTheme(theme) {
  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");

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
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");

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
  currentLanguage = langKey;
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
  applyLanguage("en");

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

// ---------- WHATSAPP ----------
function initWhatsAppFab() {
  const fab = document.querySelector(".whatsapp-fab");
  if (!fab) return;
  fab.addEventListener("click", () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(url, "_blank");
  });
}


function noticeCard(notice) {
  return `<article class="notice-card" data-category="${notice.category}"><div class="notice-card-meta"><span>${notice.category}</span><span>${notice.date}</span></div><h3>${notice.title}</h3><p>${notice.message}</p><div class="notice-card-footer"><strong>${notice.priority}</strong><a href="${notice.targetPage}">${notice.cta}</a></div></article>`;
}

function renderNotices(filter = "All") {
  const list = document.querySelector("[data-notice-list]");
  if (list) {
    const notices = PUBLIC_NOTICES.filter((notice) => filter === "All" || notice.category === filter || notice.priority === filter);
    list.innerHTML = notices.map(noticeCard).join("");
  }

  const latest = document.querySelector("[data-latest-notices]");
  if (latest) {
    latest.innerHTML = PUBLIC_NOTICES.slice(0, 3).map(noticeCard).join("");
  }

  const important = document.querySelector("[data-important-notice]");
  if (important) {
    const notice = PUBLIC_NOTICES.find((item) => item.priority === "Urgent") || PUBLIC_NOTICES[0];
    important.innerHTML = `<strong>${notice.priority}: ${notice.title}</strong><p>${notice.message}</p><a href="${notice.targetPage}" class="btn btn-outline">${notice.cta}</a>`;
  }
}

function initNoticeFilters() {
  const buttons = document.querySelectorAll("[data-notice-filter]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderNotices(button.getAttribute("data-notice-filter"));
    });
  });
}

function renderGallery() {
  const gallery = document.querySelector("[data-gallery-list]");
  if (!gallery) return;
  gallery.innerHTML = GALLERY_ITEMS.map((item) => `<article class="gallery-card"><div class="gallery-placeholder-box"><i class="fa-regular fa-image"></i></div><div class="gallery-card-body"><span>${item.category}</span><h3>${item.title}</h3><p>${item.caption}</p><dl><div><dt>Location</dt><dd>${item.location}</dd></div><div><dt>Date</dt><dd>${item.date}</dd></div><div><dt>Program</dt><dd>${item.relatedProgram}</dd></div></dl></div></article>`).join("");
}

function renderPrograms() {
  document.querySelectorAll("[data-program-list]").forEach((container) => {
    const status = container.getAttribute("data-program-list");
    container.innerHTML = PROGRAMS.filter((program) => program.status === status).map((program) => `<article class="program-card"><div class="program-card-meta"><span>${program.category}</span><span>${program.status}</span></div><h3>${program.title}</h3><p>${program.summary}</p><dl><div><dt>Partner type</dt><dd>${program.partnerType}</dd></div><div><dt>Partner</dt><dd>${program.partnerOrganization}</dd></div><div><dt>Location</dt><dd>${program.location}</dd></div><div><dt>District/Province</dt><dd>${program.districtProvince}</dd></div><div><dt>Date</dt><dd>${program.date}</dd></div></dl><a class="btn btn-outline" href="contact.html">${program.cta}</a></article>`).join("");
  });
}

// ---------- CONTACT FORM ----------
function initContactForm() {
  const form = document.querySelector("#contact-form");
  const alertBox = document.querySelector("#contact-alert");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (alertBox) {
      alertBox.textContent =
        translations[currentLanguage]["contact.form.success"] || "Message received.";
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
  renderNotices();
  initNoticeFilters();
  renderGallery();
  renderPrograms();
});
