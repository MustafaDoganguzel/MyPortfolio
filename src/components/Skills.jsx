import React from 'react'

export default function Skills({ skillsData }) {
    return (
        <>
            <div className='skills' id='skills-section'>

                <div className="text-[40px]"> {skillsData?.title}</div>

                <div className='flex justify-between gap-10 my-5'>
                    <div>
                        <div className='text-[#4338CA]'>
                            {skillsData?.javascript.name}
                        </div>
                        <p className='text-gray-400 h-60 '>
                            {skillsData?.javascript.info}
                        </p>
                    </div>
                    <div>
                        <div className='text-[#4338CA]' >  {skillsData?.react.name}</div>
                        <p className='text-gray-400  h-60  '>
                            {skillsData?.react.info}
                        </p>
                    </div>
                    <div>
                        <div className='text-[#4338CA]'>
                            {skillsData?.node.name}
                        </div>
                        <p className='text-gray-400  h-60 '>  {skillsData?.node.info}</p>

                    </div>


                </div>
                <br />

                <hr className='md:w-full w-0' />

            </div>

        </>
    )
}
