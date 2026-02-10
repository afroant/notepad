// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Create and add the toggle button
function addThemeToggle() {
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle dark mode');
    button.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    
    button.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            button.innerHTML = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            button.innerHTML = '🌙';
        }
    });
    
    document.body.appendChild(button);
}

// Add the button when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addThemeToggle);
} else {
    addThemeToggle();
}
