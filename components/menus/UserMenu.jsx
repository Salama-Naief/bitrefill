import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Store } from "../../utils/Store"
import {motion} from "framer-motion"
import {MdOutlineDeleteOutline} from "react-icons/md"
import dynamic from 'next/dynamic'


function UserMenu({setUserMenu}) {
    const {state} =useContext(Store);
    const {darkMode}=state;
    const {i18n} =useTranslation()
   
    const closeMenu=()=>{
        setUserMenu(false)
    } 

  return (
    <div className={` left-0 fixed top-0 w-full h-screen z-20`}>
         <div onClick={()=>closeMenu()}  className='absolute top-0 left-0 bg-gray-800 opacity-80 w-full h-full z-30'></div>
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} rounded ${i18n.language==="ar"?"left-10 md:left-20":"right-10 md:right-20"} w-3/4 md:w-1/2 lg:w-1/3 absolute top-16 z-40`}>

            <ul className='p-4 font-sans'>
                <li className={`${ darkMode?"hover:bg-dark-200":"hover:bg-customGray-100"} font-semibold p-4 rounded transtion duration-200`}>
                    <Link href={"/account"}>
                    <a  onClick={()=>closeMenu()}>
                        <div className='text-sm text-customGray-200'>ACCOUNT</div>
                        <div className=''>example@example.com</div>
                    </a>
                </Link>
                </li>
                <hr/>
                <li className={`${ darkMode?"hover:bg-dark-200":"hover:bg-customGray-100"} font-semibold p-4 rounded transtion duration-200`}>
                    <Link href={"/account/order"}>
                    <a  onClick={()=>closeMenu()}>
                    My Products
                    </a>
                </Link>
                </li>
                <li className={`${ darkMode?"hover:bg-dark-200":"hover:bg-customGray-100"} font-semibold p-4 rounded transtion duration-200`}>
                    <Link href={"/account/wishlists"}>
                    <a  onClick={()=>closeMenu()}>
                    Wishlists
                    </a>
                </Link>
                </li>
                <li className={`${ darkMode?"hover:bg-dark-200":"hover:bg-customGray-100"} font-semibold p-4 rounded transtion duration-200`}>
                    <Link href={"/account/limits"}>
                    <a  onClick={()=>closeMenu()}>
                    Limits
                    </a>
                </Link>
                </li>
                <li className={`${ darkMode?"hover:bg-dark-200":"hover:bg-customGray-100"} font-semibold p-4 rounded transtion duration-200`}>
                    <Link href={"/account/settings"}>
                    <a  onClick={()=>closeMenu()}>
                    Settings
                    </a>
                </Link>
                </li>
                <li className={`${ darkMode?"hover:bg-dark-200":"hover:bg-customGray-100"} font-semibold p-4 rounded transtion duration-200`}>
                    Sign out
                </li>
            </ul>
                   

        </motion.div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(UserMenu), { ssr: false }) 