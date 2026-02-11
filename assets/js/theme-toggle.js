// Theme is already set by inline script in <head>
// This script just handles the toggle button

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

// Listen for system theme changes (only if user hasn't manually set a preference)
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeToggle();
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
    initThemeToggle();
}
