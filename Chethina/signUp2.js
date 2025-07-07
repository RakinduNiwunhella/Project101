let message = document.getElementById("message");
let pass = document.getElementById("pass");
let conpass = document.getElementById("conpass");
let submit = document.getElementById("submit");

function checkPassword() {
    if (pass.value.length >= 5 && pass.value.length <= 10) {
        if (pass.value === conpass.value) {
            message.textContent = "*Password is valid and matches";
            message.style.color = "green";
            return true;
        } else {
            message.textContent = "*Passwords do not match";
            message.style.color = "red";
            return false;
        }
    } else {
        message.textContent = "*Password must be 5-10 characters";
        message.style.color = "red";
        return false;
    }
}

// Add event listeners
pass.addEventListener("input", checkPassword);
conpass.addEventListener("input", checkPassword);

// Prevent form submission if invalid
document.querySelector("form").addEventListener("submit", function (e) {
    if (!checkPassword()) {
        e.preventDefault(); // stops form from submitting
    }
});
