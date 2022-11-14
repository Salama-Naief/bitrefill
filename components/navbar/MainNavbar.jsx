import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {motion} from "framer-motion"
import {  MdOutlineClear, MdOutlineDehaze, MdOutlinePersonOutline, 
MdOutlineSearch,
MdOutlineShoppingCart
} from "react-icons/md";
import { Store } from "../../utils/Store";
import {useTranslation} from "next-i18next"
import { useRouter } from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import { cards } from "../../utils/dumycards";
import FeaturesMenu from "../menus/FeaturesMenu";
import SearchInput from "../search/SearchInput";
import ShippingCartMenu from "../menus/ShippingCartMenu";
import UserMenu from "../menus/UserMenu";


const HeadBar=({pages})=>{
    const router =useRouter();
    const {state,dispatch} =useContext(Store);
    const {darkMode,shippingMenu,user}=state;
    const [cartProduct,setCartProduct]=useState([]);
    const [featuredMenu,setFeaturedMenu]=useState(false);
    const [cardCategory,setCardCategory]=useState([]);
    const {t,i18n} =useTranslation();
    const [searchProducts,setSearchProducts]=useState(null);
    const [searchMenu,setSearchMenu]=useState(false);
    const [shippingCartMenu,setShippingCartMenu]=useState(false);
    const [userMenu,setUserMenu]=useState(false);
    
   const cardFeaturesLinks=["All gift cards","Popular","Recently Added","Rewards"]
   const cardPopularLinks=["Uber","Etisalat","Vodafone","PUBG Mobile UC","Orange","Noon.com"]
   const phonePopularLinks=["Etisalat","Vodafone","Orange","Orange (Mobinil)"]
   const phoneCategoryLinks=["Prepaid phones","Phone Codes"]
   const phoneFeaturesLinks=["Refills"]
   const phoneTrendingLinks=[
    {name:"Etisalat",img:"https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_151%2Cw_250/v1585414749/etisalat.jpg"},
    {name:"Vodafone Refill",img:"https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1556099168/vodafone.jpg"}
  ]

  useEffect(()=>{
    const categoryArry=[]
      cards.map(card=>{
         if(!categoryArry.includes(card.category)){
          categoryArry.push(card.category)
         }
      })
      setCardCategory(categoryArry)
  },[])


 


 


    return(
      <div className={`${darkMode?"bg-dark-200 text-white":"bg-wite text-main"} border-b relative`}>
        {(shippingCartMenu||shippingMenu)&&<ShippingCartMenu setShippingCartMenu={setShippingCartMenu}/>}
        {userMenu&&<UserMenu setUserMenu={setUserMenu}/>}
           <div className="container  mx-auto ">
            <div className={` bg-inherit text-inherit w-full flex items-center justify-between py-2 px-2 md:px-0 shadow-sm md:shadow-none `}> 
                  <div className="flex items-center " >
                    <MdOutlineDehaze className="text-2xl cursor-pointer mx-2 md:hidden" onClick={()=>setFeaturedMenu(true)}/>
                    <Link href="/">
                      <a>
                      <div className="text-3xl lg:text-4xl font-extrabold">Bitrefill</div>
                      </a>
                    </Link> 
                         <div className="hidden md:block md:w-64 lg:w-96">
                            <SearchInput/>
                         </div>
                            </div>
                        <div className="w-1/2 md:w-1/3 flex  items-center">
                        
                            <div className=" w-full items-center flex justify-end">
                            {
                              !user?
                              <div className=" hidden  lg:flex w-full justify-end items-center mx-1">
                                <Link href="/login">
                                  <a className={`active:scale-90 ${darkMode?"bg-dark-100 text-white hover:bg-customGray-200":"bg-customGray-100 text-main hover:bg-customGray-200"} transition duration-200 rounded-full mx-2 px-4 py-1.5  capitalize text-ld font-semibold`}>
                                    login
                                  </a>
                                </Link>
                                <Link href="/register">
                                  <a className="active:scale-90 transition duration-200 hover:bg-secondary-200  rounded-full mx-2 px-4 py-1.5 bg-secondary-100 text-white capitalize  font-semibold">
                                    create account
                                  </a>
                                </Link>
                              </div>
                              :(
                                <div className="flex items-center">
                                    <div onClick={()=>setUserMenu(true)} className={`cursor-pointer active:scale-90 ${darkMode?"bg-dark-100 text-white hover:bg-customGray-200":"bg-customGray-100 text-main hover:bg-customGray-200"} transition duration-200 rounded-full mx-2 px-4 py-1.5  capitalize text-ld font-semibold `}>S</div>
                                    <div className="mx-1">$0</div>
                                </div>
                              )
                           }
                           <div className={`${darkMode?"hover:bg-dark-100":"hover:bg-customGray-100"} lg:hidden py-2 rounded-full`} >
                                <MdOutlineSearch onClick={()=>setSearchMenu(true)} className="text-2xl cursor-pointer"/> 
                                {searchMenu&&<div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} z-40 py-16 text-center fixed top-0 left-0 w-full h-screen`}>
                                <div className={`absolute ${i18n.language==="ar"?"left-4":"right-4"} top-4 cursor-pointer`} onClick={()=>setSearchMenu(false)}><MdOutlineClear className="text-3xl"/></div>
                                   <SearchInput/>
                                </div>}
                            </div>
                            <div className={`${darkMode?"hover:bg-dark-100":"hover:bg-customGray-100"} lg:hidden py-2 rounded-full`} >
                              <Link href={"/login"}>
                                <a>
                                <MdOutlinePersonOutline className="text-2xl cursor-pointer"/>
                                </a>
                              </Link> 
                            </div>
                            <div onClick={()=>setShippingCartMenu(true)} className={`${darkMode?"hover:bg-dark-100":"hover:bg-customGray-100"} py-2 rounded-full flex justify-end relative px-2 md:px-4`} >
                              
                                <MdOutlineShoppingCart className="text-xl md:text-3xl cursor-pointer"/>
                                <div className="absolute text-sm  text-white bg-secondary-100 bottom-4 z-10 md:bottom-8 right-0 px-1 md:px-1.5 rounded-full">{state.cart.cartItems&&(state.cart.cartItems.length>0?state.cart.cartItems.length:"0")}</div>
                            </div>
                            </div>
                        </div>
          </div>
          {/*freatures*/}
             <div className="py-1  hidden md:block ">
              <div className="flex ">
                <div  className="transition group duration-200 hover:text-secondary-100 ">
                 <div className={` hover:underline  mx-3 font-semibold cursor-pointer`}>Gift Cards</div>  
                {<div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} border-b transition duration-200 absolute group-hover:block hidden hover:block top-15 z-20 left-0 w-full`}>
                     <div className="container mx-auto flex">
                         <div className="w-1/6 p-4">
                            <div className="text-sm font-semibold">Featured</div>
                            <div className="text-lg font-semibold font-sans">
                              {
                                cardFeaturesLinks.map((link,index)=>(
                                  <div key={index} className="py-1 hover:underline">
                                    <Link href={`/cards/${link.toLowerCase().trim().replace(/ /g,"-")}`} passHref>
                                      <a>{link}</a>
                                    </Link>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                          <div className="h-auto w-0.5  mx-4 py-4">
                            <div className="bg-customGray-200 w-full h-full"></div>
                          </div>
                          <div className="w-1/3 p-4">
                            <div className="text-sm font-semibold">Categories</div>
                            <div className="text-sm flex flex-wrap font-sans">
                              {
                                  cardCategory.map((card,index)=>(
                                  <div key={index} className="py-1 hover:underline w-1/3">
                                    <Link href={`/cards/${card.toLowerCase().trim().replace(/ /g,"-")}`} passHref>
                                      <a>{card}</a>
                                    </Link>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                          <div className="h-auto w-0.5  mx-4 py-4">
                            <div className="bg-customGray-200 w-full h-full"></div>
                          </div>
                          <div className="w-1/6 p-4">
                            <div className="text-sm font-semibold">Popular in Egypt</div>
                            <div className="text-sm font-sans">
                              {
                                cardPopularLinks.map((link,index)=>(
                                  <div key={index} className="py-1 hover:underline">
                                    <Link href={`/card/${link.toLowerCase()}`} passHref>
                                      <a>{link}</a>
                                    </Link>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                     </div>
                  </div>} 
              </div>  
              <div className="group transition duration-200 hover:text-secondary-100">
                 <div className={ ` hover:underline mx-3 font-semibold cursor-pointer`}>Phone Refills</div>
                 {<div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} border-b transition duration-200 absolute group-hover:block hidden hover:block top-15 z-20 left-0 w-full`}>
                     <div className="container mx-auto flex">
                         <div className="w-1/6 p-4">
                            <div className="text-sm font-semibold">Featured</div>
                            <div className="text-lg font-semibold font-sans">
                              {
                                phoneFeaturesLinks.map((link,index)=>(
                                  <div key={index} className="py-1 hover:underline">
                                    <Link href={"/refill"} passHref>
                                      <a>{link}</a>
                                    </Link>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                          <div className="h-auto w-0.5  mx-4 py-4">
                            <div className="bg-customGray-200 w-full h-full"></div>
                          </div>
                          <div className="w-1/6 p-4">
                            <div className="text-sm font-semibold">Categories</div>
                            <div className="text-sm font-sans">
                              {
                                phoneCategoryLinks.map((link,index)=>(
                                  <div key={index} className="py-1 hover:underline w-1/3">
                                    <Link href={`/cards/${link.toLocaleLowerCase().trim().replace(/ /g,"-")}`} passHref>
                                      <a className="whitespace-nowrap">{link}</a>
                                    </Link>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                          <div className="h-auto w-0.5  mx-4 py-4">
                            <div className="bg-customGray-200 w-full h-full"></div>
                          </div>
                          <div className="w-1/6 p-4">
                            <div className="text-sm font-semibold">Popular in Egypt</div>
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
                          </div>
                          <div className="h-auto w-0.5  mx-4 py-4">
                            <div className="bg-customGray-200 w-full h-full"></div>
                          </div>
                          <div className="w-1/3 p-4">
                            <div className="text-sm font-semibold">Trending</div>
                            <div className="text-sm font-sans flex flex-wrap">
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
                          </div>
                     </div>
                  </div>} 
              </div>
              </div>
               
          
            </div>               
        </div>
              {/*menu cart of product*/}
          {featuredMenu&&<FeaturesMenu setFeaturedMenu={setFeaturedMenu}/>}
        </div>
    )
}



export default dynamic(() => Promise.resolve(HeadBar), { ssr: false });