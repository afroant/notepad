// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update the theme toggle button
function updateThemeToggle() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    
    const theme = document.documentElement.getAttribute('data-theme');
    const icon = button.querySelector('.material-icons');
    
    if (icon) {
        icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    }
}

// Set initial icon
updateThemeToggle();

// Add click handler when DOM is ready
function initThemeToggle() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        let currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        
        updateThemeToggle();
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
    initThemeToggle();
}
