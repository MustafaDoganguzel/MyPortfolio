import React from 'react'

export default function Hero() {
    return (
        <div className='hero '>
            <div class="flex items-center">
                <span class="flex w-10 h-[1px] bg-gray-400 mx-2 "></span>
                <span className='text-[#7B61FF] font-bold'>Mustafa Doganguzel</span>
            </div>
            <div className='flex m-5 '>
                <div className='flex flex-col justify-around '>
                    <div>

                        <h1>Creative Thinker</h1>
                        <h1>Minimalism Lover</h1>
                        <p className='text-gray-500'>Hi Im Mustafa I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                    </div>
                    <div className='flex gap-5'>
                        <button className=' h-10 w-20 border rounded-lg flex  items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'>Hire Me
                        </button>
                        <button className=' h-10 w-20 border flex rounded-lg items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'>Github
                        </button>
                        <button className=' h-10 w-20 border flex rounded-lg items-center justify-center  hover:bg-[#3730A3] hover:text-white hover:border'>Linkedin
                        </button>
                    </div>
                </div>
                <img className='w-40 rounded-xl' src="/src/images/hero.png" alt="hero-img" />
            </div>

        </div>
    )
}
