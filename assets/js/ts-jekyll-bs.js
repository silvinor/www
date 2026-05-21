---
# Front matter needed to trigger Jekyll conversion
---

{%- include meta.liquid -%}
{%- assign detectOs = meta.theme.features.detect_os | default: 0 -%}
{%- assign externalLinks = meta.theme.features.external_links | default: 0 -%}
{%- assign toTopBtn = meta.theme.features.to_top_btn | default: 0 -%}
{%- assign toolTips = meta.theme.features.tool_tips | default: 0 -%}

'use strict';

/*!
 *  ts-jekyll-bs template JS, (c) 2024 Silvino Rodrigues (@silvinor)
 *  See: https://github.com/Tecsmith/ts-jekyll-bs
 */

/* FEATURES:
 *   detectOs:      {{ detectOs }}
 *   externalLinks: {{ externalLinks }}
 *   toTopBtn:      {{ toTopBtn }}
 *   toolTips:      {{ toolTips }}
 */

{%- if detectOs > 0 -%}
  {%- raw %}
  {% endraw -%}

  /* ............................... *
   * Detect OS From Browser function *
   * ............................... */

  function detectOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'macos';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'ios';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'windows';
    } else if (/Android/.test(userAgent)) {
      os = 'android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'linux';
    } else {
      os = 'unknown';
    }
    return os;
  }

{%- endif -%}

{%- raw %}
{% endraw -%}
/* -------------- *
 * Copyright Year *
 * -------------- */

function adjustCopyrightYear() {
  var copyrightYear = document.getElementById('copyright');
  var thisYear = new Date().getFullYear();
  if (thisYear !== Number(copyrightYear.textContent)) {
    copyrightYear.textContent = copyrightYear.textContent + '-' + thisYear;
  }
}

{%- if externalLinks > 0 -%}
  {%- raw %}
  {% endraw -%}
  /* ------------------- *
   * Mark external links *
   * ------------------- */

  function adjustExternalLinks() {
    const siteRoot = '{{ "/" | absolute_url }}'; // left intact for Jekyll
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (
        !href.startsWith(siteRoot) &&
        (href.startsWith('https://') || href.startsWith('http://'))
      ) {
        {% if externalLinks != 2 -%}
        a.setAttribute('target', '_blank');
        {% endif -%}
        {% if externalLinks != 1 -%}
        a.classList.add('external');
        {%- endif %}
      }
    });
  }
{%- endif -%}


{%- raw %}
{% endraw -%}
/* ------------------------------------------------ *
 * Navbar double-click: follow dropdown parent link *
 * ------------------------------------------------ */

document.querySelectorAll('a.dropdown-toggle[href]').forEach(link => {
  const url = link.getAttribute('href');
  if (url) {
    link.addEventListener('dblclick', () => { window.location.href = url; });
  }
});

{%- if toolTips > 0 -%}
  {%- raw %}
  {% endraw -%}
  /* ----------------- *
   * Swith on Tooltips *
   * ----------------- */

  document.addEventListener("DOMContentLoaded", () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  });
{%- endif -%}

{%- if toTopBtn > 0 -%}
  {%- raw %}
  {% endraw -%}
  /* ------------- *
   * To Top Button *
   * ------------- */

  function setUpToTopButton() {

    let to_top_button = document.getElementById("btn-to-top");
    var lastScroll = 0;
    var isScrollingUp = false;

    function remToPx(rem) {
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    function showScrollBtn() {
      to_top_button.classList.add('show');
      isScrollingUp = true;
    }

    function hideScrollBtn() {
      to_top_button.classList.remove('show');
      isScrollingUp = false;
    }

    function scrollBtnFunction() {
      var currentScroll = window.scrollY || document.documentElement.scrollTop;

      let topPad = remToPx(5);

      if (currentScroll < topPad) {
        if (isScrollingUp) {
          hideScrollBtn();
        }
      } else if (lastScroll < currentScroll && isScrollingUp) {
        hideScrollBtn();
      } else if (lastScroll > currentScroll && !isScrollingUp) {
        showScrollBtn();
      }

      lastScroll = currentScroll;
    }

    if (!to_top_button) return; // Exit early if the button doesn't exist

    to_top_button.classList.add("collapse");
    to_top_button.classList.add("btn-floating");

    to_top_button.addEventListener("click", function () {
      lastScroll = 0;
      hideScrollBtn();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    window.onscroll = function () {
      scrollBtnFunction();
    };
  }
{%- endif -%}

{%- raw %}
{% endraw -%}
/* ========================= *
 * Master Doc Ready Function *
 * ------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  {% if detectOs > 0 -%}
    document.body.classList.add(`os-${detectOS()}`);
  {%- endif %}

  adjustCopyrightYear();

  {% if externalLinks > 0 -%}
    adjustExternalLinks();
  {%- endif %}

  {% if toTopBtn > 0 -%}
    setUpToTopButton();
  {%- endif %}

});
