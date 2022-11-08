import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {motion} from "framer-motion"
import {  MdOutlineDehaze, MdOutlinePersonOutline, 
MdOutlineSearch, MdOutlineShoppingBasket,
MdOutlineShoppingCart
} from "react-icons/md";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {BsHeart} from "react-icons/bs";
import { API_URL } from "../../utils/url";
import { Store } from "../../utils/Store";
import {useTranslation} from "next-i18next"
import { useRouter } from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import MenuCart from "../menus/MenuCart";
import { cards } from "../../utils/dumycards";
import FeaturesMenu from "../menus/FeaturesMenu";


const HeadBar=({pages})=>{
    const router =useRouter();
    const {state,dispatch} =useContext(Store);
    const {darkMode}=state;
    const [cartProduct,setCartProduct]=useState([]);
    const [user,setUser]=useState(null);
    const [featuredMenu,setFeaturedMenu]=useState(false);
    const [menuCart,setMenuCart]=useState(false);
    const {t,i18n} =useTranslation();
    const [searchProducts,setSearchProducts]=useState(null);
    const [search,setSearch]=useState("");
    
   const cardFeaturesLinks=["All gift cards","Popular","Recently Added","Rewards"]
   const cardPopularLinks=["Uber","Etisalat","Vodafone","PUBG Mobile UC","Orange","Noon.com"]
   const phonePopularLinks=["Etisalat","Vodafone","Orange","Orange (Mobinil)"]
   const phoneCategoryLinks=["Prepaid phones","Phone Codes"]
   const phoneFeaturesLinks=["Refills"]
   const phoneTrendingLinks=[
    {name:"Etisalat",img:"https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_151%2Cw_250/v1585414749/etisalat.jpg"},
    {name:"Vodafone Refill",img:"https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1556099168/vodafone.jpg"}
  ]

    const closeMenus=()=>{

      setMenItems(false)
      setMenuCart(false)
    }
    const handleMenus=(type)=>{
      switch (type) {
       
        case 'cart':
          setMenItems(false)     
          setMenuCart(true)
          break;
          case 'heart':
          setMenItems(false)     
          setMenuCart(false)
          break;
        case 'items':
          setMenItems(true)    
          setMenuCart(false)
          break;
        
        default:
          setMenItems(false)
          setMenuCart(false)
      }
      
    }

const handleChandeLang=(e)=>{
  i18n.changeLanguage(e.target.value)
  //window.Weglot.switchTo(e.target.value)
}
   const handleLogout=()=>{
    dispatch({type:"USER_LOGOUT"})
   
   }

   const handleSearchSubmit=(e)=>{
       e.preventDefault()
       router.push(`/search/${search}`)
   }


    return(
      <div className={`${darkMode?"bg-dark-200 text-white":"bg-wite text-main"} relative`}>
           <div className="container  mx-auto ">
            <div className={` bg-inherit text-inherit w-full flex items-center justify-between py-2 px-2 md:px-0 shadow-sm md:shadow-none `}> 
                  <div className="flex items-center " >
                    <MdOutlineDehaze className="text-2xl cursor-pointer mx-2 md:hidden" onClick={()=>setFeaturedMenu(true)}/>
                    <Link href="/">
                      <a>
                      <div className="text-3xl lg:text-4xl font-extrabold">Bitrefill</div>
                      </a>
                    </Link> 
                    
                        <form onSubmit={handleSearchSubmit} className=" hidden md:flex mx-6 text-gray-900 items-center">
                          <div className="flex items-center md:w-64 lg:w-96 relative rounded-full">
                            <input onChange={(e)=>setSearch(e.target.value)} type="text" className={`${darkMode?"focus:border-secondary-100 bg-dark-100":"focus:border-main focus:bg-white bg-customGray-100"} border flex-grow transition duration-200  px-6 py-2 w-full h-full rounded-full`} placeholder={t("common:search")}/>
                            <div className="absolute top-1/6 right-0">
                              <MdOutlineSearch  className="text-3xl text-customGray-200 cursor-pointer text-primary"/>
                            </div>
                            </div>
                            </form> 
                            </div>
                        <div className="w-1/2 md:w-1/3 flex  items-center">
                        
                            <div className=" w-full items-center flex justify-end">
                            {true?(
                              <div className=" hidden  lg:flex w-full justify-end items-center mx-1">
                                <Link href="/login">
                                  <a className={`${darkMode?"bg-dark-100 text-white hover:bg-customGray-200":"bg-customGray-100 text-main hover:bg-customGray-200"} transition duration-200  p-1 rounded-full mx-2 px-4 py-2  capitalize text-ld font-semibold`}>
                                    login
                                  </a>
                                </Link>
                                <Link href="/login">
                                  <a className="transition duration-200 hover:bg-secondary-200 p-1 rounded-full mx-2 px-4 py-2 bg-secondary-100 text-white capitalize  lg:text-lg font-semibold">
                                    create account
                                  </a>
                                </Link>
                              </div>
                            ):(
                            <div className="relative md:w-full hidden md:flex justify-end">
                            <div className="relative">
                                <div onClick={()=>setMenuUser(!menuUser)} className="border capitalize border-primary text-gray-900 text-sm py-0.5 px-1 md:text-base md:px-2 md:py-1 cursor-pointer">{user.firstName+" "+user.lastName}</div>
                                {
                                <motion.div initial={{display:"none"}} animate={menuUser?{display:"block"}:{display:"none"}}  className="absolute top-8 left-0 z-30 border border-primary bg-white py-4 px-2">
                                  <button className="py-2 text-center px-4 capitalize hover:bg-secondary-100 hover:text-white">{user.firstName+" "+user.lastName}</button>
                                  <button className="py-2 text-center px-4 hover:bg-secondary-100 hover:text-white">Profile</button>
                                  <button onClick={handleLogout} className="py-2 text-center px-4 hover:bg-secondary-100 hover:text-white">Logout</button>
                                </motion.div>
                                }
                            </div>
                           
                            </div>
                            )}
                           <div className={`${darkMode?"hover:bg-dark-100":"hover:bg-customGray-100"} lg:hidden py-2 rounded-full`} onClick={()=>handleMenus("")}>
                              <Link href={"/login"}>
                                <a>
                                <MdOutlineSearch className="text-2xl cursor-pointer"/>
                                </a>
                              </Link> 
                            </div>
                            <div className={`${darkMode?"hover:bg-dark-100":"hover:bg-customGray-100"} lg:hidden py-2 rounded-full`} onClick={()=>handleMenus("")}>
                              <Link href={"/login"}>
                                <a>
                                <MdOutlinePersonOutline className="text-2xl cursor-pointer"/>
                                </a>
                              </Link> 
                            </div>
                            <div className={`${darkMode?"hover:bg-dark-100":"hover:bg-customGray-100"} py-2 rounded-full flex justify-end relative px-2 md:px-4`} onClick={()=>handleMenus("cart")}>
                                <MdOutlineShoppingCart className="text-xl md:text-4xl cursor-pointer"/>
                                <div className="absolute text-sm md:text-base text-white bg-secondary-100 bottom-4 md:bottom-8 right-0 px-1 md:px-1.5 rounded-full">0</div>
                            </div>
                            </div>
                        </div>
          </div>
          {/*freatures*/}
             <div className="py-1  hidden md:block">
              <div className="flex ">
                <div onMouseOver={()=>setGiftCardHover(true)} onMouseOut={()=>setGiftCardHover(false)} className="transition group duration-200 hover:text-secondary-100 ">
                 <div className={` hover:underline  mx-3 font-semibold cursor-pointer`}>Gift Cards</div>  
                {<div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} transition duration-200 absolute group-hover:block hidden hover:block top-15 z-20 left-0 w-full`}>
                     <div className="container mx-auto flex">
                         <div className="w-1/6 p-4">
                            <div className="text-sm font-semibold">Featured</div>
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
                          </div>
                          <div className="h-auto w-0.5  mx-4 py-4">
                            <div className="bg-customGray-200 w-full h-full"></div>
                          </div>
                          <div className="w-1/3 p-4">
                            <div className="text-sm font-semibold">Categories</div>
                            <div className="text-sm flex flex-wrap font-sans">
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
                                    <Link href={"/"} passHref>
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
              <div onMouseEnter={()=>setGiftCardHover(true)} className="group transition duration-200 hover:text-secondary-100">
                 <div className={ ` hover:underline mx-3 font-semibold cursor-pointer`}>Phone Refills</div>
                 {<div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} transition duration-200 absolute group-hover:block hidden hover:block top-15 z-20 left-0 w-full`}>
                     <div className="container mx-auto flex">
                         <div className="w-1/6 p-4">
                            <div className="text-sm font-semibold">Featured</div>
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
              {menuCart&&<MenuCart setMenuCart={setMenuCart}/>}
          {featuredMenu&&<FeaturesMenu setFeaturedMenu={setFeaturedMenu}/>}
        </div>
    )
}



export default dynamic(() => Promise.resolve(HeadBar), { ssr: false });