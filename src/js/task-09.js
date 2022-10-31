function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorValueTextEl = document.querySelector('.color');
const colorChangeBtnEl = document.querySelector('.change-color');

const changeBackgroundColor = () => {
  colorValueTextEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValueTextEl.textContent;
}

colorChangeBtnEl.addEventListener('click', changeBackgroundColor);