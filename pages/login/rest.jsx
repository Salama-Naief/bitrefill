import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useTranslation} from "next-i18next";
import React, { useContext, useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';
import SmallLoader from '../../components/loading/SmallLoader';

export default function Rest() {
   const {t,i18n}= useTranslation();
  const router=useRouter();
  const {redirect}= router.query
  const {state,dispatch}=useContext(Store);
  const {darkMode}=state
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [errMsg,setErrMsg]=useState('')
  const [loading,setLoading]=useState(false)

 useEffect(()=>{
    if(state.user){
       router.push(redirect?redirect:"/")
    }
 },[state.user,redirect,router])

 // handle loin
  const handleSubmit=async(e)=>{
   e.preventDefault();
  }
  return (
   <Layout title="rest-password">
      <div  className={`${darkMode?"bg-dark-200 text-white":"bg-wite text-main"} py-8`}>
      <div className='bg-transparent container mx-auto flex justify-center px-4 font-sans'  style={{direction:i18n.language==="ar"?"rtl":"ltr"}}>
         <div className=" bottom-0 right-0 w-full md:w-1/2 px-4 md:px-8">
               <div className="text-lg md:text-xl w-full text-center my-6 font-semibold capitalize">
                 <h1 className='py-4'>Forgot your password?</h1>
                  <div className='text-sm text-customGray-200 px-2'>Fill out the form below to request a password reset</div>
               </div>
               {errMsg&&<div className="text-error text-xl w-full text-center my-4 capitalize">{errMsg}</div>}
               <form className="" onSubmit={handleSubmit}>
               <div className='text-sm text-customGray-200 px-2 pb-1'>Email</div>
               <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"}  focus:outline-none transition duration-200  px-6 py-2 w-full h-full rounded-lg mb-6`} placeholder={"Email"}/>      
               <button type="submit" disabled={loading} className={`transition duration-200 hover:bg-secondary-200 p-1 rounded-full mx-2 px-4 py-2 bg-secondary-100 text-white capitalize  lg:text-lg font-semibold w-full font-sans `}>{loading?<SmallLoader/>:"Rest Password"}</button>
               </form>
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

           ...(await serverSideTranslations(locale, ['common',"product"]))
         }
       }
   }catch(e){
      return {
         props: {
           ...(await serverSideTranslations(locale, ['common',"product"]))
         }
       }
   }
   
}