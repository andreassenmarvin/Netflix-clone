$(function () {
    $(".signup-form1").submit(function (event) {
        event.preventDefault();

        if ($("#signup-input1").val() == "") {
            $("#signup1-error").show();
        } else {
            window.location = "login.html";
            $("#signup1-error").hide();
        }
    })

    $(".signup-form2").submit(function (event) {
        event.preventDefault();

        if ($("#signup-input2").val() == "") {
            $("#signup2-error").show();
        } else {
            window.location = "login.html";
            $("#signup2-error").hide();
        }
    })
})

var email = document.getElementById("email");
var errEmail = document.getElementById("errorEmail");

function validateEmail() {
    if (email.value == "") {
        errEmail.style.display = "block"
        email.style.borderBottom = "1px solid #E87C03";
    } else {
        errEmail.style.display = "none";
        email.style.borderBottom = "none";
    }
}

var password = document.getElementById("password");
var errPassword = document.getElementById("errorPassword");

function validatePassword() {
    if (password.value.length < 4) {
        errPassword.style.display = "block";
        password.style.borderBottom = "1px solid #E87C03";
    } else {
        errPassword.style.display = "none";
        password.style.borderBottom = "none";
    }
}

function validateForm(event) {
    if (email.value == "" && password.value.length < 4) {
        errEmail.style.display = "block";
        email.style.borderBottom = "1px solid #E87C03";
        errPassword.style.display = "block";
        password.style.borderBottom = "1px solid #E87C03";

        return false;
    } else if (email.value == "") {
        errEmail.style.display = "block"
        email.style.borderBottom = "1px solid #E87C03";

        return false;
    } else if (password.value.length < 4) {
        errPassword.style.display = "block";
        password.style.borderBottom = "1px solid #E87C03";

        return false;
    } else {
        errPassword.style.display = "none";
        password.style.borderBottom = "none";
        errEmail.style.display = "none";
        email.style.borderBottom = "none";

        return true;
    }
}