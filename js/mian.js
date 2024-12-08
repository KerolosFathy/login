var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var logInEmail = document.getElementById("signInEmail");
var logInPassword = document.getElementById("signInPassword");
var user = document.getElementById("user");
var Search = document.getElementById("Search");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,30}$/



function signUp() {
    user.innerHTML = "";
    Search.innerHTML = "";
    if (!signUpName.value.trim() || !signUpEmail.value.trim() || !signUpPassword.value.trim()) {
        user.innerHTML = "All inputs are required";
        return;
    }
    if (!emailRegex.test(signUpEmail.value.trim())) {
        user.innerHTML = "Please enter a valid email";
        return;
    }
    if (!passwordRegex.test(signUpPassword.value.trim())) {
        user.innerHTML = "please enter a valid password";
        return;
    }
    localStorage.setItem("SignUpName", signUpName.value.trim());
    localStorage.setItem("SignUpEmail", signUpEmail.value.trim());
    localStorage.setItem("SignUpPassword", signUpPassword.value.trim());
    Search.innerHTML = "Search";
    clearValuesSignUp();
}
submitBtn.addEventListener("click", logIn())
function logIn() {
    user.innerHTML = "";
    Search.innerHTML = "";
    if (!logInEmail.value.trim() || !logInPassword.value.trim()) {
        user.innerHTML = "All inputs are required.";
        return;
    }
    var storedEmail = localStorage.getItem("SignUpEmail");
    var storedPassword = localStorage.getItem("SignUpPassword");
    var storedName = localStorage.getItem("SignUpName");

    if (logInEmail.value.trim() === storedEmail && logInPassword.value.trim() === storedPassword) {
        localStorage.setItem("LoggedInUser", storedName);
        window.location.href = "welcome.html";
    } else {
        user.innerHTML = "Invalid email or password.";
    }
    clearValuesLogIn();
}

function clearValuesSignUp() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}

function clearValuesLogIn() {
    logInEmail.value = "";
    logInPassword.value = "";
}

