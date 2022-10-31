const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('.login-form');
const passwordInputEl = document.querySelector('.login-form');

const gatherUserInfo = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
        alert('Всі поля повинні бути заповнені!!!');
    }

    const userInfo = {
        email: email.value,
        password: password.value,
    }

    console.table(userInfo);
    event.currentTarget.reset();
}

formEl.addEventListener('submit', gatherUserInfo);