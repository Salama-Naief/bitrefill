import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useTranslation} from "next-i18next";
import React, { useContext, useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import SmallLoader from '../components/loading/SmallLoader';

export default function Register() {
   const {t,i18n}= useTranslation();
  const router=useRouter();
  const {redirect}= router.query
  const {state,dispatch}=useContext(Store);
  const {darkMode}=state
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [code,setCode]=useState("");
  const [errMsg,setErrMsg]=useState('')
  const [loading,setLoading]=useState(false)
  const [agreeCheckbox,setAgreeCheckbox]=useState(false)
  const [newsletterCheckbox,setNewsletterCheckbox]=useState(false)
  const [codeCheckbox,setCodeCheckbox]=useState(false)
  

 // handle loin
  const handleSubmit=async(e)=>{
    dispatch({type:"ADD_USER",payload:{email}})
  }
  return (
   <Layout title="login">
      <div className={`${darkMode?"bg-dark-200 text-white":"bg-wite text-main"} py-8`}>
      <div className={` container mx-auto flex justify-center  px-4 font-sans`}  style={{direction:i18n.language==="ar"?"rtl":"ltr"}}>
         <div className={` bottom-0 right-0 w-full md:w-1/2 px-4 md:px-8`}>
               <div className="text-lg md:text-xl w-full text-center my-6 font-semibold capitalize">
                 <h1 className='py-4 text-lg font-semibod'>Create a Bitrefill account</h1>
                  <div className='text-sm text-customGray-200 px-2'>Get rewards on every purchase and much more!</div>
               </div>
               {errMsg&&<div className="text-error text-xl w-full text-center my-4 capitalize">{errMsg}</div>}
               <form className="" onSubmit={handleSubmit}>
               <div className='text-sm text-customGray-200 px-2 pb-1'>email</div>
               <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"}  focus:outline-none transition duration-200  px-6 py-2 w-full h-full rounded-lg mb-6`} placeholder={"example@example.com"}/>
                <div className='text-sm text-customGray-200 px-2 pb-1'>password</div>
               <input type="password" minLength={8} onChange={(e)=>setPassword(e.target.value)} value={password} required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"}  focus:outline-none transition duration-200  px-6 py-2 w-full h-full rounded-lg mb-2`} placeholder={t("common:password")}/>
               <div className='text-sm text-customGray-200 px-2 pb-1'>More than 8 characters with upper, lower and numbers</div>
               <div className='text-sm text-customGray-200 px-2 pt-4'>Confirm password</div>
               <input type="password" minLength={8} onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"}  focus:outline-none transition duration-200  px-6 py-2 w-full h-full rounded-lg mb-2`} placeholder={t("common:password")}/>
               
               <div className='my-2'>
                    <input type="checkbox" onChange={(e)=>setCodeCheckbox(e.target.checked)} className={`w-7 h-4 accent-secondary-100 my-3`}/><span className='mx-2  text-sm text-gray-500'>I have a referral code</span>
                    {codeCheckbox&&<input type="text" onChange={(e)=>setCode(e.target.value)} value={code} required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"}  focus:outline-none transition duration-200  px-6 py-2 w-full h-full rounded-lg my-2`} placeholder={"code"}/>}<br/>
                    <input type="checkbox" onChange={(e)=>setNewsletterCheckbox(e.target.checked)} className={`w-7 h-4 accent-secondary-100 my-3`}/><span className='mx-2  text-sm text-gray-500'>Add me to the newsletter to receive news about new products and features</span><br/>
                    <input type="checkbox" onChange={(e)=>setAgreeCheckbox(e.target.checked)} className={`w-7 h-4 accent-secondary-100 my-3`}/><span className='mx-2  indeterminate:bg-secondary-200 text-sm text-gray-500'>I have read and agree with the Bitrefill <Link href={"/"}><a className=" underline font-semibold">Terms & Conditions</a></Link>  and the <Link href={"/"}><a className=" font-semibold underline">Privacy Policy</a></Link> </span>
                 </div>
               <button type="submit" disabled={!agreeCheckbox} className={`transition duration-200 hover:bg-secondary-200 p-1 rounded-full mx-2 px-4 py-2 bg-secondary-100 text-white capitalize  lg:text-lg font-semibold w-full font-sans mt-4`}>{loading?<SmallLoader/>:t("common:register")}</button>

                
               </form>
               <div className=" my-4 text-center text-sm"><span>{t("common:don't_have_account")}</span><Link href='/login'><a><span className=" cursor-pointer mx-1 underline font-semibold">{t("common:login")}</span></a></Link></div>
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