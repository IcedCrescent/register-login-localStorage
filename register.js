/**
 * The registration form, containing username, email, password
 * @type {HTMLFormElement}
 */
const registerForm = document.getElementById("register");

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
localStorageUsers = JSON.parse(localStorageUsers || []);

registerForm.onsubmit = function (e) {
    e.preventDefault();
    let username = registerForm["username"].value;
    let email = registerForm["email"].value;
    let password = registerForm["password"].value;
    let repeat = registerForm["repeatPassword"].value;
    let validationMessage = "";
    if (localStorageUsers.findIndex(u => u.username === username.trim()) != -1) {
        validationMessage += "Username already exist\n";
    }
    if (password !== repeat) {
        validationMessage += "Repeated password does not match";
    }
    if (validationMessage.length === 0) {
        let user = {
            username: username.trim(),
            email: email,
            password: password
        };
        localStorageUsers.push(user);
        localStorage.setItem("users", JSON.stringify(localStorageUsers));
        alert("User registered successfully");
        location.href = "./login.html";
    } else {
        alert(validationMessage);
    }
}