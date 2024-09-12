const headerContent = document.querySelector('.header__content'); // Выбираем .header__content
const items = [
  document.querySelector(".item1"),
  document.querySelector(".item2"),
  document.querySelector(".item3"),
  document.querySelector(".item4"),
  document.querySelector(".item5"),
  document.querySelector(".item6"),
  document.querySelector(".item7"),
  document.querySelector(".item8")
];

// Цвета для фона и элементов
const backgroundColors = ["active1", "active2", "active3", "active4", "active5"];
const itemColors = ["active6", "active7", "active8", "active9", "active10"];

// Кнопки для изменения фона
const backgroundButtons = [
  document.querySelector(".item__color1"),
  document.querySelector(".item__color2"),
  document.querySelector(".item__color3"),
  document.querySelector(".item__color4"),
  document.querySelector(".item__color5")
];

// Кнопки для изменения цвета элементов
const itemColorButtons = [
  document.querySelector(".item__color6"),
  document.querySelector(".item__color7"),
  document.querySelector(".item__color8"),
  document.querySelector(".item__color9"),
  document.querySelector(".item__color10")
];

// Функция для изменения фона элемента .header__content
backgroundButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    headerContent.classList.remove(...backgroundColors); // Убираем все фоновые классы из .header__content
    headerContent.classList.add(backgroundColors[i]); // Добавляем выбранный фоновый класс
  });
});

// Функция для изменения цвета элементов
itemColorButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    items.forEach(item => {
      item.classList.remove(...itemColors); // Убираем все цветовые классы
      item.classList.add(itemColors[i]); // Добавляем выбранный цветовой класс
    });
  });
});
