function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("repeatPasswordError").style.display = "none";
    
    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // Repeat Password validation
    const repeatPassword = document.getElementById("repeatPassword").value;
    if (password !== repeatPassword) {
        document.getElementById("repeatPasswordError").style.display = "block";
        isValid = false;
    }

    return isValid;
}