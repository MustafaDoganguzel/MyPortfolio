import React from 'react'
// const details = [] 
export default function Profile({ profileData }) {
    return (
        <>
            <div className='text-[40px]'>Profile</div>


            <div className='flex m-5 justify-between ' >
                <div>

                    <div className='text-[#4338CA]'>{profileData?.title}</div>
                    <div className='flex gap-1 flex-col'>
                        {/* const ile map yapmayi dene! */}
                        <div className='flex gap-10'>
                            <div className='w-30'>{profileData?.informations.dateOfBirth}</div>
                            <div>29.04.1996</div>
                        </div>
                        <div className='flex gap-10'>
                            <div className='w-30'>
                                {profileData?.informations.city1}
                            </div>
                            <div>Ankara</div>
                        </div>
                        <div className='flex gap-10'>
                            <div className='w-30'>{profileData?.informations.education1}</div>
                            <div>{profileData?.informations.education}</div>
                        </div>

                        <div className='flex gap-10'>
                            <div className='w-30'>{profileData?.preferencesJob}</div>
                            <div>Front-End/UI</div>
                        </div>
                    </div>

                </div>
                <div className='w-[50%]'>
                    <div className='text-[#4338CA]'>
                        {profileData?.aboutMe}
                    </div>
                    <p className='text-gray-400'>{profileData?.aboutDescription} </p>
                </div>
            </div>
            <hr className='md:w-full w-0' />

            <br />
        </>
    )
}
