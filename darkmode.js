// Versión 2.0
var darkMode = document.getElementById('buttonDarkMode')
darkMode.addEventListener("click", () => {
    document.documentElement.style.setProperty('--color-mode', '#555')
    document.documentElement.style.setProperty('--color-mode-contrast', '#0a9')
})