let totalErrors = 0;

function addErrorMsg(msg, element, id) {
    let existingErrorMessage = element.nextElementSibling;

    if (existingErrorMessage && existingErrorMessage.classList.contains('error-msg')) {
        existingErrorMessage.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', id);
    errorDiv.className = 'error-msg';
    errorDiv.textContent = msg;

    element.insertAdjacentElement('afterend', errorDiv);
}

function removeErrorMsg(element) {
    let existingErrorMessage = element.nextElementSibling;
    if (existingErrorMessage && existingErrorMessage.classList.contains('error-msg')) {
        existingErrorMessage.remove();
    }
}

function validateForm() {
    const fname = document.getElementById('fname');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const cpass = document.getElementById('conPass');
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\]).{8,}$/;

    let isValid = true;
    if (fname.value.length == 0) {
        addErrorMsg("Name can not be empty.", fname, 'fnameErr');
        // if (totalErrors < 4) {
        // const div = document.createElement('div');
        // div.classList.add('err');
        // div.setAttribute('id', 'fnameError');
        // div.textContent = 'Please Enter your name.';
        // document.body.appendChild(div);
        // totalErrors++;
        // setTimeout(() => {
        //     let translation = -8;
        //     const errorDivs = document.getElementsByClassName('err');
        //     console.log(errorDivs);
        //     // for (const item of errorDivs) {
        //     //     // translation += parseFloat(getComputedStyle(item).height);
        //     //     translation += item.scrollHeight;
        //     //     console.log(translation);
        //     // }
        //     for (let i = 0; i < totalErrors; i++) {
        //         translation += 8;
        //     }
        //     div.style.transform = `translate(38em, ${translation}em)`;
        // }, 50);
        // setTimeout(() => {
        //     div.style.transform = `translate(38em, -8em)`;
        //     const errorDivs = document.getElementsByClassName('err');
        //     for (const item of errorDivs) {
        //         const transformValue = item.style.transform;

        //         const match = /translate\(([^,]+),\s*([^)]+)\)/.exec(transformValue);
        //         const translateY = match[2];
        //         const newY = parseFloat(translateY) - 8;
        //         item.style.transform = `translate(38em, ${newY}em)`;
        //     }
        //     setTimeout(() => {
        //         div.remove();
        //         totalErrors--;
        //     }, 250);
        // }, 4000);
        // }
        isValid = false;
    } else {
        removeErrorMsg(fname);
        isValid = true;
    }

    if (username.value.length == 0) {
        addErrorMsg("Username can not be empty.", username, 'userErr');
        // if (totalErrors < 4) {
        // const div = document.createElement('div');
        // div.classList.add('err');
        // div.setAttribute('id', 'usernameError');
        // div.textContent = 'Please Enter your username.';
        // document.body.appendChild(div);
        // totalErrors++;
        // setTimeout(() => {
        //     let translation = -8;
        //     const errorDivs = document.getElementsByClassName('err');
        //     console.log(errorDivs);
        //     // for (const item of errorDivs) {
        //     //     // translation += parseFloat(getComputedStyle(item).height);
        //     //     translation += item.scrollHeight;
        //     //     console.log(translation);
        //     // }
        //     for (let i = 0; i < totalErrors; i++) {
        //         translation += 8;
        //     }
        //     div.style.transform = `translate(38em, ${translation}em)`;
        // }, 60);
        // setTimeout(() => {
        //     div.style.transform = `translate(38em, -8em)`;
        //     const errorDivs = document.getElementsByClassName('err');
        //     for (const item of errorDivs) {
        //         const transformValue = item.style.transform;

        //         const match = /translate\(([^,]+),\s*([^)]+)\)/.exec(transformValue);
        //         const translateY = match[2];
        //         const newY = parseFloat(translateY) - 8;
        //         item.style.transform = `translate(38em, ${newY}em)`;
        //     }
        //     setTimeout(() => {
        //         div.remove();
        //         totalErrors--;
        //     }, 250);
        // }, 4000);
        // }
        isValid = false;
    } else {
        removeErrorMsg(username);
        isValid = true;
    }

    console.log(phone.value);
    if (phone.value.length != 11) {
        addErrorMsg("Enter a valid Phone Number.", phone, 'phoneErr');
    } else {
        removeErrorMsg(phone);
        isValid = true;
    }

    if (!passRegex.test(password.value)) {
        addErrorMsg("Atleast 1 upper-case, 1 lower-case, 1 digit and 1 special character.", password, 'passErr');
        // if (totalErrors < 4) {
        //     const div = document.createElement('div');
        //     div.classList.add('err');
        //     div.setAttribute('id', 'passError');
        //     div.textContent = 'Password should be atleast 8 characters long and contain at least 1 upper-case, 1 lower-case, 1 digit, 1 special character.';
        //     document.body.appendChild(div);
        //     totalErrors++;
        //     setTimeout(() => {
        //         let translation = -8;
        //         const errorDivs = document.getElementsByClassName('err');
        //         console.log(errorDivs);
        //         // for (const item of errorDivs) {
        //         //     // translation += parseFloat(getComputedStyle(item).height);
        //         //     translation += item.scrollHeight;
        //         //     console.log(translation);
        //         // }
        //         for (let i = 0; i < totalErrors; i++) {
        //             translation += 8;
        //         }
        //         div.style.transform = `translate(38em, ${translation}em)`;
        //     }, 70);
        //     setTimeout(() => {
        //         div.style.transform = `translate(38em, -8em)`;
        //         const errorDivs = document.getElementsByClassName('err');
        //         for (const item of errorDivs) {
        //             const transformValue = item.style.transform;

        //             const match = /translate\(([^,]+),\s*([^)]+)\)/.exec(transformValue);
        //             const translateY = match[2];
        //             const newY = parseFloat(translateY) - 8;
        //             item.style.transform = `translate(38em, ${newY}em)`;
        //         }
        //         setTimeout(() => {
        //             div.remove();
        //             totalErrors--;
        //         }, 250);
        //     }, 4000);
        // }
        isValid = false;
    } else {
        removeErrorMsg(password);
        isValid = true;
    }

    if (cpass.value != password.value) {
        addErrorMsg("Passwords do not match.", cpass, 'cpassErr');
        // if (totalErrors < 4) {
        //     const div = document.createElement('div');
        //     div.classList.add('err');
        //     div.setAttribute('id', 'cpassError');
        //     div.textContent = 'Passwords do not match.';
        //     document.body.appendChild(div);
        //     totalErrors++;
        //     setTimeout(() => {
        //         let translation = -8;
        //         const errorDivs = document.getElementsByClassName('err');
        //         console.log(errorDivs);
        //         // for (const item of errorDivs) {
        //         //     // translation += parseFloat(getComputedStyle(item).height);
        //         //     translation += item.scrollHeight;
        //         //     console.log(translation);
        //         // }
        //         for (let i = 0; i < totalErrors; i++) {
        //             translation += 8;
        //         }
        //         div.style.transform = `translate(38em, ${translation}em)`;
        //     }, 80);
        //     setTimeout(() => {
        //         div.style.transform = `translate(38em, -8em)`;
        //         const errorDivs = document.getElementsByClassName('err');
        //         for (const item of errorDivs) {
        //             const transformValue = item.style.transform;

        //             const match = /translate\(([^,]+),\s*([^)]+)\)/.exec(transformValue);
        //             const translateY = match[2];
        //             const newY = parseFloat(translateY) - 8;
        //             item.style.transform = `translate(38em, ${newY}em)`;
        //         }
        //         setTimeout(() => {
        //             div.remove();
        //             totalErrors--;
        //         }, 250);
        //     }, 4000);
        // }
        isValid = false;

    } else {
        removeErrorMsg(cpass);
        isValid = true;
    }

    return isValid;
}

function signup(e) {
    e.preventDefault();
    if (validateForm()) {
        let signUpForm = document.getElementById('signUpForm');
        let formData = new FormData(signUpForm);
        let formDataArray = [...formData];

        // console.log(formDataArray);

        // fetch('/signup', {
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
}

const signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', signup);
