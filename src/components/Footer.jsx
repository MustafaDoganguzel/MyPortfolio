import React, { useContext } from 'react'
import { themeMode } from '../contexts/ThemeMode'

export default function Footer({ footerData }) {
    const { theme } = useContext(themeMode)
    console.log(footerData?.heading1)


    return (
        <div className={`${theme !== "Dark" ? 'bg-gray-100' : ' bg-black'} footer py-10 flex flex-col  `}>
            <div className='text-[40px] pl-40'>
                <div>
                    {footerData?.heading1}
                </div>
                <div>{footerData?.heading2}</div>
            </div>
            <div className='flex justify-between px-40'>
                <a href="m.doganguzell@gmail.com">👉 <span className='underline text-[#AF0C48] font-semibold'>m.doganguzell@gmail.com</span></a>
                <div className='flex gap-4 '>
                    <a href="">{footerData?.personalBlog} </a>
                    <a href="" className='text-[#00AB6B]'>Github</a>
                    <a href="" className='text-[#0077B5]'>Linkedin</a>
                </div>

            </div>


        </div>
    )
}
