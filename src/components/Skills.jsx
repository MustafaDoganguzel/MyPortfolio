import React from 'react'

export default function Skills({ skillsData }) {
    return (
        <div className='skills'>

            <div className="text-[40px]"> {skillsData?.title}</div>

            <div className='flex justify-between my-5'>
                <div>
                    <div className='text-[#4338CA]'>
                        {skillsData?.javascript.name}
                    </div>
                    <p className='text-gray-400 w-100 h-45 '>
                        {skillsData?.javascript.info}
                    </p>
                </div>
                <div>
                    <div className='text-[#4338CA]' >  {skillsData?.react.name}</div>
                    <p className='text-gray-400 w-90 h-45  '>
                        {skillsData?.react.info}
                    </p>
                </div>
                <div>
                    <div className='text-[#4338CA]'>
                        {skillsData?.node.name}
                    </div>
                    <p className='text-gray-400 w-90 h-45 '>  {skillsData?.node.info}</p>

                </div>


            </div>



        </div>
    )
}
