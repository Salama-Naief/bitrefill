import { i18n } from 'next-i18next'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { cards } from "../../utils/dumycards";
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineClear } from 'react-icons/md';
import {  MdKeyboardArrowDown, MdArrowForwardIos } from "react-icons/md"

function FeaturesMenu({setFeaturedMenu}) {
  const {state} =useContext(Store);
    const {darkMode}=state;
    const [cardFeatures,setCardFeatures]=useState(false)
    const [cardCategory,setCardCategory]=useState(false)
    const [card,setCard]=useState(false)
    const [mobile,setMobile]=useState(false)
    const [cardPopular,setCardPopular]=useState(false)
    const [mobileFeatures,setmobileFeatures]=useState(false)
    const [mobileCategory,setmobileCategory]=useState(false)
    const [mobilePopular,setmobilePopular]=useState(false)
    const [mobileTrend,setmobileTrend]=useState(false)

    const cardFeaturesLinks=["All gift cards","Popular","Recently Added","Rewards"]
   const cardPopularLinks=["Uber","Etisalat","Vodafone","PUBG Mobile UC","Orange","Noon.com"]
   const phonePopularLinks=["Etisalat","Vodafone","Orange","Orange (Mobinil)"]
   const phoneCategoryLinks=["Prepaid phones","Phone Codes"]
   const phoneFeaturesLinks=["Refills"]
   const phoneTrendingLinks=[
    {name:"Etisalat",img:"https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_151%2Cw_250/v1585414749/etisalat.jpg"},
    {name:"Vodafone Refill",img:"https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1556099168/vodafone.jpg"}
  ]

console.log("cardFeatures",cardFeatures)
  const handleMenus=(type)=>{

      if (type==="cardFeatures"){
        console.log("type  ggg",type)
        setCardFeatures(true)
        setCardCategory(false)
        setCardPopular(false)
        setmobileFeatures(false)
        setmobileCategory(false)
        setmobilePopular(false)
        setmobileTrend(false)
      }else if (type==="cardCategory"){
        console.log("type ddd",type)
        setCardFeatures(false)
        setCardCategory(true)
        setCardPopular(false)
        setmobileFeatures(false)
        setmobileCategory(false)
        setmobilePopular(false)
        setmobileTrend(false)
      }else if (type==="cardPopular"){
        console.log("type pppp",type)
        setCardFeatures(false)
        setCardCategory(false)
        setCardPopular(true)
        setmobileFeatures(false)
        setmobileCategory(false)
        setmobilePopular(false)
        setmobileTrend(false)
      }else if (type==="mobileFeatures"){
        setCardFeatures(false)
        setCardCategory(false)
        setCardPopular(false)
        setmobileFeatures(true)
        setmobileCategory(false)
        setmobilePopular(false)
        setmobileTrend(false)
      }else if (type==="mobileCategory"){
        setCardFeatures(false)
        setCardCategory(false)
        setCardPopular(false)
        setmobileFeatures(false)
        setmobileCategory(true)
        setmobilePopular(false)
        setmobileTrend(false)
      }else if (type==="mobilePopular"){
        setCardFeatures(false)
        setCardCategory(false)
        setCardPopular(false)
        setmobileFeatures(false)
        setmobileCategory(false)
        setmobilePopular(true)
        setmobileTrend(false)
      }else if (type==="mobileTrend"){
        setCardFeatures(false)
        setCardCategory(false)
        setCardPopular(false)
        setmobileFeatures(false)
        setmobileCategory(false)
        setmobilePopular(false)
        setmobileTrend(true)
      }else{
        setCardFeatures(false)
        setCardCategory(false)
        setCardPopular(false)
        setmobileFeatures(false)
        setmobileCategory(false)
        setmobilePopular(false)
        setmobileTrend(false)
      }
    
  }
  return (
    <motion.div initial={{x:-500}} animate={{x:0}} transition={{duration:0.5,type:"just"}} className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} w-2/3 px-4 z-20 h-screen overflow-y-scroll overflow-x-hidden fixed top-0 py-8 md:hidden ${i18n.language==="ar"?"right-0":"left-0"}`}>
      <div className={`absolute ${i18n.language==="ar"?"left-2":"right-2"} top-2 cursor-pointer`} onClick={()=>setFeaturedMenu(false)}><MdOutlineClear className="text-3xl"/></div>
    <div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} transition duration-200 w-full`}>
      <div className="transition  duration-200 hover:text-secondary-100 ">
      <div className="flex justify-between items-center">
       <div onClick={()=>{setCard(!card); setMobile(false)}} className={` hover:underline text-xl  mx-3 font-semibold cursor-pointer `}>Gift Cards</div>  
        {   card?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
      </div>
      <div  className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} transition duration-200 w-full`}>
           {<motion.div initial={{display:"none"}} animate={card?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className="container mx-auto  px-4">
           <div className="flex justify-between items-center">
              <div onClick={()=>{handleMenus("cardFeatures");setCardFeatures(!cardFeatures)}} className="text-sm font-semibold py-1">Featured</div>
              {   cardFeatures?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
            </div>
              { <motion.div initial={{display:"none"}} animate={cardFeatures?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className="px-4">
                  <div className="text-lg font-semibold font-sans">
                    {
                      cardFeaturesLinks.map((link,index)=>(
                        <div key={index} className="py-1 hover:underline">
                          <Link href={"/"} passHref>
                            <a>{link}</a>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>}
                <div className="flex justify-between items-center">
                  <div onClick={()=>{handleMenus("cardCategory");setCardCategory(!cardCategory)}} className="text-sm font-semibold py-1">Categories</div>
                 {   cardCategory?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
                </div>
               {<motion.div initial={{display:"none"}} animate={cardCategory?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className=" px-4">
                  <div className="text-sm font-sans">
                    {
                      cards.map((card,index)=>(
                        <div key={card.id} className="py-1 hover:underline w-1/3">
                          <Link href={"/"} passHref>
                            <a>{card.category}</a>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>}
                <div className="flex justify-between items-center">
                  <div onClick={()=>{handleMenus("cardPopular");setCardPopular(!cardPopular)}} className="text-sm font-semibold py-1">Popular in Egypt</div>
                 {   cardPopular?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
                </div>
                {<motion.div initial={{display:"none"}} animate={cardPopular?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className=" px-4">
                  <div className="text-sm font-sans">
                    {
                      cardPopularLinks.map((link,index)=>(
                        <div key={index} className="py-1 hover:underline">
                          <Link href={"/"} passHref>
                            <a>{link}</a>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>}
           </motion.div>}
        </div>
    </div>  
    <div  className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} `}>
      <div className="flex justify-between items-center">
        <div onClick={()=>{setCard(false); setMobile(!mobile)}} className={ ` hover:underline text-xl mx-3 font-semibold cursor-pointer transition duration-200 hover:text-secondary-100 py-2`}>Phone Refills</div>
       {   mobile?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
      </div>
       {<motion.div initial={{display:"none"}} animate={mobile?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className={`w-full px-4`}>
           <div className="container mx-auto">
           <div className="flex justify-between items-center">
              <div onClick={()=>{handleMenus("mobileFeatures");setmobileFeatures(!mobileFeatures)}} className="text-sm font-semibold py-1">Featured</div>
             {   mobileFeatures?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
            </div>
           { <motion.div initial={{display:"none"}} animate={mobileFeatures?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className=" px-4">
                  <div className="text-lg font-semibold font-sans">
                    {
                      phoneFeaturesLinks.map((link,index)=>(
                        <div key={index} className="py-1 hover:underline">
                          <Link href={"/"} passHref>
                            <a>{link}</a>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>}
                <div className="flex justify-between items-center">
                  <div onClick={()=>{handleMenus("mobileCategory");setmobileCategory(!mobileCategory)}} className="text-sm font-semibold py-1">Categories</div>
                 {   mobileCategory?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
                </div>
               {<motion.div initial={{display:"none"}} animate={mobileCategory?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className=" px-4">
                  <div className="text-sm font-sans">
                    {
                      phoneCategoryLinks.map((link,index)=>(
                        <div key={index} className="py-1 hover:underline w-1/3">
                          <Link href={"/"} passHref>
                            <a>{link}</a>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>}
                <div className="flex justify-between items-center">
                  <div onClick={()=>{handleMenus("mobilePopular");setmobilePopular(!mobilePopular)}} className="text-sm font-semibold py-1">Popular in Egypt</div>
                 {   mobilePopular?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
                </div>
            { <motion.div initial={{display:"none"}} animate={mobilePopular?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className="px-4">
                  <div className="text-sm font-sans">
                    {
                      phonePopularLinks.map((link,index)=>(
                        <div key={index} className="py-1 hover:underline">
                          <Link href={"/"} passHref>
                            <a>{link}</a>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>}
                <div className="flex justify-between items-center">
                  <div onClick={()=>{handleMenus("mobileTrend");setmobileTrend(!mobileTrend)}} className="text-sm font-semibold py-1">Trending</div>
                 {   mobileTrend?<MdKeyboardArrowDown className='text-3xl mx-4'/>:<MdArrowForwardIos className='mx-4'/>}
                </div>
            {
              <motion.div initial={{display:"none"}} animate={mobileTrend?{display:"block"}:{display:"none"}} transition={{duration:0.5}} className="">
                  <div className="text-sm font-sans">
                    {
                      phoneTrendingLinks.map((link,index)=>(
                        <div key={index} className="py-1 hover:underline mx-4">
                          <div className="relative w-24 h-24">
                            <Image src={link.img} layout="fill" objectFit="contain" objectPosition="center" alt=""/>
                          </div>
                          <Link href={"/"} passHref>
                            <a>{link.name}</a>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>}
           </div>
        </motion.div>} 
    </div>
    </div>
     

  </motion.div>
  )
}

export default FeaturesMenu