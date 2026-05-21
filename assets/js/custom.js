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

});
