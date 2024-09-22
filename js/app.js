document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple user credentials check (admin or user)
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin-home.html';
    } else if (username === 'user' && password === 'user123') {
        window.location.href = 'user-home.html';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid credentials. Try again.';
    }
});
