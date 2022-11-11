import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { useTranslation } from 'next-i18next';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import  { Store } from '../utils/Store';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import HomeBanner from '../components/bannerSection/HomeBanner';
import InfoSection from '../components/infoSection/InfoSection';
import ReviewSection from '../components/reviewSection/ReviewSection';
import Collections from '../components/collectionSection/Collections';






 function Home({}) {
  
  const router =useRouter();
  const {state} =useContext(Store);
    const {darkMode}=state;
  const {pathname,query,asPath}=router;
  const {t,i18n}= useTranslation();
  
   useEffect(()=>{
    router.push({pathname,query},asPath,{locale:i18n.language})
  },[i18n.language])

 
  return (
    <Layout title="home page"  pages={[]} desc="home page" >
    <div className={`${darkMode?"bg-main text-white":"bg-white text-main"} `}>
      <HomeBanner/>
      <InfoSection/>
      <ReviewSection/>
      <Collections/>
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
export default Home;