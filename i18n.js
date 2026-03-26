const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_ingredients: "Ingredients",
    nav_oem: "OEM",
    nav_solutions: "Solutions",
    nav_contact: "Contact",

    hero_home_title: "Plant-Based Peptide Solutions for Global Brands",
    hero_home_desc:
      "ZEZ integrates ingredient science, manufacturing, and product development to help brands worldwide bring products to market efficiently.",

    hero_about_title: "About ZEZ",
    hero_contact_title: "Start Your Project with ZEZ",

    cta_contact: "Contact Us",
    cta_start: "Start Your Project"
  },

  zh: {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_ingredients: "原料",
    nav_oem: "OEM服务",
    nav_solutions: "产品方案",
    nav_contact: "联系我们",

    hero_home_title: "植物多肽解决方案",
    hero_home_desc: "ZEZ整合原料、制造与产品开发能力，服务全球品牌。",

    hero_about_title: "关于ZEZ",
    hero_contact_title: "开启您的项目合作",

    cta_contact: "联系我们",
    cta_start: "开始合作"
  },

  ja: {
    nav_home: "ホーム",
    nav_about: "会社概要",
    nav_ingredients: "原料",
    nav_oem: "OEM",
    nav_solutions: "ソリューション",
    nav_contact: "お問い合わせ",

    hero_home_title: "植物ペプチドソリューション",
    hero_home_desc: "ZEZは原料と製造を統合し、グローバルブランドを支援します。",

    hero_about_title: "ZEZについて",
    hero_contact_title: "プロジェクトを開始する",

    cta_contact: "お問い合わせ",
    cta_start: "開始する"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[currentLang][key] || key;
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

document.addEventListener("DOMContentLoaded", applyTranslations);
