const loginButton = document.getElementById('loginAction');
const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    formValidate();
});

function formValidate() {
    if (!usernameEl.value) {
        new swal('Please type your email or username!', '', 'warning');
        usernameEl.focus();
        return;
    } else if (!passwordEl.value) {
        new swal('Please type your password!', '', 'warning');
        usernameEl.focus();
        return;
    } else loginAction();
}

function loginAction() {
    $.post('/login', { username: usernameEl.value, password: passwordEl.value }, (res) => {
        console.log(res.status, res);
        window.localStorage.auth = true;
        window.location.replace('/home');
    });
}
