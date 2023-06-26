// Мобильное меню бургер
function burgerMenu() {
  const body = document.querySelector("body"),
    burger = body.querySelector(".burger"),
    menu = body.querySelector(".burger__menu");

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
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

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordeon__item-trigger");
  items.forEach((item) => {
    const parent = item.parentNode;
    if (parent.classList.contains("accordion__item-active")) {
      parent.classList.remove("accordion__item-active");
    } else {
      document
        .querySelectorAll(".accordion__item")
        .forEach((child) => child.classList.remove("accordion__item-active"));
      parent.classList.add("accordion__item-active");
    }
  });
}

