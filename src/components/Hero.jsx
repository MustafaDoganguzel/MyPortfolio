import React, { useContext } from 'react'
import { themeMode } from '../contexts/ThemeMode'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Hero({ heroData }) {
    const { theme } = useContext(themeMode)

    return (
        <div className='hero'>
            <div className="flex items-center">
                <span className="flex w-10 h-[1px] bg-gray-400 mx-2 "></span>
                <span className='text-[#7B61FF] font-bold' >Mustafa Doganguzel</span>
            </div>
            <div className='flex m-5 justify-between'>
                <div className='flex flex-col justify-around '>
                    <div className='flex flex-col'>
                        <div className='text-[30px] pb-5 font-bold' >
                            <h1>{heroData?.title}</h1>
                            <h1>{heroData?.title2}</h1>
                        </div>
                        <p className='text-gray-500 w-200'>{heroData?.description}</p>
                    </div>
                    <div className='flex gap-5'>
                        <button className=' h-10 w-20 border rounded-lg flex  items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'>{heroData?.social}
                        </button>
                        <button className=' h-10 w-20 border flex rounded-lg items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'> <FaGithub />Github
                        </button>
                        <button className=' h-10 w-20 border flex rounded-lg items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'> <FaLinkedin />Linkedin
                        </button>
                    </div>
                </div>
                <img className='w-70 h-70 rounded-xl' src="/src/images/Hero.png" alt="hero-img" />
            </div>

        </div>
    )
}
