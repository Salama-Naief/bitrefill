import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Layout from "../components/layout/Layout"
import CardItems from '../components/cards/CardItems';
import { Store } from '../utils/Store';
import Link from 'next/link';
import SearchInput from '../components/search/SearchInput';
import { cards } from '../utils/dumycards';
import DetailsSection from '../components/infoSection/DetailsSection';
import SecurityInfoSection from '../components/infoSection/SecurityInfoSecton';
function Refill() {
    const {state} =useContext(Store);
    const {darkMode}=state
    const [cardsItems,setCardsItems]=useState([])

    useEffect(()=>{  
        const items=cards.filter(card=>card.category.toLocaleLowerCase()==="phone codes"||card.category.toLocaleLowerCase()==="prepaid phones")
        setCardsItems(items)
         
     },[])
  return (
    <Layout title={"refill"}>
        <div  className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} `}>
            <div className=' w-full h-72 bg-main text-white'>
                <div className='container h-full mx-auto flex items-center justify-center  relative'>
                    <div className='w-full px-4 md:w-2/3  shadow rounded'>
                        <h1 className='font-bold  text-xl lg:text-3xl'>Top up prepaid mobile phones with Bitcoin and other cryptocurrencies from anywhere in the world</h1>
                        <div className='absolute -bottom-5 w-full z-10 flex justify-center left-0 right-0 px-4'>
                            <div className='w-full md:w-1/2 flex items-center bg-white text-main'>
                            <select name="" id=""  className='flex-grow-0 text-center w-fit px-4 md:py-4 focus:outline-none  border-none   bg-inherit text-inherit'>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                            </select>
                            <input type="text" required className={` h-fit ${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"} flex-grow focus:outline-none transition duration-200  md:px-6 md:py-4 py-3`} placeholder="01025648"/>
                            <button  className={`whitespace-nowrap flex-grow-0 transition duration-200 active:scale-90 hover:bg-secondary-200  bg-secondary-100 text-white h-fit text-sm md:text-lg font-semibold px-4 py-4 font-sans `}>Sign Up</button>
                            </div>                           
                        </div>
                    </div>
                </div>
             </div>
             <div className='container mx-auto px-4 py-16'>
                <div className='flex justify-between'>
                    <div className='w-1/2 text-lg font-bold'>Popular Phone Refill products in Egypt</div>
                    <div className='w-1/2 md:w-1/3'>
                    <SearchInput />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 md:gap-4 lg:gap-6 py-12'>
                   {
                    cardsItems.map(card=>(
                      <div key={card.id}>
                        <CardItems card={card}/>
                      </div>
                    ))
                   }
                </div>
                <div className='py-8 flex justify-center '>
                  <div className='px-4 md:w-1/2'>
                  <div className='text-customGray-200 font-sans my-4 text-center font-bold'>Refill your airtime with Bitcoin, Ethereum, Litecoin, Dash, Dogecoin, or Lightning!</div>
                  <div className='w-full h-24 relative'> 
                     <Image src={"https://www.bitrefill.com/content/cn/v23/images%2Fcoins.svg"} layout='fill' objectFit='contain' objectPosition="center" alt=''/>
                  </div> 
                  </div>
                </div>
                <DetailsSection/>
                <SecurityInfoSection/>
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
export default Refill