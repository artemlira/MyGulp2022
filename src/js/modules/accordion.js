// Аккордеон
export default function accordion() {
  const items = document.querySelectorAll(".accordion__item");

  const removeClasses = () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };

  const addClass = (el) => {
    el.classList.add("active");
  };

  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.matches(".active")) {
        removeClasses();
      } else {
        removeClasses();
        addClass(item);
      }
    });
  });
}
