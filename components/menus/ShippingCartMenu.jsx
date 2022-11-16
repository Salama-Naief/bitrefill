import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Store } from "../../utils/Store"
import {motion} from "framer-motion"
import {MdOutlineDeleteOutline} from "react-icons/md"
import dynamic from 'next/dynamic'

const Item=({item})=>{
    const {state,dispatch} =useContext(Store);
    const {darkMode,cart}=state;
    const [amount,setAmount]=useState(item.amount?parseInt(item.amount):1)

    const increase=()=>{
      setAmount(amount+1)
      dispatch({type:"ADD_TO_CART",payload:{...item,amount:parseInt(amount)+1}}) 
    }
    const decrease=()=>{
        if(amount>0){
            setAmount(amount-1)
            dispatch({type:"ADD_TO_CART",payload:{...item,amount:parseInt(amount)-1}}) 
        }
    }

    const removeItems=()=>{
        dispatch({type:"REMOVE_FROM_CART",payload:{...item}}) 
    }

    return(
    <div className={`flex justify-between rounded p-4 transtion duration-200 ${darkMode?"hover:bg-dark-200":"hover:bg-customGray-100"}`}>
        <div className='flex items-center'>
            <div className='relative w-10 h-10 rounded overflow-hidden border'>
                <Image src={item.img} layout="fill"/>
            </div>
            <div className='text-sm font-bold mx-2'>{item.title}</div>
        </div>
        <div className='flex items-center'>
            <div className='flex items-center'>
                <span onClick={decrease} className='text-xl font-bold cursor-pointer active:scale-90'>-</span>
                <span className='px-4'>{amount}</span>
                <span onClick={increase} className='text-xl font-bold cursor-pointer active:scale-90'>+</span>
            </div>
            <MdOutlineDeleteOutline onClick={()=>removeItems()} className='mx-1 cursor-pointer'/>
        </div>
    </div>
    )
}
function ShippingCartMenu({setShippingCartMenu}) {
    const {state,dispatch} =useContext(Store);
    const {darkMode,cart}=state;
    const [update,setUpdate]=useState(false)
    const {i18n} =useTranslation()
   

    const closeMenu=()=>{
        dispatch({type:"UPDATE_SHIPPING_MENU",payload:false})
        setShippingCartMenu(false);
      }
     
  return (
    <div className={` left-0 fixed top-0 w-full h-screen z-20`}>
         <div onClick={()=>closeMenu()}  className='absolute top-0 left-0 bg-gray-800 opacity-80 w-full h-full z-30'></div>
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} rounded ${i18n.language==="ar"?"left-0":"right-10"} w-3/4 md:w-1/2 lg:w-1/3 absolute top-16 z-40`}>
           {
            cart.cartItems.length>0?cart.cartItems.map((item,index)=>(
                <div key={index}>
                    <Item update={update} item={item}/>
                </div>
            )):(
                <div className='p-4 text-center'>shipping cart is empity</div>
            )
           }
           <hr/>
           <div className='p-4 flex justify-between'>
                <div className={`${darkMode?"bg-dark-200 hover:bg-dark-100":"bg-customGray-100 hover:bg-customGray-200"} text-sm font-semibold  rounded-full px-2 py-2`}>
                    <Link href={"/cards/top-products"}>
                        <a  onClick={()=>closeMenu()}>Keep Shipping</a>
                    </Link>
                </div>
                
                <div className={`bg-secondary-100 hover:bg-secondary-200 text-sm font-semibold text-white rounded-full px-2 py-2`}>
                    <Link href={"/checkout"}>
                        <a  onClick={()=>closeMenu()}>Checkout</a>
                    </Link>
                </div>
           </div>
        </motion.div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ShippingCartMenu), { ssr: false }) 