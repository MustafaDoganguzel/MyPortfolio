import React from 'react'

export default function Projects({ projectsData }) {
    return (
        <div className='projects '>

            <div className='text-[40px]'>{projectsData?.title}</div>
            <div className='flex m-5 justify-between md:flex'>

                <div className='w-80'>
                    <img className='w-80 h-35' src="src/images/Pizza.jpg" alt="pizza-img" />
                    <div className='text-[#4338CA] text-xl '>{projectsData?.project1.title}</div>
                    <p className='h-35 text-xs text-[#6B7280]'>{projectsData?.project1.description}</p>
                    <div className='flex gap-1 pt-1'>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'> React</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Redux</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Axios</button>
                    </div>
                    <div className='flex justify-between pt-1 text-[#3730A3] text-sm underline'>
                        <a href="">Github</a>
                        <a href="">{projectsData?.viewSite}</a>
                    </div>
                </div>

                <div className='w-80'>
                    <img className='w-80 h-35' src="src/images/Random.png" alt="random-png" />
                    <div className='text-[#4338CA] text-xl '>{projectsData?.project2.title}</div>
                    <p className='h-35 text-xs text-[#6B7280]'>{projectsData?.project2.description}</p>
                    <div className='flex gap-1 pt-1 '>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'> React</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Redux</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Axios</button>
                    </div>
                    <div className='flex justify-between pt-1 text-[#3730A3] text-sm underline'>
                        <a href="">Github</a>
                        <a href="">{projectsData?.viewSite}</a>
                    </div>
                </div>

                <div className='w-80'>
                    <img className='w-80 h-35' src="src/images/Workintech.png" alt="workintech-png" />
                    <div className='text-[#4338CA] text-xl '>{projectsData?.project3.title}</div>
                    <p className='h-35 text-xs text-[#6B7280]'>{projectsData?.project3.description}</p>
                    <div className='flex gap-1 pt-1'>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'> React</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Redux</button>
                        <button className='border text-[#3730A3] text-sm rounded-md px-1'>Axios</button>
                    </div>
                    <div className='flex justify-between pt-1 text-[#3730A3] text-sm underline '>
                        <a href="">Github</a>
                        <a href="">{projectsData?.viewSite}</a>
                    </div>
                </div>



            </div>


        </div>
    )
}
