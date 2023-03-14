document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-input').value;
    const passField = document.getElementById('password-input').value;
    if (emailField == 'masuk@mail.com' && passField == '123') {
        window.location.href = 'bank.html';
    }
    else {
        alert('wrong user name or password');
        window.location.href = '#';
    }

    document.getElementById('email-input').value = '';
    document.getElementById('password-input').value = '';

})