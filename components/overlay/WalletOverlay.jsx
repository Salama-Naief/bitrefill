import { useTranslation } from 'next-i18next';
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineClear } from 'react-icons/md';
import { Store } from '../../utils/Store';
import { wallets } from '../../utils/dumyWallates';

function WalletOverlay({setWalletsOverlay}) {
    const {state,dispatch} =useContext(Store);
    const {t,i18n} =useTranslation();
    const {darkMode}=state;
    
    const handleAddWallet=(wallet)=>{
        dispatch({type:"ADD_WALLET",payload:wallet})
        setWalletsOverlay(false)
    }

   
  return (
    <div className={` fixed top-0 left-0 flex justify-center items-center w-full h-screen z-20  `}>
      <div onClick={()=>setWalletsOverlay(false)} className='absolute top-0 left-0 bg-gray-800 opacity-80 w-full h-full z-30'></div>
    <motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}}  className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"}  z-40 w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow relative`}>
      <div className={`absolute ${i18n.language==="ar"?"left-5":"right-5"} top-5 cursor-pointer`} onClick={()=>setWalletsOverlay(false)}><MdOutlineClear className="text-3xl"/></div>
     <h1 className='text-2xl'><span>Select Wallet</span> <span className='text-sn'>(optional)</span></h1>
     <div className='text-sm text-customGray-200 py-4'>This allows us to provide specific instructions to ensure the fastest and smoothest payment experience possible.</div>
       <hr/>
       <ul className='h-96 overflow-y-auto overflow-x-hidden py-4'>
         {
            wallets.map((wallet,index)=>(
                <li key={index} onClick={()=>handleAddWallet(wallet)} className='flex justify-between w-full px-4 my-3 cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='w-8 h-8 relative rounded-full overfolw-hidden'>
                            <Image src={wallet.item} layout="fill" objectFit='cover' objectPosition="center" alt={wallet.name}/>
                        </div>
                         <div className='mx-2'>{wallet.name}</div>
                    </div>
                    {i18n.language=="ar"?<MdArrowBackIosNew className='text-xl '/>:<MdArrowForwardIos className='text-xl ' />}
                </li>
            ))
         }
       </ul>
     </motion.div>
    
 </div>
  )
}

export default WalletOverlay