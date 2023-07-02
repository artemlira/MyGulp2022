export default function select() {
  document.querySelectorAll(".dropdown").forEach((dropDownWrapper) => {
    const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
    const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );

    // клик по кнопке открыть/закрыть
    dropDownBtn.addEventListener("click", function () {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.add("dropdown__button--active");
    });

    // выбор элемента списка и закрытие списка
    dropDownListItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });


    // функция удаления активного фокуса
    function removeActiveFocus() {
      dropDownList.classList.remove("dropdown__list--visible");
      dropDownBtn.classList.remove("dropdown__button--active");
    }

    // удаление фокуса по клику на пустом поле 
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        removeActiveFocus();
      }
    });


    // удаление фокуса по нажатию на кнопки "Tab" и "Escape"
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        console.log(e.key);
        removeActiveFocus();
      }
    });
  });
}
