const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const changeOutputName = (event) => {
    if (!event.currentTarget.value) {
        return nameOutputEl.textContent = 'Anonymus';
    }
    nameOutputEl.textContent = event.currentTarget.value;
} 

nameInputEl.addEventListener('input', changeOutputName);