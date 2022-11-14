import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineClear } from 'react-icons/md';
import { Store } from '../../utils/Store';
import { paymentMethods } from '../../utils/dumyPayments';

function OpenWalletOverlay({setOpenWalletOverlay,QRImg,setCopyOverlay}) {
    const {state,dispatch} =useContext(Store);
    const {t,i18n} =useTranslation();
    const {darkMode}=state;
    const [showQR,setShowQR]=useState(false)

    const paymentMethod=state.cart.paymentMethod&&paymentMethods.find(c=>c.name===state.cart.paymentMethod.name)
  return (
    <div   className={` absolute top-0 left-0 flex justify-center items-center w-full h-full z-10  `}>
      <div onClick={()=>setOpenWalletOverlay(false)} className='absolute top-0 left-0 bg-gray-800 opacity-80 w-full h-full z-30'></div>
    <motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"}  z-40 w-2/3 p-8 rounded-lg shadow relative`}>
      {!showQR&&<div className={`absolute ${i18n.language==="ar"?"left-3":"right-3"} top-3 cursor-pointer`} onClick={()=>setOpenWalletOverlay(false)}><MdOutlineClear className="text-3xl"/></div>}
      {!showQR&&<div>
        <h1 className='text-xl'>Trouble paying?</h1>
          <div className='text-customGray-200'>If the expected app is not opening, please try copying the payment data or scanning the QR code.</div>
          <div className='my-4'>
            <button onClick={()=>setCopyOverlay(true)} className='font-bold my-4 w-full  flex items-center justify-center py-2.5 rounded-full active:scale-90 transition duration-200 ease-in-out bg-customGray-100 hover:bg-customGray-200 text-main'>
            Copy
          </button>
            <button onClick={()=>setShowQR(true)} className='font-bold my-4 w-full  flex items-center justify-center py-2.5 rounded-full active:scale-90 transition duration-200 ease-in-out bg-customGray-100 hover:bg-customGray-200 text-main'>
                <div className='relative w-4 h-4 border border-customGray-200 mx-2'>
                    <Image src={`${QRImg}`} layout='fill' objectFit='fill' objectPosition="center" alt='Qr-code'/>
                </div>
                Show QR
            </button>
          </div>
          </div>
  }
      {
        showQR&&<div className=''>
          <div className='relative h-60'>
              <div className='w-full h-full relative'>
                <Image src={`${QRImg}`} layout='fill' objectFit='fill' objectPosition="center" alt='Qr-code'/>
              </div>
              <div className='absolute top-0 left-0 w-full h-full flex  items-center justify-center'>
                <div className='scale-150' dangerouslySetInnerHTML={{__html:paymentMethod.item}}/>
              </div>
              </div>
              <button onClick={()=>setShowQR(false)} className='font-bold my-8 w-full  flex items-center justify-center py-2.5 rounded-full active:scale-90 transition duration-200 ease-in-out bg-customGray-100 hover:bg-customGray-200 text-main'>
            Cancel
          </button>
        </div>
      }

     </motion.div>
    
 </div>
  )
}

export default OpenWalletOverlay