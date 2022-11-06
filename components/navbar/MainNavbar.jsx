import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {motion} from "framer-motion"
import {  MdOutlineDehaze, MdOutlinePersonOutline, 
MdOutlineSearch, MdOutlineShoppingBasket,
MdOutlineClear
} from "react-icons/md";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {BsHeart} from "react-icons/bs";
import { API_URL } from "../../utils/url";
import { Store } from "../../utils/Store";
import {useTranslation} from "next-i18next"
import { useRouter } from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import MenuCart from "../menuCart/MenuCart";
import MenuHeart from "../menuCart/MenuHeart";


const HeadBar=({pages})=>{
    const router =useRouter();
    const {state,dispatch} =useContext(Store);
    const [cartProduct,setCartProduct]=useState([]);
    const [user,setUser]=useState(null);
    const [menuUser,setMenuUser]=useState(false);
    const [menuCart,setMenuCart]=useState(false);
    const [menuHeart,setMenuHeart]=useState(false);

    const {t,i18n} =useTranslation();
    const [searchProducts,setSearchProducts]=useState(null);
    const [search,setSearch]=useState("");
    

    useEffect(()=>{

     },[search])

    useEffect(()=>{
      setCartProduct(state.cart.cartItems)
      setUser(state.user);
    },[state,cartProduct])



    const closeMenus=()=>{

      setMenItems(false)
      setMenuCart(false)
      setMenuHeart(false)
    }
    const handleMenus=(type)=>{
      switch (type) {
       
        case 'cart':
          setMenItems(false)     
          setMenuCart(true)
          setMenuHeart(false)
          break;
          case 'heart':
          setMenItems(false)     
          setMenuCart(false)
          setMenuHeart(true)
          break;
        case 'items':
          setMenItems(true)    
          setMenuCart(false)
          setMenuHeart(false)
          break;
        
        default:
          setMenItems(false)
          setMenuCart(false)
          setMenuHeart(false)
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
            <div className="container w-full bg-white mx-auto flex items-center justify-between py-2 px-2 md:px-0 shadow-sm md:shadow-none "> 
                  <div className="flex items-center " >
                    <MdOutlineDehaze className="text-2xl cursor-pointer mx-2 md:hidden" onClick={()=>handleMenus('items')}/>
                    <Link href="/">
                      <a>
                      <div className="text-3xl lg:text-4xl font-extrabold">Bitrefill</div>
                      </a>
                    </Link> 
                    
                        <form onSubmit={handleSearchSubmit} className=" mx-6 flex text-gray-900 border border-gray-400 items-center focus:outline-main">
                          <div className="flex items-center w-full relative ">
                            <input onChange={(e)=>setSearch(e.target.value)} type="text" className="flex-grow outline-main px-2 py-2 rounded-full" placeholder={t("common:search")}/>
                            <MdOutlineSearch onClick={handleSearchSubmit} className="text-3xl cursor-pointer text-primary"/>
                            {searchProducts&&<div className="absolute top-8  px-4 border border-gray-400 left-0 z-40 w-full max-h-screen bg-white overflow-y-auto overfow-x-0">
                               <div className="relative">
                               {searchProducts&&searchProducts.edges.length>0&&<div className={`${i18n.language==="ar"?"left-0":"right-0"} absolute top-0 text-xl md:text-xl  border border-secondary rounded-full cursor-pointer`} onClick={()=>{setSearchProducts(null),setSearch(null)}}><MdOutlineClear/></div>}
                                {
                                   searchProducts&&searchProducts.edges.length>0?searchProducts.edges.map((p,index)=>(
                                    <div key={p.node.id} className="flex items-center my-2">
                                      <Link href={`/product/${p.node.handle}`} passHref>
                                        <a className="flex items-center">
                                          <div className="relative w-12 h-12">
                                           <Image src={p.node.images.edges[0].node.url} layout="fill" objectFit="contain" objectPosition="center" alt={p.node.images.edges[0].node.id}/>
                                          </div>
                                          <div className="mx-2">{p.node.title}</div>
                                        </a>
                                      </Link>
                                      
                                    </div>
                                  )):(
                                    search&&<div className="py-4">no products matches</div>
                                  )
                                }
                               </div>
                            </div>}
                            </div>
                            </form> 
                            </div>
                        <div className="w-1/2 md:w-1/3 flex  items-center">
                        
                            <div className=" w-full items-center flex justify-end md:justify-between">
                            {!user?(
                            <div className="hidden md:flex w-full justify-end items-center mx-1"><Link href="/login"><a className="p-1 rounded-full border border-secondary text-gray-900"><MdOutlinePersonOutline className="text-2xl cursor-pointer"/></a></Link></div>
                            ):(
                            <div className="relative md:w-full hidden md:flex justify-end">
                            <div className="relative">
                                <div onClick={()=>setMenuUser(!menuUser)} className="border capitalize border-primary text-gray-900 text-sm py-0.5 px-1 md:text-base md:px-2 md:py-1 cursor-pointer">{user.firstName+" "+user.lastName}</div>
                                {
                                <motion.div initial={{display:"none"}} animate={menuUser?{display:"block"}:{display:"none"}}  className="absolute top-8 left-0 z-30 border border-primary bg-white py-4 px-2">
                                  <button className="py-2 text-center px-4 capitalize hover:bg-secondary hover:text-white">{user.firstName+" "+user.lastName}</button>
                                  <button className="py-2 text-center px-4 hover:bg-secondary hover:text-white">Profile</button>
                                  <button onClick={handleLogout} className="py-2 text-center px-4 hover:bg-secondary hover:text-white">Logout</button>
                                </motion.div>
                                }
                            </div>
                           
                            </div>
                            )}
                           
                            <div className="md:hidden w-1/2 mx-1 flex justify-end relative text-gray-900" onClick={()=>handleMenus("cart")}>
                                <MdOutlineShoppingBasket className="text-2xl md:text-4xl cursor-pointer"/>
                                <div className="absolute text-secondary bottom-4 md:bottom-6 right-0 px-1 md:px-2 rounded-full">{state.cart.cartItems&&(state.cart.cartItems.length>0?state.cart.cartItems.length:"0")}</div>
                            </div>
                            <div className="md:hidden flex items-center">
                              <div className="mx-1 flex justify-end relative text-gray-900" onClick={()=>handleMenus("heart")} >
                                  <BsHeart className="hover:text-secondary text-2xl text-gray-400 font-light cursor-pointer"/>
                                  <div className="absolute bottom-1 right-1/3 text-primary flex justify-center items-center rounded-full">{state.lovedItems.length>0?state.lovedItems.length:"0"}</div>
                              </div> 

                              </div>
                            </div>
                            <div className="mx-1">
                              <select name="" id="" value={i18n.language} onChange={(e)=>handleChandeLang(e)} className="px-4 py-1 outline-none appearance-none border border-primary text-gray-900 cursor-pointer">
                                <option value="en" className={`bg-white text-gray-900 appearance-none`}>English</option>
                                <option value="ar" className={`bg-white text-gray-900 appearance-none`}>العربية</option>
                              </select>
                            </div>
                        </div>

         
          {/*menu cart of product*/}
          {menuCart&&<MenuCart setMenuCart={setMenuCart}/>}
          {menuHeart&&<MenuHeart setMenuHeart={setMenuHeart}/>}

                            
        </div>
    )
}



export default dynamic(() => Promise.resolve(HeadBar), { ssr: false });