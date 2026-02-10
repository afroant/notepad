// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Create and add the toggle button
function addThemeToggle() {
    // Remove any existing toggle button first
    const existingButton = document.querySelector('.theme-toggle');
    if (existingButton) {
        existingButton.remove();
    }
    
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle dark mode');
    button.setAttribute('type', 'button');
    
    // Set initial icon based on current theme
    const theme = document.documentElement.getAttribute('data-theme');
    button.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        let currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            button.innerHTML = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            button.innerHTML = '🌙';
        }
    });
    
    // Append to body
    document.body.appendChild(button);
    console.log('Theme toggle button added');
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addThemeToggle);
} else {
    addThemeToggle();
}
