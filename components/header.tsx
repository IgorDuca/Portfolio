import { useState } from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

import headerStyles from '../styles/components/Header.component.module.css'
import ToggleDarkMode from '../events/darkMode'

export default function Header() {
    const [ isDarkMode, toggleDarkMode ] = useState(false)

    return (
        <div className={headerStyles.headerHolder} >
            <div className={headerStyles.socialButtons} >
                <a href="https://github.com/IgorDuca"><FaGithub className={headerStyles.socialButton} /></a>
                <a href="https://twitter.com/wluvigor"><FaTwitter className={headerStyles.socialButton}  /></a>
                <a href="https://www.linkedin.com/in/igorfelipeduca/"><FaLinkedin className={headerStyles.socialButton}  /></a>
            </div>

            <div className={headerStyles.darkModeButton}>
                <button onClick={() => { ToggleDarkMode(isDarkMode, toggleDarkMode) }} id="darkModeButton">Dark</button>
            </div>
        </div>
    )
}