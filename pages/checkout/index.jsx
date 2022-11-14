import React, { useState } from 'react'
import { Store } from '../../utils/Store'
import {  MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import {  BsInfoCircle } from "react-icons/bs";
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Payments from '../../components/payment/Payments';

function Checkout() {
  const {state,dispatch}=useContext(Store)
  const router=useRouter()
  const {darkMode,cart,user}=state
  const {i18n}=useTranslation()

  const [email,setEmail]=useState("");
  const [agreeCheckbox,setAgreeCheckbox]=useState(false)
  const [newsletterCheckbox,setNewsletterCheckbox]=useState(false)
  const [loading,setLoading]=useState(false)
  

 // handle loin
  const handleSubmit=async(e)=>{
     e.preventDefault();
     dispatch({type:"ADD_USER",payload:{email:email}})
  }

  const handleBack=()=>{
     router.back()
  }
  return (
 
        <div className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"} font-sans`}>
           <div className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} py-2`}>
              <div className=' text-2xl font-sans font-bold container mx-auto'>
                <div className='flex items-center cursor-pointer'>
                  {i18n.language=="ar"?<MdArrowForwardIos className='text-3xl hover:bg-customGray-100 p-2 rounded-full mx-0.5' onClick={()=>handleBack()}/>:<MdArrowBackIosNew className='text-3xl hover:bg-customGray-100 p-2 rounded-full mx-0.5' onClick={()=>handleBack()}/>}
                  <Link href={"/"}><a>Bitrefill</a></Link>
                </div>
              </div>
           </div>
           <div className={` bg-inherit text-inherit container mx-auto md:p-8 `}>
              <div className={` lg:grid lg:grid-cols-2 md:gap-4 gap-2`}>
                 <div className={`rounded shadow m-4  ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
                    <div className='w-full p-4 md:p-8'>
                       <div className='text-xl font-semibold'>Order details </div>
                       <div className='py-4 '>
                        {
                          cart.cartItems.length>0?cart.cartItems.map((item,index)=>(
                            <div key={index} className='flex items-center justify-between my-4'>
                            <div className='flex items-center'>
                            <div className='relative w-16 h-12 mx-2 border'>
                               <Image src={item.img} layout='fill' objectFit='cover' objectPosition="center" alt=''/>
                            </div>
                             <div className='py-1'>
                                <div className={`${darkMode?"text-white":"text-main"} font-semibold text-sm `}>{item.title}</div>
                                <div className='text-customGray-200'>${item.price}</div>
                             </div>
                         </div>
                         <div className='text-customGray-200'>125AUD</div>
                        </div>
                          )):(
                            <div className='text-customGray-200 py-4'>Shpping Cart is empity</div>
                          )
                         
                        }
                       </div>
                        <div className='cursor-pointer font-semibold underline pb-4 w-fit'>Enter the code</div>
                        <hr/>
                        <div className='flex justify-between pt-4 '>
                           <div className='items-center text-sm flex relative group cursor-pointer'>
                            <span>Total Estimate</span>
                             <BsInfoCircle className='mx-2'/>
                              <div className='hidden group-hover:block text-xs bg-secondary-200 text-white absolute -top-10 left-28 w-44 p-3 rounded h-auto'>Due to price volatility of crypto currencies there may be a tiny difference between this estimated price and the actual price you will be expected to pay at the last step of the order process.</div>
                            </div>
                           <div>1562 AUD</div>
                        </div>
                    </div>
                 </div>
                 <div className={`rounded  shadow py-4 m-4 ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
                   {
                    !user?<form className="p-4" onSubmit={handleSubmit}>
                    <div className='text-sm text-customGray-200 px-2 pb-1'>Email address for order status updates</div>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"}  focus:outline-none transition duration-200  px-6 py-2 w-full h-full rounded-lg mb-6`} placeholder={"example@example.com"}/>
                    <div className='my-2'>
                        <input type="checkbox" onChange={(e)=>setNewsletterCheckbox(e.target.checked)} className={`w-7 h-4 accent-secondary-100 my-3`}/><span className='mx-2  text-sm text-gray-500'>Add me to the newsletter to receive news about new products and features</span><br/>
                        <input type="checkbox" required onChange={(e)=>setAgreeCheckbox(e.target.checked)} className={`w-7 h-4 accent-secondary-100 my-3`}/><span className='mx-2  indeterminate:bg-secondary-200 text-sm text-gray-500'>I have read and agree with the Bitrefill <Link href={"/"}><a className=" underline font-semibold">Terms & Conditions</a></Link>  and the <Link href={"/"}><a className=" font-semibold underline">Privacy Policy</a></Link> </span>
                      </div>
                    <button type="submit" disabled={!agreeCheckbox} className={`${agreeCheckbox?"bg-secondary-100":"bg-secondary-200"} transition duration-200 hover:bg-secondary-200 p-2 rounded-full mx-2 px-4  text-white capitalize font-semibold w-full font-sans mt-4`}>continue</button>  
                    </form>:
                    <div className='px-2'>
                      <div className= 'bg-gray-100 py-2 rounded text-center'>You can <Link href={"/login"}><a className='mx-1 text-customGray-200 font-bold '>Login</a></Link>or <Link href={"/register"}><a className=' font-bold mx-1 text-customGray-200'>Register</a></Link></div>
                      <Payments/>
                    </div>
                    }
                 </div>
              </div>
           </div>
        </div>

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

export default Checkout