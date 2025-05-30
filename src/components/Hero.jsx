import React, { useContext } from 'react'
import { themeMode } from '../contexts/ThemeMode'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Hero({ heroData }) {
    const { theme } = useContext(themeMode)

    return (
        <div className='hero '>
            <div className="flex items-center ">
                <span className=" flex w-10 h-[1px] bg-gray-400 mx-2 "></span>
                <span className='text-[#7B61FF] font-bold ' >Mustafa Doganguzel</span>
            </div>
            <div className='flex m-5 justify-between '>
                <div className='flex flex-col justify-between '>
                    <div className='flex flex-col'>
                        <div className='text-[30px] pb-5 font-bold ' >
                            <h1>{heroData?.title}</h1>
                            <h1>{heroData?.title2}</h1>
                        </div>
                        <p className='text-gray-500 w-200 '>{heroData?.description}</p>

                    </div>
                    <div className='flex gap-5 '>
                        <a href='/' className=' h-10 w-20 border rounded-lg flex  items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'>{heroData?.social}
                        </a >
                        <a data-cy="github" href="https://github.com/MustafaDoganguzel" className=' h-10 w-20 border flex rounded-lg items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'> <FaGithub />Github
                        </a >
                        <a data-cy="linkedin" href='https://www.linkedin.com/in/mustafadoganguzel/' className=' h-10 w-20 border flex rounded-lg items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'> <FaLinkedin />Linkedin
                        </a >
                    </div>
                </div>
                <img className='md:w-70 md:h-70 rounded-xl w-35 h-35' src="https://myportfolio-topaz-chi-63.vercel.app/uploads/Hero.png" alt="hero-img" />
            </div>
            <br />
            <hr className='md:w-full w-0' />
        </div>
    )
}
