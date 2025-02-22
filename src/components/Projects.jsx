import React from 'react'

export default function Projects() {
    return (
        <div className='projects'>

            <div>Projects</div>
            <div className='flex justify-between'>

                <div className='w-50'>
                    <img className='w-50 h-35' src="src/images/Pizza.jpg" alt="pizza-img" />
                    <div>Pizza</div>
                    <p className='text-xs'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. </p>
                    <div className='flex gap-1'>
                        <button className='border px-1'> React</button>
                        <button className='border px-1'>Redux</button>
                        <button className='border px-1'>Axios</button>
                    </div>
                </div>
                <div className='w-50'>
                    <img className='w-50 h-35' src="src/images/Random.png" alt="random-png" />
                    <div>Pizza</div>
                    <p className='text-xs'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. </p>
                    <div className='flex gap-1'>
                        <button className='border px-1'> React</button>
                        <button className='border px-1'>Redux</button>
                        <button className='border px-1'>Axios</button>
                    </div>
                </div>
                <div className='w-50'>
                    <img className='w-50 h-35' src="src/images/Workintech.png" alt="workintech-png" />
                    <div>Pizza</div>
                    <p className='text-xs'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. </p>
                    <div className='flex gap-1'>
                        <button className='border px-1'> React</button>
                        <button className='border px-1'>Redux</button>
                        <button className='border px-1'>Axios</button>
                    </div>
                </div>



            </div>


        </div>
    )
}
