import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react'
import { useContext } from 'react';
import Layout from "../components/layout/Layout"
import ReviewStars from '../components/reviewSection/ReviewStars';
import { reviews } from '../utils/dumyData';
import { Store } from '../utils/Store';
import {FaTwitter} from "react-icons/fa"
import Link from 'next/link';
function Reviews() {
    const {state} =useContext(Store);
    const {darkMode}=state
  return (
    <Layout title={"reviews"}>
        <div  className={`${darkMode?"bg-main text-white":"bg-white text-main"} `}>
             <div className='container mx-auto'>
                 <h1 className='text-center py-14 text-3xl font-bold'>Bitrefill Reviews</h1>
                 <div className='py-8 text-center flex justify-center'>
                    <div className=' border rounded w-fit p-8'>
                    <div className='text-sm text-customGray-200 text-center font-bold'>We are rated 4.9 out of 5</div>
                     <div className=''>
                        <ReviewStars  size="text-2xl md:text-3xl" postion="text-center flex w-full justify-center"/>
                     </div>
                    </div>
                   
                 </div>
                 <div className='flex flex-wrap '> 
                   {
                    reviews.map((review,index)=>
                      <div key={index} className='w-full md:w-1/2 lg:w-1/4 p-2'>
                        <div className='p-4 border'>
                            <div className='flex justify-between'>
                            <div className='flex'>
                                <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                                    <Image src={review.img} layout="fill" objectFit='cover' objectPosition="center" alt={review.name}/>
                                </div>
                                <div className='px-2'>
                                    <div>@{review.name}</div>
                                    <div className='text-customGray-200'>1/12/2022</div>
                                </div>
                            </div>
                            <FaTwitter className="text-blue-500 text-2xl"/>
                        </div>
                        <div className='py-4'>{review.message}</div>
                        </div>
                        
                      </div>
                    )
                   }
                 </div>
                 <div className='text-center py-6 md:py-8'>
                    <hr/>
                    <div className="p-4">
                        <div className='md:grid md:grid-cols-2'>
                            <div className='my-4'>
                                <span className='md:text-2xl text-customGray-200'> Get the latest Bitrefill & Bitcoin News delivered straight into your inbox</span>
                                <Link href={"/"}><a className='underline mx-4'>About our Newsletter</a></Link>
                            </div>
                            <div className='flex items-center my-4'>
                            <input type="email" required className={`h-fit ${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"} flex-grow focus:outline-none transition duration-200  px-6 py-2  rounded-lg `} placeholder="example@example.com"/>
                            <button  className={`flex-grow-0 transition duration-200 active:scale-90 hover:bg-secondary-200 rounded-full mx-2 bg-secondary-100 text-white h-fit lg:text-lg font-semibold px-4 py-2 font-sans `}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    </Layout>
  )
}


export async function getStaticProps({locale}) {
  
    try{
     
          return {
            props: {
              errMsg:false,
              ...(await serverSideTranslations(locale, ['common']))
            }
          }
    }catch(err){
      return {
        props: {
          errMsg:true,
          ...(await serverSideTranslations(locale, ['common']))
        }
    }  }
   
  }
export default Reviews