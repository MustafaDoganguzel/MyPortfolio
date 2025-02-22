import React from 'react'

export default function Projects() {
    return (
        <div className='projects '>

            <div className='text-[40px]'>Projects</div>
            <div className='flex m-5 justify-between'>

                <div className='w-50'>
                    <img className='w-50 h-35' src="src/images/Pizza.jpg" alt="pizza-img" />
                    <div className='text-[#4338CA] text-xl '>Pizza</div>
                    <p className='text-xs text-[#6B7280]'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. </p>
                    <div className='flex gap-1 pt-1'>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'> React</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Redux</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Axios</button>
                    </div>
                    <div className='flex justify-between pt-1 text-[#3730A3] text-sm underline'>
                        <a href="">Github</a>
                        <a href="">View Site</a>
                    </div>
                </div>

                <div className='w-50'>
                    <img className='w-50 h-35' src="src/images/Random.png" alt="random-png" />
                    <div className='text-[#4338CA] text-xl '>Witflix</div>
                    <p className='text-xs text-[#6B7280]'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. </p>
                    <div className='flex gap-1 pt-1 '>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'> React</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Redux</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Axios</button>
                    </div>
                    <div className='flex justify-between pt-1 text-[#3730A3] text-sm underline'>
                        <a href="">Github</a>
                        <a href="">View Site</a>
                    </div>
                </div>

                <div className='w-50'>
                    <img className='w-50 h-35' src="src/images/Workintech.png" alt="workintech-png" />
                    <div className='text-[#4338CA] text-xl '>Random Jokes</div>
                    <p className='text-xs text-[#6B7280]'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. </p>
                    <div className='flex gap-1 pt-1'>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'> React</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Redux</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Axios</button>
                    </div>
                    <div className='flex justify-between pt-1 text-[#3730A3] text-sm underline '>
                        <a href="">Github</a>
                        <a href="">View Site</a>
                    </div>
                </div>



            </div>


        </div>
    )
}
