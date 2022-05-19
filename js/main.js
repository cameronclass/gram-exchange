const hamburger = document.querySelectorAll(".hamburger");
const headerMenu = document.querySelector(".header__menu");
hamburger.onclick = function () {
  hamburger.classList.toggle("is-active");
};

hamburger.forEach((item) => {
  item.onclick = function () {
    headerMenu.classList.toggle("header__menu_active");
  };
});
