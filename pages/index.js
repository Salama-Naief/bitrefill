import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { useTranslation } from 'next-i18next';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';
import Policies from '../components/utils/Policies';
import BannerSection from '../components/bannerSection/BannerSection';
import DetailsSection from '../components/detailsSection/DetailsSection';





 function Home({}) {
  
  const router =useRouter();
  const {pathname,query,asPath}=router;
  const {t,i18n}= useTranslation();
 const [darkMode]=useState(false)

 
  
   useEffect(()=>{
    router.push({pathname,query},asPath,{locale:i18n.language})
  },[i18n.language])


  //error
  if(false){
    return(
      <Layout  title="error page">
        <div className='text-3xl w-full h-screen flex justify-center items-center text-secondary'><div>error in back end connection</div></div>  
    </Layout>
    )
  }

  
 
  return (
    <Layout title="home page"  pages={[]} desc="home page" >
    <div className={`${darkMode?"bg-main text-white":"bg-white text-main"} h-screen`}>
      <BannerSection/>
      <DetailsSection/>
    </div>
    </Layout>
  )
}


export default Home;