---
# Front matter needed to trigger Jekyll conversion
# Front matter for this specific site
---

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // --- Add dots to the ABN and cut out spaces ---
  const elements = document.querySelectorAll('.middot-inject');
  elements.forEach(function(element) {
    let s = element.textContent;
    element.classList.remove('middot-inject');
    s = s.replace(/[ -]/gi, '<i class="middot"></i>');
    element.innerHTML = s;
  });

  // --- GitHub-style link icon on headings (ids come from kramdown) ---
  document.querySelectorAll('.content :is(h1, h2, h3, h4, h5, h6)[id]').forEach((h) => {
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'heading-anchor';
    a.setAttribute('aria-label', 'Link to this section');
    a.innerHTML = '<i class="fa-solid fa-link"></i>';
    h.prepend(a);
    // Small screens hide the icon (see custom.scss), so the heading itself is the link.
    h.addEventListener('click', (e) => {
      if (getComputedStyle(a).display === 'none' && !e.target.closest('a')) location.hash = h.id;
    });
  });

});
