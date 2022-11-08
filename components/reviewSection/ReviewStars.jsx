import React from 'react'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'


export default function ReviewStars({rate=5}) {

  return (
    <div className='my-4 mx-2 text-center flex w-full justify-center'>
    {
        rate===0&&<div className='flex items-center '><BsStar className='text-2xl md:text-3xl  '/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {
        rate>0&&rate<1&&<div className='flex items-center'><BsStarHalf className='text-starColor text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {
        rate===1&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {
        rate>1&&rate<2&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarHalf className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {   
        rate===2&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {    
        rate>2&&rate<3&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarHalf className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {    
        rate===3&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {    
        rate>3&&rate<4&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarHalf className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {    
        rate===4&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStar className='mx-0.5 md:mx-1 text-2xl md:text-3xl'/></div>
    }
    {    
        rate>4&&rate<5&&<div className='flex items-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarHalf className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/></div>
    }
    {    
        rate===5&&<div className='flex items-center justify-center'><BsStarFill className='text-starColor text-2xl md:text-3xl'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/><BsStarFill className='mx-0.5 md:mx-1 text-2xl md:text-3xl text-starColor'/></div>
    }
    </div>
  )
}
