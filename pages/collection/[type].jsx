import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { useTranslation } from 'next-i18next';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import  { Store } from '../../utils/Store';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import CollectioBanner from '../../components/bannerSection/ColectionBanner';
import InfoSection from '../../components/infoSection/InfoSection';
import ReviewSection from '../../components/reviewSection/ReviewSection';
import Collections from '../../components/collectionSection/Collections';
import {collections} from "../../utils/dumyData"
import Link from 'next/link';





 function Collection({}) {
  
  const router =useRouter();
  const {state} =useContext(Store);
    const {darkMode}=state;
  const {pathname,query,asPath}=router;
  const {t,i18n}= useTranslation();
  const collection=collections.find(c=>c.title.toLocaleLowerCase()===router.query.type.toLocaleLowerCase())
   useEffect(()=>{
    router.push({pathname,query},asPath,{locale:i18n.language})
  },[i18n.language])

 
  return (
    <Layout title="home page"  pages={[]} desc="home page" >
    <div className={`${darkMode?"bg-main text-white":"bg-white text-main"} `}>
      <CollectioBanner collection={collection}/>
      <InfoSection collectionColor={collection.color}/>
      <hr/>
       <div className='flex text-center items-center justify-center w-full h-72' style={{backgroundColor:collection.color}}>
        <div>
          <h1 className='font-bold text-2xl md:text-3xl my-4 text-white'>Over 5,000 Products</h1>
       <div className='my-6 w-full'>
          <Link href={`/cards/top-products`}>
            <a className='w-full px-32  rounded-full text-center py-3 active:scale-90 transition duration-200 ease-in-out bg-white text-main hover:bg-customGray-100 font-bold capitalize' style={{color:collection.color}}>Browse More</a>
        </Link>
        </div>
        </div>
       
       </div>
      <ReviewSection/>
      <Collections type={router.query.type?router.query.type:""}/>
    </div>
    </Layout>
  )
}



export async function getStaticPaths({locales}){
  const paths=[]
  collections.map(collection=>{
     locales.map(locale=>{
        paths.push({params:{type:collection.title},locale})
     })
  })

  return {
      paths,
      fallback: false
  }
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
export default Collection