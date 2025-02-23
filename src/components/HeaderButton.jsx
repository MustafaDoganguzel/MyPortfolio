
import React, { useContext } from 'react'
import { themeMode } from '../contexts/ThemeMode'
import { FaMoon, FaSun } from 'react-icons/fa'


export default function HeaderButton() {
    const { darkMode, theme } = useContext(themeMode)

    return (
        <>
            <div className='nav flex justify-end pt-5 pr-5 dark:bg-black '>
                <div className="flex justify-end items-center space-x-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={theme === 'Dark'}
                            onChange={darkMode}
                            data-testid="darkMode-toggle"
                        />
                        <div
                            className={`w-14 h-7 rounded-full flex items-center px-1 
                        transition-all duration-300 ease-in-out
                        ${theme === 'Dark' ? 'bg-[#6f60d4] justify-start' : 'bg-[#4731D3] justify-end'}`}
                        >
                            <div
                                className="w-6 h-6 flex items-center justify-center 
                            transition-transform duration-300 ease-in-out"
                            >
                                {theme === 'Dark' ? (
                                    <FaMoon className="text-[#FFE86E] text-lg" />
                                ) : (
                                    <FaSun className="text-[#FFE86E] text-lg" />
                                )}

                            </div>

                        </div>
                        <div >{theme} Mode</div>
                    </label>
                    <div> Turkceye Gec</div>
                </div>


            </div >
        </>
    )
}
