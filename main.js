function myFunction() {
    const element = document.getElementById("nadpis");

element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  function kalendar() {
    const element = document.getElementById("kalendar");

element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  function repertoar() {
    const element = document.getElementById("repertoar");

element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    var hamburger = document.querySelector(".hamburger");
  
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.style.transform = "translateX(0)";
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("visible");
      hamburger.classList.add("cross"); // Přidáme třídu pro změnu ikon
    } else {
      mobileMenu.style.transform = "translateX(-100%)";
      mobileMenu.classList.remove("visible");
      mobileMenu.classList.add("hidden");
      hamburger.classList.remove("cross"); // Odebereme třídu pro vrácení ikon
    }
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    var uvodka = document.getElementById("uvodka");
    var mobileMenu = document.getElementById("mobileMenu");
    var navIcons = document.querySelectorAll(".hamburger .bar"); // Vyberte všechny ikony navigace
  
    // Nastavte počátečnou hodnotu opacity na 0 pro pozadí
    uvodka.style.opacity = 0;
  
    // Zpoždění animace pro lepší efekt
    setTimeout(function () {
      uvodka.style.transition = "opacity 0.5s ease-in-out"; // Přidejte transition pro opacity
      uvodka.style.opacity = 1; // Postupně zobrazte pozadí
      mobileMenu.style.transform = "translateX(0)"; // Zobrazte navigační menu
      // Zobrazte ikony navigace
      navIcons.forEach(function (icon) {
        icon.style.opacity = 1;
      });
    }, 500); // Zde můžete upravit zpoždění podle svých potřeb
  });
  

// Přesunout se nahoru při kliknutí na šipku
function scrollToTop() {
  document.body.scrollTop = 0; // Pro starší prohlížeče
  document.documentElement.scrollTop = 0; // Pro moderní prohlížeče
}

// Zobrazit šipku nahoru, když se stránka posune dolů
window.onscroll = function () {
  var scrollToTopButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Přesunout se nahoru plynule při kliknutí na šipku
function scrollToTop() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  scrollToTopButton.style.display = "none"; // Schováme šipku během animace

  // Použijeme scrollIntoView pro plynulý přesun na začátek stránky
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Plynulá animace
  });
}


  
  

  

  