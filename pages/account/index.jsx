import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Store } from '../../utils/Store';
import Link from 'next/link';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {BsCurrencyDollar, BsCurrencyEuro,BsCurrencyBitcoin, BsInfoCircle} from "react-icons/bs"
import MenuList from '../../components/menus/MenuList';

function Index() {
  const router=useRouter()
  const {query}=router
  const {state} =useContext(Store);
    const {darkMode}=state;



    

 

  return (
    <Layout title={`cards`}>
        <div className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"}`}>
          <div className='container mx-auto p-4 md:p-8'>
            <div className='md:grid md:grid-cols-4 gap-2'>
               <div className={`col-span-1 py-1 rounded font-sans shadow ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
              
                <MenuList type={"account"}/>   
               </div>
               <div className={`col-span-3 rounded my-8 md:my-0 md:p-4 ${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"}`}>
                 <div className='pb-4 px-4 flex'>
                 <div className='items-center text-sm flex relative group cursor-pointer'>
                  <span className='text-2xl font-bold'>Balances</span>
                    <BsInfoCircle className='mx-2 text-xl'/>
                    <div className='hidden group-hover:block text-xs bg-secondary-200 text-white absolute -top-10 left-28 w-44 p-3 rounded h-auto'>Due to price volatility of crypto currencies there may be a tiny difference between this estimated price and the actual price you will be expected to pay at the last step of the order process.</div>
                  </div>
                  <div className={`mx-4 px-4 bg-secondary-100 hover:bg-secondary-200 text-sm font-semibold text-white rounded-full py-2`}>
                    <Link href={"/account/topup"}>
                        <a >Add Funds</a>
                    </Link>
                </div>
                 </div>
                <div className='md:grid md:grid-cols-3 gap-2'>
                   <div className='my-4 md:my-0 shadow hover:shadow-lg cursor-pointer flex justify-between p-4 bg-white rounded'>
                   <div>
                    <div className='text-center w-fit rounded-full p-1 text-green-600 bg-green-200'>
                          <BsCurrencyDollar className='text-2xl'/>
                      </div>
                      <div className='mx-1 font-bold my-4 text-green-600'>UAD</div>
                      <div>$ 0</div>
                   </div>
                     <div className='font-semibold' style={{opacity:0.4}}>Primary</div>
                   </div>

                   <div className='my-4 md:my-0 shadow flex justify-between p-4 bg-white rounded' style={{opacity:0.5}}>
                   <div>
                    <div className='text-center w-fit rounded-full p-1 text-yellow-600 bg-yellow-300'>
                          <BsCurrencyBitcoin className='text-2xl'/>
                      </div>
                      <div className='mx-1 font-bold my-4 text-yellow-600'>Bitcoin</div>
                      <div>$ 0</div>
                   </div>
                     <div className='font-semibold' style={{opacity:0.4}}>Make Primary</div>
                   </div>

                   <div className='my-4 md:my-0 shadow flex justify-between p-4 bg-white rounded' style={{opacity:0.5}}>
                   <div>
                    <div className='text-center w-fit rounded-full p-1 text-blue-600 bg-blue-300'>
                          <BsCurrencyEuro className='text-2xl'/>
                      </div>
                      <div className='mx-1 font-bold my-4 text-blue-600'>Euro</div>
                      <div>$ 0</div>
                   </div>
                     <div className='font-semibold' style={{opacity:0.4}}>Make Primary</div>
                   </div>

                </div>

                <div className='py-8'>
                   <div className='text-2xl font-bold'> History</div>
                   <p className='my-4 text-customGray-200'>You have no balance history. <Link href="#" passHref><a className='underline text-main'>Add funds </a></Link> to order instantly next time</p>
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

export default Index