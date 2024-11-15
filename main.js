const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".header .navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});