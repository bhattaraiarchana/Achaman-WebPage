// assets/js/admin.js
// Demo-only admin code intentionally disabled.
// Future Sanity CMS integration should happen in Sanity Studio or a secure
// backend, never with browser-only access gates or storage writes.

function initDisabledAdminNotice() {
  document.documentElement.setAttribute("data-admin-disabled", "true");
}

document.addEventListener("DOMContentLoaded", initDisabledAdminNotice);
