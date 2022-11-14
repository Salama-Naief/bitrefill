import { useTranslation } from 'next-i18next';
import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineClear } from 'react-icons/md';
import { Store } from '../../utils/Store';

function CopyOverlay({setCopyOverlay}) {
    const {state,dispatch} =useContext(Store);
    const {t,i18n} =useTranslation();
    const {darkMode}=state;
    const [copied,setCopied]=useState(false)
    const [amountCopied,setAmountCopied]=useState(false)


    const handleCopy=()=>{
         setCopied(true)
         setTimeout(()=>{
            setCopied(false)
         },800)
      }
      const handleAmountCopy=()=>{
        setAmountCopied(true)
        setTimeout(()=>{
            setAmountCopied(false)
        },800)
     }
  return (
    <div className={` fixed top-0 left-0 flex justify-center items-center w-full h-screen z-20  `}>
      <div onClick={()=>setCopyOverlay(false)} className='absolute top-0 left-0 bg-gray-800 opacity-80 w-full h-full z-30'></div>
    <motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}}  className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"}  z-40 w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow relative`}>
      <div className={`absolute ${i18n.language==="ar"?"left-5":"right-5"} top-5 cursor-pointer`} onClick={()=>setCopyOverlay(false)}><MdOutlineClear className="text-3xl"/></div>
     <h1 className='text-2xl'>Copy</h1>
       <div className='py-4'>
        <div className='text-customGray-200 text-sm my-1'>Send Bitcoin to this address</div>
         { <motion.input initial={{opacity:1}} animate={copied?{opacity:0,display:"none"}:{opacity:1}} transition={{duration:0.5}} onClick={()=>handleCopy()} readOnly tabIndex={-1} value="5d78c7e9-e2c6-4621-953f-65d5555d4b11" className={`w-full p-2 bg-customGray-100 rounded ${darkMode&&"text-main"} `}/>}
          {copied&&<motion.input initial={{opacity:0}} animate={copied?{opacity:1}:{opacity:0}} transition={{duration:0.5}}  readOnly tabIndex={-1} value="Copied!" className={`w-full p-2 bg-customGray-100 rounded ${darkMode&&"text-main"} `}/>}
       </div>
       <div className='pb-4'>
        <div className='text-customGray-200 text-sm my-1'>Amount to pay</div>
         { <motion.input initial={{opacity:1}} animate={amountCopied?{opacity:0,display:"none"}:{opacity:1}} transition={{duration:0.5}} onClick={()=>handleAmountCopy()} readOnly tabIndex={-1} value="0.01507591 BTC" className={`w-full p-2 bg-customGray-100 rounded ${darkMode&&"text-main"} `}/>}
          {amountCopied&&<motion.input initial={{opacity:0}} animate={amountCopied?{opacity:1}:{opacity:0}} transition={{duration:0.5}}  readOnly tabIndex={-1} value="Copied!" className={`w-full p-2 bg-customGray-100 rounded ${darkMode&&"text-main"} `}/>}
       </div>
     </motion.div>
    
 </div>
  )
}

export default CopyOverlay