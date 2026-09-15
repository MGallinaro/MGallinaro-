(function () {
  'use strict';

  var storageKey = 'mgallinaro-theme';
  var root = document.documentElement;

  function readStoredTheme() {
    try {
      var storedTheme = window.localStorage.getItem(storageKey);
      return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
    } catch (error) {
      return null;
    }
  }

  function applyStoredTheme() {
    var storedTheme = readStoredTheme();
    if (storedTheme) {
      root.setAttribute('data-theme', storedTheme);
    }
  }

  function currentTheme() {
    var explicitTheme = root.getAttribute('data-theme');
    if (explicitTheme === 'light' || explicitTheme === 'dark') {
      return explicitTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Theme switching still works when storage is unavailable.
    }
  }

  function updateButton(button) {
    var darkTheme = currentTheme() === 'dark';
    var english = document.documentElement.lang === 'en';
    var label = darkTheme
      ? (english ? 'Enable light theme' : 'Attiva tema chiaro')
      : (english ? 'Enable dark theme' : 'Attiva tema scuro');
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(darkTheme));
  }

  function initToggle() {
    var button = document.querySelector('.theme-toggle');
    if (!button) {
      return;
    }

    updateButton(button);
    window.addEventListener('languagechange', function () { updateButton(button); });
    button.addEventListener('click', function () {
      var nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', nextTheme);
      saveTheme(nextTheme);
      updateButton(button);
    });
    var preference = window.matchMedia('(prefers-color-scheme: dark)');
    var updateSystemTheme = function () {
      if (!readStoredTheme()) updateButton(button);
    };
    if (preference.addEventListener) preference.addEventListener('change', updateSystemTheme);
    else if (preference.addListener) preference.addListener(updateSystemTheme);
  }

  applyStoredTheme();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
