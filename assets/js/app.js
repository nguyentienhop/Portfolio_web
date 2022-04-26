const menuTogger = document.querySelector(".menu-toggler");
console.log(menuTogger);
if (menuTogger) {
  menuTogger.addEventListener("click", () => {
    document.querySelector(".navbar-nav").classList.toggle("active");
  });
}
const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  let y = window.pageYOffset;
  if (y > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

//owlCarousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//AOS animation
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
