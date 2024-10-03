document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission

    // Fetch form values
    let username = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let phoneNumber = document.getElementById('phonenumber').value;

    // Basic validation
    if (!username || !email || !password || !phoneNumber) {
        alert("Please fill out all the fields.");
        return;
    }

    // Further validation (can be expanded)
    if (phoneNumber.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Simulate successful form submission
    alert("Registration successful!");

    // Optionally, reset the form
    document.getElementById('registrationForm').reset();
});
