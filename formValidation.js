// part 3 form validation

// Get references to the form and its input fields


function validateSignIn() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || email === "" || password === "") {
        alert("All fields are required");
        return false;
    }

    // Validate email 

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    };

    // Validate password 

    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false;
    }


    alert("Form submitted successfully!");
    return true;

};


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

function validatePassword(password) {
    const format = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test(password);
}