const menu = document.querySelector("#nav.nav > .nav-menu");
const hamburgerMenu = document.querySelector("#nav.nav > .nav-hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
