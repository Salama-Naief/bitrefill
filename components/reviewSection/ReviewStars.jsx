import React from 'react'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'


export default function ReviewStars({rate=5,size,postion}) {

  return (
    <div className={`my-4 mx-2 ${postion} `}>
    {
        rate===0&&<div className='flex items-center '><BsStar className={`${size} `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {
        rate>0&&rate<1&&<div className='flex items-center'><BsStarHalf className={`text-starColor ${size}`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {
        rate===1&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {
        rate>1&&rate<2&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarHalf className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {   
        rate===2&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {    
        rate>2&&rate<3&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarHalf className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {    
        rate===3&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {    
        rate>3&&rate<4&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarHalf className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {    
        rate===4&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStar className={`${size} mx-0.5 md:mx-1 `}/></div>
    }
    {    
        rate>4&&rate<5&&<div className='flex items-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarHalf className={`${size} mx-0.5 md:mx-1 text-starColor `}/></div>
    }
    {    
        rate===5&&<div className='flex items-center justify-center'><BsStarFill className={`text-starColor ${size}`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/><BsStarFill className={`${size} mx-0.5 md:mx-1 text-starColor`}/></div>
    }
    </div>
  )
}
