
// Мобильное меню бургер
export default function burgerMenu() {
  const body = document.querySelector("body"),
    burger = body.querySelector(".burger"),
    menu = body.querySelector(".menu-mobile");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    body.classList.toggle("locked");
    menu.classList.toggle("active");
  });

  // брекпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
