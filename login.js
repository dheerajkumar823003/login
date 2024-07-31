document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation for demo purposes
    if (username === 'Dheeraj Kumar' && password === '823003') {
        window.location.href = 'dashboard.html'; // Redirect to another page
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
