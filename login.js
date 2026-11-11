const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function checkInputs() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (usernameValue !== '' && passwordValue !== '') {
        loginButton.classList.remove("loginBtnInactive");
        loginButton.classList.add("loginBtnActive");
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.classList.remove("loginBtnActive");
        loginButton.classList.add("loginBtnInactive");
        loginButton.setAttribute('disabled', 'true');
    }
}

usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

function login(e) {
    e.preventDefault();

    let loginForm = document.getElementById('loginForm');
    let formData = new FormData(loginForm);
    let formDataArray = [...formData];

    // console.log(formDataArray);

    // fetch('/login', {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formDataArray)
    // }).then((res) => {
    //     console.log(res.text);
    // }).then((result) => {
    //     // console.log(result);
    //     document.body.innerHTML = result;
    // }).catch((err) => {
    //     console.log(err)
    // });
}

const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click', login);