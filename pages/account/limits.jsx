import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Store } from '../../utils/Store';
import Link from 'next/link';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import SearchInput from '../../components/search/SearchInput';
import {BsInfoCircle} from "react-icons/bs"
import MenuList from '../../components/menus/MenuList';


function Limits() {
  const router=useRouter()
  const {query}=router
  const {state} =useContext(Store);
  const {darkMode}=state;
  const [usedProductd,setUsedProductd]=useState(false)


  return (
    <Layout title={`account-order`}>
        <div className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"}`}>
          <div className='container mx-auto p-4 md:p-8'>
            <div className='md:grid md:grid-cols-4 gap-2'>
               <div className={`col-span-1 py-1 rounded font-sans shadow ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
                  <MenuList type={"limits"}/>
               </div>
               <div className={`col-span-3 rounded lg:px-6 px-4 py-4 ${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"}`}>
                 <div className='pb-4 md:px-4 flex justify-between'>
                  <span className='text-2xl font-bold'>Limits</span>
                 </div>

                    <div className='my-4'>
                        <div className='font-semibold my-1'>Basic account</div>
                        <div className='text-sm text-customGray-200 my-1'>Increase your limits by verifying your identity.</div>
                        <div className='underline my-1'>Verify ID</div>
                    </div>

                    <div className='my-4'>
                        <div className='font-semibold my-1'>Orders</div>
                        <div className={` flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div>15 per day</div>
                            <div className='w-1/4 text-right'>
                                <div>15.00 remaining</div>
                                 <div className='bg-customGray-200 h-1.5 mt-1 w-full rounded-full'></div>
                            </div>
                        </div>
                    </div>

                    <div className='my-4'>
                        <div className='font-semibold my-1'>Purchase amount</div>
                        <div className={` flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div>$5000.00 per day</div>
                            <div className='w-1/4 text-right'>
                                <div>$5000.00 remaining</div>
                                 <div className='bg-customGray-200 h-1.5 mt-1 w-full rounded-full'></div>
                            </div>
                        </div>
                        <hr/>
                        <div className={` flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div>$10000.00 per month</div>
                            <div className='w-1/4 text-right'>
                                <div>$10000.00 remaining</div>
                                 <div className='bg-customGray-200 h-1.5 mt-1 w-full rounded-full'></div>
                            </div>
                        </div>
                    </div>

                    <div className='my-4'>
                        <div className='font-semibold my-1'>Phone topups</div>
                        <div className='text-sm text-customGray-200 my-2'>Phone topups are included in the Purchase amount limits above</div>
                        <div className={` flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div>$500.00 per day</div>
                            <div className='w-1/4 text-right'>
                                <div>$500.00 remaining</div>
                                 <div className='bg-customGray-200 h-1.5 mt-1 w-full rounded-full'></div>
                            </div>
                        </div>
                        <hr/>
                        <div className={` flex justify-between shadow p-4 rounded ${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>
                            <div>$2000.00 per month</div>
                            <div className='w-1/4 text-right'>
                                <div>$2000.00 remaining</div>
                                 <div className='bg-customGray-200 h-1.5 mt-1 w-full rounded-full'></div>
                            </div>
                        </div>
                        <div className='text-sm text-customGray-200 my-2'>Different exceptional thresholds may apply to certain Products.</div>
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

export default Limits