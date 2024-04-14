window.onload = function() {
    alert("Welcome to our website!");
};

function slide() {
    var box = document.getElementById('box');
    var currentPosition = box.getBoundingClientRect().left;
    var targetPosition = 300; // Target position for sliding (adjust as needed)
    var distance = targetPosition - currentPosition;

    box.style.left = distance + 'px';
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    
    var isValid = true;
    
    // Validate name
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    
    // Validate email
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    
    // Validate password
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
    
    return isValid;
}