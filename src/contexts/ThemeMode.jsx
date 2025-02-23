import { createContext, useEffect, useState } from "react";

export const themeMode = createContext();

export default function ThemeModeProvider({ children }) {
    const tema = localStorage.getItem('theme') || 'light'
    const [theme, setTheme] = useState(tema)

    const darkMode = () => {
        setTheme(prevTheme => (prevTheme === 'Dark' ? 'Light' : 'Dark'))
        localStorage.setItem('theme', theme) // 
        console.log("deneme????")
    }
    useEffect(() => {
        if (theme === 'Dark') {
            document.documentElement.classList.add('Dark')
            document.getElementById('root').classList.add('Dark')
        } else {
            document.documentElement.classList.remove('Dark')
            document.getElementById('root').classList.remove('Dark')
        }
    }, [theme])

    return <themeMode.Provider value={{ theme, darkMode }} >
        {children}
    </themeMode.Provider>
}