const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const buttons = document.querySelectorAll('.filter-menu button');
const items = document.querySelectorAll('.grid-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // active class
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');
    items.forEach(item => {
      if(filter === 'all' || item.getAttribute('data-category') === filter){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

window.addEventListener("scroll", function() {
  const bg = document.querySelector("#home .bg_image");
  let offset = window.pageYOffset;
  bg.style.transform = `translateY(${offset * 0.4}px)`;
});

menuBtn.addEventListener("click", (e) => {
  navBar.classList.toggle("open");

  const isOpen = navBar.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

const navLinks = document.querySelectorAll('nav ul#nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      let adjustedPosition = targetPosition - 40;

      const screenWidth = window.innerWidth;
      if (screenWidth <= 1060) {
        adjustedPosition = targetPosition - 20;
      }

      window.scrollTo({
        top: adjustedPosition,
        behavior: 'smooth'
      });

      navBar.classList.toggle("open");

      const isOpen = navBar.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    }
  });
});

window.addEventListener('load', () => {
  // Functie om de queryparameter "pagina" uit de URL te halen
  const getPageFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('pagina');
  };

  // Wanneer de pagina volledig is geladen, scroll naar het element als de queryparameter bestaat
  const targetPage = getPageFromURL();

  if (targetPage) {
    const targetElement = document.getElementById(targetPage); // Haal het element op met de ID van de queryparameter
    if (targetElement) {
      // Wacht tot de scrollactie goed is uitgevoerd en geef wat extra tijd (bijv. 300 ms)
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 10, // Voeg een offset van 10px toe
          behavior: 'smooth' // Zorg voor een soepele scroll
        });
      }, 300); // Je kunt hier de vertraging aanpassen indien nodig
    }
  }
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Verkrijg de percentage zichtbaarheid van het element
    const opacityValue = 0.8 - entry.intersectionRatio; // Als de header bijna verdwijnt, wordt de opacity 0.8

    // Verander de opacity van de achtergrond op basis van de zichtbaarheid van de header
    const background = document.getElementById("nav__background");
    background.style.opacity = opacityValue;  // De opacity verandert van 0 naar 0.8 afhankelijk van de zichtbaarheid van de header
  });
}, { threshold: [0.0, 0.4, 0.8] }); // Observeren bij verschillende drempelwaardes van zichtbaarheid

observer.observe(document.querySelector("header")); // Observeer de header


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000, // Verandert elke 5 seconden
    disableOnInteraction: false, // Blijft doorschuiven ook na interactie
  },
  speed: 1500, // Overgang duurt 1.5 seconden
});
