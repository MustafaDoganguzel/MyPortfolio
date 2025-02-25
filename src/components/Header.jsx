import React from 'react'


export default function Header() {
    const scrollSkills = () => {
        const skillsSection = document.getElementById("skills-section")
        const projectsSection = document.getElementById("projects-section")
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: "smooth" })
        }
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" })
        }
    }
    //devam ettir burayi
    return (
        <>
            <div className=' header flex justify-between px-5 py-5'>
                <div className='rounded-full w-10 h-10 flex items-center justify-center bg-[#EEEBFF]'> <span className=' text-[#7B61FF] inline-block rotate-20'>M</span> </div>
                <div className='flex gap-2'>
                    <button onClick={scrollSkills} className='font-semibold flex items-center px-10 rounded-lg hover:bg-[#3730A3] hover:text-white hover:cursor-pointer '>Skills
                    </button>

                    <button onClick={scrollSkills} className='font-semibold  flex items-center px-10  rounded-lg hover:bg-[#3730A3] hover:text-white hover:cursor-pointer'>Projects
                    </button>

                    <button className=' font-semibold text-[#3730A3] bg-[#FFFFFF]  flex items-center px-10 rounded-lg hover:bg-[#3730A3] hover:text-white hover:cursor-pointer'>Hire Me
                    </button>
                </div>
            </div>

        </>
    )
}
