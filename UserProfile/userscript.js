// Profile editing functionality
function editProfile(field) {
    const element = document.getElementById(field);
    const currentValue = element.textContent.trim();
    const newValue = prompt(`Enter new ${field}:`, currentValue);
    
    if (newValue && newValue !== currentValue) {
        element.textContent = newValue;
        // Here you would typically also update the value in your backend
    }
}

// Logout functionality
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear any session data or tokens
        localStorage.removeItem('userToken');
        sessionStorage.clear();
        
        // Redirect to login page
        window.location.href = '../LoginPage/index.html';
    }
}

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
