let counterValue = 0;
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const decreaseValue = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

const increaseValue = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener('click', decreaseValue);
incrementBtnEl.addEventListener('click', increaseValue);