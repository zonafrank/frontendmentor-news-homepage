const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<a><i class='fas fa-bars'></i></a>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<a><i class='fas fa-times'></i></a>";
  }
}

function closeMenu(e) {
  if (menu.classList.contains("active")) {
    const isClickedInside = menu.contains(e.target);
    if (!isClickedInside) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML =
        "<a><i class='fas fa-bars'></i></a>";
    }
  }
}

function markActiveLink(e) {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active-link");
  });
  e.target.classList.add("active-link");
}

toggle.addEventListener("click", toggleMenu, false);
document.addEventListener("click", closeMenu, true);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", markActiveLink);
});
