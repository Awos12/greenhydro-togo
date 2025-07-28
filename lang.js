
const translations = {
    fr: {
        home: "Accueil",
        about: "À propos",
        services: "Nos services",
        hydrogen: "Pourquoi l’hydrogène vert ?",
        publications: "Voir nos publications",
        contact: "Contact",
        partners: "Témoignages / Partenaires",
        welcome: "Bienvenue sur GreenHydro Togo",
        intro: "Nous sommes spécialisés dans la production d’hydrogène vert et les solutions solaires innovantes pour l’Afrique.",
		about_text:"GreenHydro Togo est une entreprise innovante spécialisée dans le développement, la promotion et l’intégration des technologies liées à l’hydrogène vert. Notre mission est de contribuer activement à la transition énergétique au Togo et en Afrique de l’Ouest, en apportant des solutions durables, économiquement viables et scientifiquement fondées.",
		about_title:"À propos de GreenHydro Togo",
		services_title: "Nos Services",
		services_desc: "Installation de systèmes solaires, piles à hydrogène, maintenance, etc.",
		pub:"Nos Publications",
		tel:"Télécharger une étude",
		video1:"Voir la vidéo explicative1",
		video2: "Hydrogène, la révolution verte ? | Documentaire",
	        partenaire:"Témoignages / Partenaires",
	        develop:"Partenaires et clients satisfaits..."
		},
    en: {
        home: "Home",
        about: "About us",
        services: "Our Services",
        hydrogen: "Why Green Hydrogen?",
        publications: "Our Publications",
        contact: "Contact",
        partners: "Testimonials / Partners",
        welcome: "Welcome to GreenHydro Togo",
        intro: "We specialize in green hydrogen production and innovative solar solutions for Africa.",
		about_text:"GreenHydro Togo is an innovative company specialized in the development, promotion, and integration of green hydrogen technologies.Our mission is to actively contribute to the energy transition in Togo and West Africa by providing sustainable, economically viable, and scientifically grounded solutions.",
		about_title:"About GreenHydro Togo",
		services_title: "Our Services",
		services_desc: "Installation of solar systems, hydrogen fuel cells, maintenance, and more.",
		pub:"Our Publications",
		tel: "Download a study",
		video1: "Watch the explanatory video1",
		video2: "Hydrogen: The Green Revolution? | Documentary",
	    	partenaire:"Testimonials / Partners",
	    	develop:"Trusted partners and satisfied..."
		}		
};
// === Diaporama d'images en fond ===
const images = [
  'images/fond1.png',
  'images/fond2.png',
  'images/fond3.png',
  'images/fond4.png',
  'images/fond5.png',
  'images/fond6.png',
  'images/fond7.jpg',
  'images/fond8.png',
  'images/fond9.png'
  // Ajoute autant d'images que tu veux
];
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('header nav ul');

menuToggle.addEventListener('click', function(e) {
  e.stopPropagation(); // empêche le clic de se propager
  menu.classList.toggle('show');
});

/* Fermer le menu quand on clique en dehors */
document.addEventListener('click', function(e) {
  if (menu.classList.contains('show') && !menu.contains(e.target) && e.target !== menuToggle) {
    menu.classList.remove('show');
  }
});

/* Fermer le menu quand on scroll en dehors */
document.addEventListener('scroll', function() {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
}, true);

let index = 0;
const slideshow = document.getElementById('slideshow');

function changeBackground() {
  slideshow.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 5000); // toutes les 5 secondes

const switcher = document.getElementById('languageSwitcher');
switcher.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.textContent = translations[lang][key];
    });
});
