document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');
    
    // Check for saved credentials in local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
        
        existingButton.addEventListener('click', function() {
            alert(`Logged in as ${savedUsername}`);
        });
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
        
        // Show existing user button if credentials are saved
        if (rememberMe) {
            existingButton.style.display = 'block';
        }
        
        // Clear the form fields after submission
        loginForm.reset();
    });
});