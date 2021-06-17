let curentUser = localStorage.getItem("currentUser");
if (curentUser) {
    alert("You are already logged in");
    // location.href = "./home.html";
}

/**
 * The login form, containing username, password and remember checkbox
 * @type {HTMLFormElement}
 */
const loginForm = document.getElementById("login");

if (localStorage.getItem("remember")
    && JSON.parse(localStorage.getItem("remember")) === true) {
    loginForm["remember"].checked = true;
}

/**
 * @typedef {Object} user
 * @property {String} username
 * @property {String} password
 * @property {String} email
 */

/**
 * @type {user[]}
 */
let localStorageUsers = localStorage.getItem("users");
if (!localStorageUsers || !Array.isArray(JSON.parse(localStorageUsers))) {
    localStorage.setItem("users", "[]");
}
localStorageUsers = JSON.parse(localStorageUsers);

loginForm.onsubmit = function (e) {
    e.preventDefault();
    let username = loginForm["username"].value.trim();
    let password = loginForm["password"].value
    let user = localStorageUsers
        .find(u => u.username === username &&
            u.password === password);
    if (!user) {
        alert("Wrong username or password");
    } else {
        alert(`Welcome ${user.username}`);
        if (loginForm.remember.checked) {
            localStorage.setItem("remember", "true");
        }
        // localStorage.setItem("curentUser", user);
        // location.href = "./home.html";
    }   
}