import React, { useContext } from 'react'
import { themeMode } from '../contexts/ThemeMode'

export default function Footer() {
    const { theme } = useContext(themeMode)
    return (
        <div className={`${theme !== "Dark" ? 'footer py-10 bg-gray-100' : 'footer py-10 bg-black'} `}>
            <div className='text-[40px]'>
                <div>Lets work together on</div>
                <div>your next product.</div>
            </div>
            <div className='flex justify-between '>
                <a href="m.doganguzell@gmail.com">👉 <span className='underline text-[#AF0C48] font-semibold'>m.doganguzell@gmail.com</span></a>
                <div className='flex gap-4 '>
                    <a href="">Personal Blog </a>
                    <a href="" className='text-[#00AB6B]'>Github</a>
                    <a href="" className='text-[#0077B5]'>Linkedin</a>
                </div>

            </div>


        </div>
    )
}
