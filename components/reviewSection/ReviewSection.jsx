
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useContext } from 'react';
import { landingImages } from '../../utils/dumyData';
import { Store } from '../../utils/Store';
import ReviewSlider from './ReviewSlider';
import ReviewStars from './ReviewStars';

function ReviewSection() {
  const {state} =useContext(Store);
  const {darkMode}=state;
  return (
    <div className={`${darkMode?"text-white bg-dark-100":"bg-customGray-200 text-main"} `}>
       <div className=' container mx-auto  lg:w-2/3 py-24'>
        <div className='flex md:flex-row  flex-col justify-center w-full pb-24'>
          <div className='mx-4 text-center md:w-1/2'>
            <ReviewStars size="text-2xl md:text-3xl" postion="text-center flex w-full justify-center"/>
            <div className='font-blod text-xl my-4'>Over 500 reviews with an avg 4.9 rating</div>
            <div className='font-semibod my-4'>
              <Link href={"/reviews"} passHref>
                 <a className='underline'>
                  <span>read Reviews</span>
                 </a>
               </Link>
            </div>
          </div>
          <div className='mx-4 px-4 shadow md:w-1/2'>
             <ReviewSlider />
          </div>
        </div>
          
          <div className="flex  flex-wrap px-4 justify-center md:justify-between py-10">
            {
              landingImages.map(image=>(
                 <a key={image.id}  href={image.url} className=" transition duration-200 rounded hover:bg-customGray-200">
                  <div className='relative w-48 h-32 md:w-40 md:h-20 lg:w-32 lg:h-24'>
                  <Image src={image.img} layout='fill' objectFit="contain" objectPosition="center" alt=''/>
                </div>
              </a>
              ))
            }
          </div>
       </div>
    </div>
  )
}

export default ReviewSection