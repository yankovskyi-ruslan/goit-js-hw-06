const fontSizeControllerInputRef = document.querySelector('#font-size-control');
const textOutputRef = document.querySelector('#text');

const changeFontSize = () => {
    textOutputRef.style.fontSize = `${fontSizeControllerInputRef.value}px`
}

fontSizeControllerInputRef.addEventListener('input', changeFontSize);