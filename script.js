
const translations = {
  uz: {
    menu_about: "Loyiha",
    menu_features: "Afzalliklar",
    menu_login: "Kirish",
    hero_title: "Kelajak uchun yashil iz qoldiraylik",
    hero_subtitle: "\"Yashil Makon\" — har bir xonadonning ekologik hissasi endi raqamli nazoratda.",
    hero_start: "Boshlash",
    about_title: "Loyiha haqida",
    about_text: "Yashil Makon bu O'zbekiston bo'ylab amalga oshirilayotgan ko‘chat ekish harakatini raqamlashtirishga mo‘ljallangan interaktiv platforma.",
    features_title: "Afzalliklar",
    feature_1: "✨ Har bir foydalanuvchi o‘z ma’lumotini mustaqil kiritadi",
    feature_2: "🔍 Hokim va raislar real vaqtda kuzatadi",
    feature_3: "📊 Statistika va hisobotlar avtomatik shakllanadi",
    feature_4: "🌳 Rasmlar, xarita, GPS joylashuv",
    footer_text: "Yashil Makon. Barcha huquqlar himoyalangan."
  },
  ru: {
    menu_about: "О проекте",
    menu_features: "Преимущества",
    menu_login: "Вход",
    hero_title: "Оставим зеленый след ради будущего",
    hero_subtitle: "\"Зелёное Пространство\" — вклад каждого домохозяйства под цифровым контролем.",
    hero_start: "Начать",
    about_title: "О проекте",
    about_text: "Зелёное Пространство — это интерактивная платформа для цифровизации посадки деревьев в Узбекистане.",
    features_title: "Преимущества",
    feature_1: "✨ Каждый пользователь вводит данные самостоятельно",
    feature_2: "🔍 Хокимы и главы махаллей следят в реальном времени",
    feature_3: "📊 Автоматическая статистика и отчёты",
    feature_4: "🌳 Фото, карта, GPS координаты",
    footer_text: "Зелёное Пространство. Все права защищены."
  },
  en: {
    menu_about: "About",
    menu_features: "Features",
    menu_login: "Login",
    hero_title: "Leave a green mark for the future",
    hero_subtitle: "\"Green Space\" — each household's ecological input now digitally monitored.",
    hero_start: "Get Started",
    about_title: "About the Project",
    about_text: "Green Space is an interactive platform aimed at digitizing the tree planting campaign across Uzbekistan.",
    features_title: "Features",
    feature_1: "✨ Every user enters their own information",
    feature_2: "🔍 Officials monitor in real-time",
    feature_3: "📊 Automatic statistics and reports",
    feature_4: "🌳 Photos, map, GPS tracking",
    footer_text: "Green Space. All rights reserved."
  }
};

document.getElementById('language-select').addEventListener('change', function() {
  const lang = this.value;
  const t = translations[lang];
  Object.keys(t).forEach(key => {
    const el = document.querySelector('.' + key);
    if (el) el.textContent = t[key];
  });
});



// Scroll paydo bo'lish animatsiyasi
window.addEventListener('scroll', function() {
  var aboutSection = document.querySelector('.about-section');
  var sectionPosition = aboutSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(sectionPosition < screenPosition){
    aboutSection.style.opacity = '1';
    aboutSection.style.transform = 'translateY(0)';
  }
});


const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      submitBtn.innerHTML = "Yuborilmoqda... ⏳";
      submitBtn.disabled = true;
  
      setTimeout(() => {
        submitBtn.innerHTML = "Jo‘natildi ✅";
        submitBtn.style.backgroundColor = "#28a745"; // Yashil tugma
      }, 2000);
    });