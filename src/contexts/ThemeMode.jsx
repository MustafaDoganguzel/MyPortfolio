import { createContext, useEffect, useState } from "react";


export const themeMode = createContext();

export default function ThemeModeProvider({ children }) {

    const [theme, setTheme] = useState('Light')

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved) {
            setTheme(saved)
        }
    }, [])

    const darkMode = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'Light' ? 'Dark' : 'Light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }

    useEffect(() => {
        if (theme === 'Dark') {
            document.documentElement.classList.add('Dark')
            document.getElementById('root').classList.add('Dark')

        } else {
            document.documentElement.classList.remove('Dark')
            document.getElementById('root').classList.remove('Dark')

        }
    }, [theme]) // theme değiştiğinde toast mesajını göster

    return (
        <themeMode.Provider value={{ theme, darkMode }}>
            {children}
        </themeMode.Provider>

    )
}
