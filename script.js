document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }

    // Phone number validation (Indian mobile number)
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Invalid phone number';
        document.getElementById('phone-error').style.display = 'block';
        isValid = false;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age.trim() === '' || isNaN(age) || age <= 0) {
        document.getElementById('age-error').textContent = 'Invalid age';
        document.getElementById('age-error').style.display = 'block';
        isValid = false;
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (gender.trim() === '') {
        document.getElementById('gender-error').textContent = 'Gender is required';
        document.getElementById('gender-error').style.display = 'block';
        isValid = false;
    }

    // Qualification validation
    const qualification = document.getElementById('qualification').value;
    if (qualification.trim() === '') {
        document.getElementById('qualification-error').textContent = 'Qualification is required';
        document.getElementById('qualification-error').style.display = 'block';
        isValid = false;
    }

    // City validation
    const city = document.getElementById('city').value;
    if (city.trim() === '') {
        document.getElementById('city-error').textContent = 'City is required';
        document.getElementById('city-error').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword.trim() === '') {
        document.getElementById('confirm-password-error').textContent = 'Confirm Password is required';
        document.getElementById('confirm-password-error').style.display = 'block';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        document.getElementById('confirm-password-error').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully');
        // Here you can add the code to actually submit the form data to the server
    }
});
