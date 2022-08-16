document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if (email === 'jack@gmail.com' && password === 'jack') {
        window.location.href = 'bank.html';
    }
    else {
        window.location.href = alert('Please enter valid email and password')
    };
})

