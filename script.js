function themeChange() {
    let link = document.getElementById('themeLink');
    let lightTheme = 'lightTheme.css'
    let darkTheme = 'darkTheme.css'
    let currTheme = ''
    if (link.getAttribute('href') == lightTheme) {
        link.setAttribute('href', darkTheme)
        currTheme = darkTheme;
    } else {
        link.setAttribute('href', lightTheme)
        currTheme = lightTheme;
    }
    SaveTheme(currTheme)
}

function SaveTheme(theme) {
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    let theme = localStorage.getItem('theme')
    document.getElementById('themeLink').setAttribute('href', theme);
}