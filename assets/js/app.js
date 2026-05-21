---
# Front matter needed to trigger Jekyll conversion
---

'use strict';

// Bootstrap Dark mode Auto mode
(function () {
  const root = document.documentElement;
  const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function applySystemTheme() {
    if (!root.hasAttribute('data-bs-theme-auto')) return;
    const prefersDark = themeQuery.matches;
    root.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
  }

  if (root.getAttribute('data-bs-theme') === 'auto') {
    root.setAttribute('data-bs-theme-auto', 'true');
    applySystemTheme();
    themeQuery.addEventListener('change', applySystemTheme);
  }
})();
