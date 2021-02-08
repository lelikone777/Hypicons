const burgerBtn = document.querySelector(".header-menu-burgerbtn");
const headerMenu = document.querySelector(".header-menu");

burgerBtn.addEventListener("click", (event) => {
  const target = event.target;

  if (!burgerBtn.classList.contains("header-menu-burgerbtn-active")) {
    burgerBtn.classList.add("header-menu-burgerbtn-active");
    headerMenu.classList.add("header-menu-active");
  } else {
    burgerBtn.classList.remove("header-menu-burgerbtn-active");
    headerMenu.classList.add("header-menu-hiding");
    setTimeout(() => {
      headerMenu.classList.remove("header-menu-active");
      headerMenu.classList.remove("header-menu-hiding");
    }, 800);
  }
});
