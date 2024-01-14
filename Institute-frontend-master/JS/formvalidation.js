function usernamevalidation() {
    var username = document.getElementById('username').value
    console.log(username)
    if (!username.match(/^[a-z]/)) {
        displaymsg('usererror', 'username must start with alphabet', 'red')
        return false;

    } else if (username.length < 8) {
        displaymsg('usererror', 'username must be 8 letters long', 'red')
        return false;

    } else {
        displaymsg('usererror', 'valid username', 'green')
        return true;


    }
}

function passvalid() {
    var password = document.getElementById('password').value;
    if (!password.match(/[a-z]/)) {
        displaymsg('password-error', 'password must contain atleast one lowercase alphabet', 'red')
        return false;
    } else if (!password.match(/[A-Z]/)) {
        displaymsg('password-error', 'password must contain atleast one uppercase alphabet', 'red')
        return false;

    } else if (!password.match(/[0-9]/)) {
        displaymsg('password-error', 'password must contain atleast one number', 'red')
        return false;

    } else if (!password.match(/[!@#$%^&*()\-]/)) {
        displaymsg('password-error', 'password must contain atleast one special character', 'red')
        return false;

    } else if (password.length < 8) {
        displaymsg('password-error', 'password must contain minimum 8 characters', 'red')
        return false;

    } else if (password.length > 8 && password.length < 15) {
        displaymsg('password-error', 'medium password', 'green')
        return true;

    } else if (password.length > 15 && password.length <= 30) {
        displaymsg('password-error', 'strong password', 'green')
        return true;

    }
    else if (password.length > 30) {
        displaymsg('password-error', 'password must contain less than 30 characters', 'red')
        return false;
    } else {

    }
}


function emailvalid() {
    var email = document.getElementById('email').value
    console.log(email)
    if (!email.match(/^[a-z]/)) {
        displaymsg('emailerror', 'email must start with alphabet', 'red')
        return false;

    } else if (!email.match(/(@gmail.com)$/)) {
        displaymsg('emailerror', 'not a proper email format', 'red')
        return false;

    } else {
        displaymsg('emailerror', 'valid email', 'green')
        return true;

    }
}

function formvalidation() {
    if (usernamevalidation() && passvalid() && emailvalid()) {
        return true;
    } else {
        return false;
    }
}

function displaymsg(id, msg, color) {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = color
}