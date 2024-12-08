// *************************************welcome in home page********************************
var userName = localStorage.getItem("LoggedInUser");
if (userName) {
document.getElementById("welcomeMessage").innerHTML = `Welcome ${userName}`;
} else {
window.location.href = "index.html"; 
}
function logout() {
window.location.href = "index.html";
}