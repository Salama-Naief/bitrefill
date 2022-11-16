import Link from 'next/link';
import React, { useContext } from 'react'
import { Store } from '../../utils/Store';

function MenuList({type}) {
    const {state,dispatch} =useContext(Store);
    const {darkMode}=state;

   const  handleSignout=()=>{
    dispatch({type:"SIGN_OUT"})
   }
  return (
    <ul className={`rounded  `}>
        <li className={`px-6 py-4 ${(darkMode)?"hover:bg-dark-200 ":"hover:bg-customGray-100"} ${(type==="account")?darkMode?"bg-dark-200":"bg-customGray-100":""}`}>
        <Link href={"/account"}><a className='hover:underline'>Account</a></Link>
        </li>
        <li className={`px-6 py-4 ${(darkMode)?"hover:bg-dark-200":"hover:bg-customGray-100"} ${(type==="order")?darkMode?"bg-dark-200":"bg-customGray-100":""}`}>
        <Link href={"/account/order"}><a className='hover:underline'> My Products</a></Link>
        </li>
        <li className={`px-6 py-4 ${(darkMode)?"hover:bg-dark-200":"hover:bg-customGray-100"} ${(type==="wishlists")?darkMode?"bg-dark-200":"bg-customGray-100":""}`}>
        <Link href={"/account/wishlists"}><a className={``}>Wishlists</a></Link>
        </li>
        <li className={`px-6 py-4 ${(darkMode)?"hover:bg-dark-200":"hover:bg-customGray-100"} ${(type==="limits")?darkMode?"bg-dark-200":"bg-customGray-100":""}`}>
        <Link href={"/account/limits"}><a className='hover:underline'>Limits</a></Link>
        </li>
        <li className={`px-6 py-4 ${(darkMode)?"hover:bg-dark-200":"hover:bg-customGray-100"} ${(type==="settings")?darkMode?"bg-dark-200":"bg-customGray-100":""}`}>
        <Link href={"/account/settings"}><a className='hover:underline'>Settings</a></Link>
        </li>
        <button onClick={handleSignout} className={`w-full text-start transition duration-200 active:scale-90  px-6 py-4 ${(darkMode)?"hover:bg-dark-200":"hover:bg-customGray-100"}`}>
            Sign out
        </button>
    </ul>
  )
}

export default MenuList