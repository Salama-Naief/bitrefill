import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Store } from '../../utils/Store';
import Link from 'next/link';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { MdKeyboardArrowDown, MdKeyboardArrowUp,MdOutlinePersonOutline } from "react-icons/md"
import {BsCurrencyBitcoin, BsCurrencyDollar, BsCurrencyEuro, BsExclamationTriangle} from "react-icons/bs"
import { useTranslation } from 'next-i18next';
import MenuList from '../../components/menus/MenuList';


function Settings() {
  const router=useRouter()
  const {query}=router
  const {state,dispatch} =useContext(Store);
  const {darkMode}=state;
  const [usedProductd,setUsedProductd]=useState(false)
  const {i18n} =useTranslation()
  const [currency,setCurrency]=useState("UAD")
  const [priceMenu,setPriceMenu]=useState(false)
  const handleChangeTheme=(e)=>{
    dispatch({type:"DARK_MODE",payload:e.target.value==="dark"?true:false})
  }
  return (
    <Layout title={`account-settings`}>
        <div className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"}`}>
          <div className='container mx-auto p-4 md:p-8'>
            <div className='md:grid md:grid-cols-4 gap-2'>
               <div className={`col-span-1 py-1 rounded font-sans shadow ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
                  <MenuList type={"settings"}/>
               </div>
               <div className={`col-span-3 rounded lg:px-6 px-4 py-4 ${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"}`}>
                 <div className='pb-4 md:px-4 flex justify-between'>
                  <span className='text-2xl font-bold'>Settings</span>
                 </div>

                    <div className='my-6'>
                        <div className='font-semibold my-1'>Account</div>
                        <div className={`  shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div className='flex justify-between my-6'>
                                <div className='text-sm text-customGray-200'>Email</div>
                                <div className='font-bold text-sm'>{state.user?state.user.email:"example@example.com"}</div>
                            </div>
                            <div className='flex justify-between my-6'>
                                <div className='text-sm text-customGray-200'>Password</div>
                                <div className='font-bold text-sm'><Link href={"/rest-passwoed"}><a className='underline'>Change Passwoed</a></Link></div>
                            </div>
                            <div className='flex justify-between my-6'>
                                <div className='text-sm text-customGray-200'>Identity Verification</div>
                                <div className='font-bold text-sm'><Link href={"/rest-passwoed"}><a className='underline'>Verify ID</a></Link></div>
                            </div>
                            <div className='flex justify-between my-6 items-center'>
                                <div className='text-sm text-customGray-200'>Lightning Address</div>
                                <div  className={`rounded flex items-center px-4 font-bold text-sm ${darkMode?"border border-customGray-200 focus-within:border-secondary-100":"focus-within:border-main border border-customGray-100"}`}>
                                   <input type="email" className='w-16 md:w-32 appearance-none focus:ring-0 outline-none py-3 text-inherit bg-inherit'/>
                                   <div className='font-semiboold md:text-lg'>@bitrefill.me</div>
                                </div>
                            </div>
                            <div className=''>
                                <div onClick={()=>setUsedProductd(!usedProductd)} className='py-2 px-6 cursor-pointer border-customGray-200 border w-fit rounded'>
                                    <div className='flex items-center'>
                                <div className='font-semibold '>Used Products</div>
                                    {
                                        usedProductd?<MdKeyboardArrowUp className='text-3xl mx-2'/>: <MdKeyboardArrowDown className='text-3xl mx-2'/>
                                    }
                                </div>
                                {usedProductd&&<div className='text-customGray-200 text-sm py-8'>
                                    Your Lightning address can be used to easily top up your Bitrefill balance. The Lightning address never changes so you can simply reuse it to send bitcoin and it will instantly show up in your Bitrefill balance. It is also safe to give it to someone else to send you a tip that arrives in your Bitrefill account.
                                    <br/>
                                    Learn more here
                                    Note: Your Lightning Address can not be changed at a later date so choose wisely.

                                    Do not try to send funds from Coinbase to your Lightning address since they do not support it yet.
                                    </div>}
                                </div>
                    </div>

                      <div className={`${i18n.language==="ar"?"text-left":"text-right"} my-6`}>
                         <button className='bg-secondary-100 hover:bg-secondary-200 transition duration-200 active:scale-90 px-4 py-2 rounded-full text-white'>Save</button>
                      </div>
                        </div>
                    </div>

                    <div className='my-6'>
                        <div className='font-semibold my-1'>Purchase amount</div>
                        <div className={` shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div className='flex justify-between my-6'>
                                <div className="text-sm text-customGray-200">theme</div>
                                <div className=''>
                                <select name="" id="" value={darkMode?"dark":"light"} onChange={(e)=>handleChangeTheme(e)} className='px-6 py-1 focus:outline-none rounded-full border-none  appearance-none ring-2 ring-customGray-100  bg-inherit text-inherit'>
                                    <option value="dark" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>dark</option>
                                    <option value="light" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>light</option>
                                </select>
                                </div>
                            </div>
                            <div className='flex justify-between my-6'>
                                <div className="text-sm text-customGray-200">Display Currency</div>
                                <div className='relative'>
                                  <div onClick={()=>setPriceMenu(!priceMenu)} className='cursor-pointer flex items-center p-4 py-2 rounded-full border '>
                                     <span>{currency}</span>
                                     {
                                        priceMenu?<MdKeyboardArrowUp className='text-2xl mx-2'/>: <MdKeyboardArrowDown className='text-2xl mx-2'/>
                                    }
                                  </div>
                                {priceMenu&&<motion.ul initial={{scale:0}} animate={{scale:1}} className={`${darkMode?"bg-dark-200":"bg-customGray-100"}  rounded-md absolute h-60 overflow-y-auto overflow-x-hidden z-10 top-10 right-0 border py-2 px-4`}>
                                
                                       <li onClick={()=>{setCurrency("USD"); setPriceMenu(false)}} className='flex my-4 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-green-500'>
                                           <BsCurrencyDollar/>
                                       </div>
                                        <span className='mx-1 text-xs'>USD</span>
                                      </li>
                                      <li onClick={()=>{setCurrency("UAD"); setPriceMenu(false)}} className='flex my-4 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-slate-500'>
                                           <BsCurrencyDollar/>
                                       </div>
                                        <span className='mx-1 text-xs'>UAD</span>
                                      </li>
                                      <li onClick={()=>{setCurrency("CAD"); setPriceMenu(false)}} className='flex my-4 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-orange-500'>
                                           <BsCurrencyDollar/>
                                       </div>
                                        <span className='mx-1 text-xs'>CAD</span>
                                      </li>
                                      <li onClick={()=>{setCurrency("Euro"); setPriceMenu(false)}} className='flex my-4 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-cyan-600'>
                                           <BsCurrencyEuro/>
                                       </div>
                                        <span className='mx-1 text-xs'>Euro</span>
                                      </li>
                                      <li onClick={()=>{setCurrency("bitcion"); setPriceMenu(false)}} className='flex my-4 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-yellow-300'>
                                           <BsCurrencyBitcoin/>
                                       </div>
                                        <span className='mx-1 text-xs'>bitcion</span>
                                      </li>
                                   
                                </motion.ul>}
                                </div>
                            </div>
                            <div className='flex justify-between my-6'>
                                <div className="text-sm text-customGray-200">Display Currency</div>
                                <div className=''>
                                <select name="" id="" value={i18n.language} onChange={(e)=>i18n.changeLanguage(e.target.value)} className='px-6 py-1 focus:outline-none rounded-full border-none  appearance-none ring-2 ring-customGray-100  bg-inherit text-inherit'>
                                    <option value="ar" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>Arabic</option>
                                    <option value="en" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>English</option>
                                </select>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className='my-4'>
                        <div className='font-semibold my-1'>Security</div>
                        <div className={` flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div className='flex items-center'>
                              <BsExclamationTriangle className='text-xl text-yellow-400'/>
                              <div className='font-bold mx-4'>Your email has not been verified</div>
                            </div>
                            <button className='bg-secondary-100 hover:bg-secondary-200 transition duration-200 active:scale-90 px-4 py-2 rounded-full text-white'>Send Link</button>
                        </div>
                    </div>

                    <div className='my-4'>
                        <div className={`items-center flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div className='flex items-center'>
                              <BsExclamationTriangle className='text-xl text-orange-600'/>
                              <div className='font-bold mx-4'>
                                <div>You are not secured by two-factor authentication</div>
                                <div className='text-customGray-200 text-xs my-2'>Verify your email before enabling</div>
                              </div>
                            </div>
                            <button disabled className='opacity-50 h-fit bg-secondary-100 hover:bg-secondary-200 transition duration-200 active:scale-90 px-4 py-2 rounded-full text-white'>Enable</button>
                        </div>
                    </div>

                    <div className='my-4'>
                        <div className='font-semibold my-1'>Account Deletion</div>
                        <div className={` flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div className='flex items-center'>
                              <MdOutlinePersonOutline className='text-3xl text-secondary-100'/>
                              <div className='font-bold mx-4'>Delete my Bitrefill account</div>
                            </div>
                            <button className='bg-secondary-100 hover:bg-secondary-200 transition duration-200 active:scale-90 px-4 py-2 rounded-full text-white'>Delete</button>
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
            ...(await serverSideTranslations(locale, ['common']))
          }
        }
  }catch(err){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common']))
      }
  }  }
 
}

export default Settings