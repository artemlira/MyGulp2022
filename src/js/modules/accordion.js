// Аккордеон
export default function accordion() {
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
