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


function Orders() {
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
                  <MenuList type={"order"}/>  
               </div>
               <div className={`col-span-3 rounded md:px-6 py-4 ${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"}`}>
                 <div className='pb-4 px-4 flex justify-between'>
                 <div className='items-center text-sm flex relative group cursor-pointer'>
                  <span className='text-xl lg:text-2xl font-bold'>My Products</span>
                    <BsInfoCircle className='mx-2 text-xl'/>
                    <div className='hidden group-hover:block text-xs bg-secondary-200 text-white absolute -top-10 left-48 w-44 p-3 rounded h-auto'>Due to price volatility of crypto currencies there may be a tiny difference between this estimated price and the actual price you will be expected to pay at the last step of the order process.</div>
                  </div>
                   <div className='w-fit'>
                      <SearchInput bgWhite={true}/>
                   </div>
                 </div>

                  <div className='flex justify-center items-center py-16'>
                    <div>
                        <div>You have no unused products</div>
                        <div className={`m-4 text-center px-4 bg-secondary-100 hover:bg-secondary-200 text-sm font-semibold text-white rounded-full py-3`}>
                            <Link href={"/cards/top-products"}>
                                <a  className='text-center'>Browse products</a>
                            </Link>
                        </div>
                    </div>
                   
                  </div>
                    <div className=''>
                        <div onClick={()=>setUsedProductd(!usedProductd)} className='flex items-center cursor-pointer'>
                            <div className='text-xl font-bold'>Used Products</div>
                             {
                                usedProductd?<MdKeyboardArrowDown className='text-3xl mx-2'/>: <MdKeyboardArrowUp className='text-3xl mx-2'/>
                             }
                        </div>
                        {usedProductd&&<div className='flex items-center justify-center p-8'>You have no products marked as used</div>}
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

export default Orders