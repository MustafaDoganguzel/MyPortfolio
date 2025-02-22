import React from 'react'


export default function Header() {
    return (
        <>
            <div className='header flex justify-between px-5 py-5'>
                <div className='rounded-full w-10 h-10 flex items-center justify-center bg-[#EEEBFF]'> <span className=' text-[#7B61FF] inline-block rotate-20'>M</span> </div>
                <div className='flex gap-2'>
                    <button className='border flex items-center px-1 rounded-lg hover:bg-[#3730A3] hover:text-white'>Skills
                    </button>

                    <button className=' border flex items-center px-1 rounded-lg hover:bg-[#3730A3] hover:text-white'>Projects
                    </button>
                    <button className='border flex items-center px-1 rounded-lg hover:bg-[#3730A3] hover:text-white'>Hire Me
                    </button>
                </div>
            </div>

        </>
    )
}
