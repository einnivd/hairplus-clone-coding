const menuBtn = document.querySelector(".view-more");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");

  console.log(document.querySelector(".view-more"));
});