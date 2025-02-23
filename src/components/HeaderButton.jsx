
import React, { useContext } from 'react'
import { themeMode } from '../contexts/ThemeMode'


export default function HeaderButton() {
    const { darkMode, theme } = useContext(themeMode)

    return (
        <>
            <div className='nav flex justify-end pt-5 pr-5 dark:bg-black '>
                <button onClick={darkMode}>{theme} Mode</button>
                <div> Turkceye Gec</div>
            </div >
        </>
    )
}
