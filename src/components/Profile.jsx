import React from 'react'

export default function Profile() {
    return (
        <>
            <div className='text-[40px]'>Profile</div>


            <div className='flex m-5 justify-between ' >
                <div>

                    <div className='text-[#4338CA]'>Profile</div>
                    <div className='flex gap-1 flex-col'>
                        <div className='flex '>
                            <div>Dogum Tarihi</div>
                            <div>29.04.1996</div>
                        </div>
                        <div className='flex'>
                            <div>Ikamet Sehri</div>
                            <div>Ankara</div>
                        </div>
                        <div className='flex'>
                            <div>Egitim Durumu</div>
                            <div>Baskent Universitesi</div>
                        </div>

                        <div className='flex'>
                            <div>Tercih Ettigi rol</div>
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
