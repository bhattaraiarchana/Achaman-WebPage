// assets/js/admin.js

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Achaman@2026";
const ADMIN_AUTH_KEY = "achamanAdminAuthenticated";

let adminContent = getStoredContent();
let dashboardEventsBound = false;

function pathGet(object, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), object);
}

function pathSet(object, path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((acc, key) => {
    acc[key] = acc[key] || {};
    return acc[key];
  }, object);
  target[last] = value;
}

function showAdminAlert(message) {
  const alert = document.querySelector("#admin-alert");
  if (!alert) return;
  alert.textContent = message;
  alert.classList.add("alert-success");
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3500);
}

function bindScalarInputs(scope = document) {
  scope.querySelectorAll("[data-path]").forEach((input) => {
    const value = pathGet(adminContent, input.dataset.path);
    input.value = value || "";
    input.addEventListener("input", () => {
      pathSet(adminContent, input.dataset.path, input.value);
      renderSiteChrome(adminContent);
    });
  });
}

function localizedFields(basePath, title, multiline = false) {
  const field = multiline ? "textarea" : "input";
  return `<div class="admin-form-grid"><label>${title} EN <${field} data-path="${basePath}.en"></${field}></label><label>${title} NP <${field} data-path="${basePath}.np"></${field}></label></div>`;
}

function renderPageEditor() {
  const pages = [
    ["pages.home.title", "Home title", true],
    ["pages.home.subtitle", "Home subtitle", true],
    ["pages.home.badge", "Home badge", false],
    ["pages.home.featureTitle", "Home feature card title", true],
    ["pages.home.featureText", "Home feature card text", true],
    ["pages.home.sectionTitle", "Home section title", false],
    ["pages.home.sectionSubtitle", "Home section subtitle", true],
    ["pages.about.title", "About title", false],
    ["pages.about.intro", "About intro", true],
    ["pages.about.missionText", "Mission text", true],
    ["pages.services.title", "Services title", false],
    ["pages.services.subtitle", "Services subtitle", true],
    ["pages.research.title", "Research title", false],
    ["pages.research.subtitle", "Research subtitle", true],
    ["pages.exam.title", "Exam title", false],
    ["pages.exam.subtitle", "Exam subtitle", true],
    ["pages.team.title", "Team title", false],
    ["pages.team.subtitle", "Team subtitle", true],
    ["pages.contact.title", "Contact title", false],
    ["pages.contact.subtitle", "Contact subtitle", true]
  ];
  const editor = document.querySelector("#page-editor");
  editor.innerHTML = pages
    .map(([path, label, multiline]) => `<div class="admin-card"><h3>${label}</h3>${localizedFields(path, label, multiline)}</div>`)
    .join("");
  bindScalarInputs(editor);
}

function renderSimpleList(collectionName, containerId, label) {
  const container = document.querySelector(containerId);
  const list = adminContent[collectionName] || [];
  container.innerHTML = list
    .map(
      (_, index) => `<article class="admin-card"><div class="admin-card-header"><h3>${label} ${index + 1}</h3><button class="btn btn-outline danger-btn" data-remove="${collectionName}" data-index="${index}" type="button">Remove</button></div>${localizedFields(`${collectionName}.${index}.title`, "Title")}${localizedFields(`${collectionName}.${index}.text`, "Description", true)}</article>`
    )
    .join("");
  bindScalarInputs(container);
}

function renderExams() {
  const container = document.querySelector("#exams-editor");
  container.innerHTML = adminContent.exams
    .map(
      (exam, index) => `<article class="admin-card"><div class="admin-card-header"><h3>${exam.label || "Program"}</h3><button class="btn btn-outline danger-btn" data-remove="exams" data-index="${index}" type="button">Remove</button></div><label class="admin-full">Label <input data-path="exams.${index}.label" /></label>${localizedFields(`exams.${index}.title`, "Title")}${localizedFields(`exams.${index}.subtitle`, "Subtitle", true)}${localizedFields(`exams.${index}.overview`, "Overview", true)}<div class="admin-form-grid"><label>Features EN, one per line <textarea data-list-path="exams.${index}.features" data-lang="en"></textarea></label><label>Features NP, one per line <textarea data-list-path="exams.${index}.features" data-lang="np"></textarea></label><label>Batch/focus EN, one per line <textarea data-list-path="exams.${index}.batches" data-lang="en"></textarea></label><label>Batch/focus NP, one per line <textarea data-list-path="exams.${index}.batches" data-lang="np"></textarea></label></div></article>`
    )
    .join("");
  bindScalarInputs(container);
  bindListInputs(container);
}

function renderTeam() {
  const container = document.querySelector("#team-editor");
  container.innerHTML = adminContent.team
    .map(
      (member, index) => `<article class="admin-card"><div class="admin-card-header"><h3>${member.name || "Team member"}</h3><button class="btn btn-outline danger-btn" data-remove="team" data-index="${index}" type="button">Remove</button></div><div class="admin-form-grid"><label>Name <input data-path="team.${index}.name" /></label><label>Group <select data-path="team.${index}.group"><option value="core">Core team</option><option value="advisor">Advisor</option></select></label><label>Phone <input data-path="team.${index}.phone" /></label><label>Email <input data-path="team.${index}.email" type="email" /></label></div>${localizedFields(`team.${index}.role`, "Role")}${localizedFields(`team.${index}.qualification`, "Qualification")}<div class="media-uploader"><div><strong>Profile image</strong><p>Optional photo for this member.</p></div>${member.image ? `<img class="admin-image-preview" src="${member.image}" alt="${member.name}" />` : ""}<input type="file" accept="image/*" data-image-path="team.${index}.image" /></div></article>`
    )
    .join("");
  bindScalarInputs(container);
  bindImageInputs(container);
}

function bindListInputs(scope) {
  scope.querySelectorAll("[data-list-path]").forEach((input) => {
    const list = pathGet(adminContent, input.dataset.listPath) || [];
    input.value = list.map((item) => item[input.dataset.lang] || "").join("\n");
    input.addEventListener("input", () => {
      const otherLang = input.dataset.lang === "en" ? "np" : "en";
      const currentList = pathGet(adminContent, input.dataset.listPath) || [];
      const lines = input.value.split("\n");
      const next = lines.map((line, index) => ({
        [input.dataset.lang]: line,
        [otherLang]: currentList[index] ? currentList[index][otherLang] || "" : ""
      }));
      pathSet(adminContent, input.dataset.listPath, next);
    });
  });
}

function fileToDataUrl(file, callback) {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

function bindImageInputs(scope = document) {
  scope.querySelectorAll("[data-image-path]").forEach((input) => {
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) return;
      fileToDataUrl(file, (dataUrl) => {
        pathSet(adminContent, input.dataset.imagePath, dataUrl);
        renderAllEditors();
      });
    });
  });
}

function renderMessages() {
  const container = document.querySelector("#messages-list");
  const messages = JSON.parse(localStorage.getItem("achamanMessages") || "[]");
  container.innerHTML = messages.length
    ? messages
        .map(
          (message) => `<article class="admin-card"><h3>${message.subject || "No subject"}</h3><p><strong>${message.name}</strong> • ${message.email} • ${message.phone || "No phone"}</p><p class="section-subtitle">${new Date(message.receivedAt).toLocaleString()} • ${message.type}</p><p>${message.message}</p></article>`
        )
        .join("")
    : `<p class="section-subtitle">No contact messages yet.</p>`;
}

function renderAllEditors() {
  document.querySelector("#logo-preview").src = adminContent.site.logo;
  bindScalarInputs();
  renderPageEditor();
  renderSimpleList("services", "#services-editor", "Service");
  renderSimpleList("researchBlocks", "#research-editor", "Research block");
  renderSimpleList("projects", "#projects-editor", "Project");
  renderExams();
  renderTeam();
  renderMessages();
}

function newLocalizedItem(title = "New item", text = "Add description") {
  return {
    title: { en: title, np: "नयाँ शीर्षक" },
    text: { en: text, np: "विवरण थप्नुहोस्" }
  };
}

function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

function setAdminAccess(isAuthenticated) {
  const loginCard = document.querySelector("#admin-login-card");
  const dashboard = document.querySelector("#admin-dashboard");
  if (loginCard) loginCard.hidden = isAuthenticated;
  if (dashboard) dashboard.hidden = !isAuthenticated;
  if (isAuthenticated) renderAllEditors();
}

function initAdminLogin() {
  const form = document.querySelector("#admin-login-form");
  const error = document.querySelector("#admin-login-error");
  const logout = document.querySelector("#admin-logout");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.querySelector("#admin-username").value.trim();
      const password = document.querySelector("#admin-password").value;

      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        sessionStorage.setItem(ADMIN_AUTH_KEY, "true");
        form.reset();
        if (error) error.textContent = "";
        setAdminAccess(true);
        bindDashboardEvents();
        showAdminAlert("Logged in successfully.");
        return;
      }

      if (error) error.textContent = "Invalid username or password.";
    });
  }

  if (logout) {
    logout.addEventListener("click", () => {
      sessionStorage.removeItem(ADMIN_AUTH_KEY);
      setAdminAccess(false);
    });
  }
}

function bindDashboardEvents() {
  if (dashboardEventsBound) return;
  dashboardEventsBound = true;

  document.querySelectorAll(".admin-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".admin-panel").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`[data-admin-panel='${tab.dataset.adminTab}']`).classList.add("active");
    });
  });

  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    if (addButton) {
      const collection = addButton.dataset.add;
      if (collection === "exams") {
        adminContent.exams.push(cloneContent(defaultContent.exams[0]));
      } else if (collection === "team") {
        adminContent.team.push({ group: "core", name: "New Member", role: { en: "Role", np: "भूमिका" }, qualification: { en: "Qualification", np: "योग्यता" }, phone: "", email: "", image: "" });
      } else {
        adminContent[collection].push(newLocalizedItem());
      }
      renderAllEditors();
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      adminContent[removeButton.dataset.remove].splice(Number(removeButton.dataset.index), 1);
      renderAllEditors();
    }
  });

  document.querySelector("#logo-upload").addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    fileToDataUrl(file, (dataUrl) => {
      adminContent.site.logo = dataUrl;
      renderAllEditors();
      renderSiteChrome(adminContent);
    });
  });

  document.querySelector("#save-content").addEventListener("click", () => {
    saveStoredContent(adminContent);
    renderDynamicContent();
    showAdminAlert("Content saved successfully. Open the public pages to see your updates.");
  });

  document.querySelector("#reset-content").addEventListener("click", () => {
    if (!confirm("Reset all saved content to the default demo data?")) return;
    adminContent = resetStoredContent();
    renderAllEditors();
    renderDynamicContent();
    showAdminAlert("Content reset to defaults.");
  });

  document.querySelector("#export-content").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(adminContent, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "achaman-content.json";
    link.click();
    URL.revokeObjectURL(link.href);
  });

  document.querySelector("#import-content").addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        adminContent = saveStoredContent(JSON.parse(reader.result));
        renderAllEditors();
        renderDynamicContent();
        showAdminAlert("Imported content successfully.");
      } catch (error) {
        showAdminAlert("Could not import that JSON file.");
      }
    };
    reader.readAsText(file);
  });

  document.querySelector("#clear-messages").addEventListener("click", () => {
    localStorage.removeItem("achamanMessages");
    renderMessages();
  });
}

function initAdmin() {
  initAdminLogin();
  const authenticated = isAdminAuthenticated();
  setAdminAccess(authenticated);
  if (authenticated) bindDashboardEvents();
}

document.addEventListener("DOMContentLoaded", initAdmin);
