// login.js

// Create necessary elements programmatically


function showLoginForm() {
    const script = document.createElement('script');
    script.src = 'login.js';
    document.body.appendChild(script);
}

// Container div
const container = document.createElement('div');
container.classList.add('login-container');
container.style.display = 'none'; // Initially hide login container

// Header
const header = document.createElement('h2');
header.textContent = 'Login';
container.appendChild(header);

// Form
const loginForm = document.createElement('form');
loginForm.id = 'loginForm';

// Username input
const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Username:';
loginForm.appendChild(usernameLabel);

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.id = 'username';
usernameInput.name = 'username';
loginForm.appendChild(usernameInput);

// Password input
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password:';
loginForm.appendChild(passwordLabel);

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';
passwordInput.name = 'password';
loginForm.appendChild(passwordInput);

// Login button
const loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Login';
loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password input values
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Dummy validation (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        showMessage('Login successful!', 'green');
        // Redirect to dashboard on successful login
        redirectToDashboard();
    } else {
        showMessage('Invalid username or password. Please try again.', 'red');
    }
});
loginForm.appendChild(loginButton);

// Message container
const messageContainer = document.createElement('div');
messageContainer.id = 'loginMessage';
container.appendChild(messageContainer);

// Function to display messages
function showMessage(message, color) {
    messageContainer.textContent = message;
    messageContainer.style.color = color;
}

// Append container to the document body
document.body.appendChild(container);

// Function to redirect to dashboard
function redirectToDashboard() {
    // Redirect to the dashboard page
    window.location.href = '/dashboard.html'; // Replace with your actual dashboard URL
}
