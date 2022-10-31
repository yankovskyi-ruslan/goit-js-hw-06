const validatedInputRef = document.querySelector('#validation-input');

const validateInputSymbols = () => {
    if (validatedInputRef.value.length >= validatedInputRef.dataset.length) {
        validatedInputRef.classList.remove('invalid');
        validatedInputRef.classList.add('valid');
    }
    else {
        validatedInputRef.classList.remove('valid');
        validatedInputRef.classList.add('invalid');
    }
}

validatedInputRef.addEventListener('blur', validateInputSymbols);