import headerStyles from '../styles/components/Header.component.module.css'

export default function ToggleDarkMode(isDarkMode: boolean, toggleDarkMode: any) {
    if(isDarkMode === false) {
        document.body.style.backgroundColor = "#121212"
        document.body.style.color = "#fff"
        var darkModeBtn = document.getElementById("darkModeButton")
        if(darkModeBtn === null) return false;
        darkModeBtn.innerText = "Light"
        darkModeBtn.style.border = "1px solid #fff"

        var infoDiv = document.getElementById("infoDiv")
        if(infoDiv === null) return false;

        infoDiv.style.backgroundColor = "#fff"
        infoDiv.style.boxShadow = "box-shadow: -1px -3px 92px 0px rgba(255, 255, 255, 0.38)"
        infoDiv.style.color = "black"

        toggleDarkMode(true)
    } else {
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "black"
        var darkModeBtn = document.getElementById("darkModeButton")
        if(darkModeBtn === null) return false;
        darkModeBtn.innerText = "Dark"
        darkModeBtn.style.border = "1px solid black"

        var infoDiv = document.getElementById("infoDiv")
        if(infoDiv === null) return false;

        infoDiv.style.backgroundColor = "#121212"
        infoDiv.style.boxShadow = "box-shadow: -1px -3px 92px 0px rgba(0,0,0,0.38);"
        infoDiv.style.color = "#fff"

        toggleDarkMode(false)
    }
}