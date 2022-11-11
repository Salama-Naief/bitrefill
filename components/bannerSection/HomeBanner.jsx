import Link from 'next/link'
import React from 'react'

function HomeBanner() {
  return (
    <div className=' relative'>
        <div className="bg-main w-full h-64 lg:h-screen md:h-96 relative overflow-hidden">
            <svg className='absolute top-0 right-0  w-auto h-full' width={1512} height={457} viewBox="0 0 1512 457" fill='none'>
            <g clipPath='url(#clip0_38_3713)'>
                <path d='M 80.3223 779.999 C 54.9231 703.611 164.322 409.999 503.1 335.914 C 841.878 261.83 933.884 438.219 1156.16 266.832 C 1378.44 95.444 1280.66 -246.155 1437.71 -298.374 C 1594.76 -350.592 1526.52 189 1526.52 189 C 1553.18 269.184 1575.11 335.134 1612.19 446.631 L 80.3223 779.999Z' fill='#FF001C'/>
            </g>
            <defs>
                <clipPath id='clip0_38_3713'>
                <rect width={1512} height={457} fill="white"/>
                </clipPath>
            </defs>
            </svg>
            <div className="text-white  absolute bottom-1 left-0 w-full h-full flex justify-center items-center z-10">
            <div className='text-center'>
                <h1 className="text-4xl md:text-7xl font-extrabold font-mono text-center text-wrap">LIVE ON <em>CRYPTO</em></h1>
                <div className=" text-center flex justify-center">
                    <div className="font-bold md:text-2xl my-4 font-serf text-wrap md:w-2/3 text-center">Buy gift cards for anything under the sun.No account necessary.</div>
                </div>
                <div className=' flex justify-center my-4'>
                    <Link  href={"/cards/all-gift-cards"}><a className='transtion duration-200 hover:bg-customGray-200 rounded-full px-6 text-xl py-3 bg-gray-200 text-black'>Browse 5000 + products</a></Link>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default HomeBanner