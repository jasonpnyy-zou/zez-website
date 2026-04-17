(function () {
  var supported = ["zh", "en", "ja"];
  var storageKey = "site-lang-v2";
  var saved = localStorage.getItem(storageKey);
  var lang = supported.indexOf(saved) >= 0 ? saved : "en";

  function apply(langValue) {
    document.documentElement.lang = langValue;
    localStorage.setItem(storageKey, langValue);
    document.querySelectorAll("[data-lang-button]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang-button") === langValue);
    });
    document.querySelectorAll("[data-ph-zh]").forEach(function (field) {
      var key = "data-ph-" + langValue;
      var value = field.getAttribute(key);
      if (value) {
        field.setAttribute("placeholder", value);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    document.querySelectorAll("[data-lang-button]").forEach(function (button) {
      button.addEventListener("click", function () {
        apply(button.getAttribute("data-lang-button"));
        var menu = button.closest("[data-lang-menu]");
        if (menu) {
          menu.removeAttribute("open");
        }
      });
    });
  });
})();