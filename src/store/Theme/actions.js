// Ne definim actiunile necesare pentru a modifica store-ul
// Actiune care ne seteaza tema deschisa:
export function setLightTheme(){
    return {
        type: "LIGHT"
    }
}

// Actiune care seteaza tema inchisa:
export function setDarkTheme(){
    return {
        type: "DARK"
    }
}