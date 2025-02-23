import React from 'react'
// const details = [] 
export default function Profile() {
    return (
        <>
            <div className='text-[40px]'>Profile</div>


            <div className='flex m-5 justify-between ' >
                <div>

                    <div className='text-[#4338CA]'>Profile</div>
                    <div className='flex gap-1 flex-col'>
                        {/* const ile map yapmayi dene! */}
                        <div className='flex gap-10'>
                            <div className='w-30'>Dogum Tarihi</div>
                            <div>29.04.1996</div>
                        </div>
                        <div className='flex gap-10'>
                            <div className='w-30'>Ikamet Sehri</div>
                            <div>Ankara</div>
                        </div>
                        <div className='flex gap-10'>
                            <div className='w-30'>Egitim Durumu</div>
                            <div>Baskent Universitesi</div>
                        </div>

                        <div className='flex gap-10'>
                            <div className='w-30'>Tercih Ettigi rol</div>
                            <div>Front-End/UI</div>
                        </div>
                    </div>

                </div>
                <div className='w-[50%]'>
                    <div className='text-[#4338CA]'>
                        About me
                    </div>
                    <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                        Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>

        </>
    )
}
