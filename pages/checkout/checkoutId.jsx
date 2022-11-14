import React, { useState } from 'react'
import CopyOverlay from '../../components/overlay/CopyOverlay'
import { Store } from '../../utils/Store'
import {  MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import {  BsInfoCircle } from "react-icons/bs";
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { paymentMethods } from '../../utils/dumyPayments'
import OpenWalletOverlay from '../../components/overlay/OpenWellatOverlay';
import WalletOverlay from '../../components/overlay/WalletOverlay';

function CheckoutId() {
  const {state}=useContext(Store)
  const router=useRouter()
  const {darkMode,cart}=state
  const {i18n}=useTranslation()
  const [copyOverlay,setCopyOverlay]=useState(false)
  const [openWalletOverlay,setOpenWalletOverlay]=useState(false)
  const [walletsOverlay,setWalletsOverlay]=useState(false)
  const [QRImg,setQRImg]=useState("/img/qr-code.svg")
  const paymentMethod=cart.paymentMethod&&paymentMethods.find(c=>c.name===cart.paymentMethod.name)

  
console.log("QRImg",QRImg)
 // handle loin
  const handleSubmit=async(e)=>{
     e.preventDefault();
  }

  const handleBack=()=>{
     router.back()
  }
  return (
 
        <div className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"} font-sans relative`}>
         {copyOverlay&&<CopyOverlay setCopyOverlay={setCopyOverlay}/>}
         {walletsOverlay&&<WalletOverlay setWalletsOverlay={setWalletsOverlay}/>}
           <div className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} py-2`}>
              <div className=' text-2xl font-sans font-bold container mx-auto'>
                <div className='flex items-center cursor-pointer'>
                  {i18n.language=="ar"?<MdArrowForwardIos className='text-3xl hover:bg-customGray-100 p-2 rounded-full mx-0.5' onClick={()=>handleBack()}/>:<MdArrowBackIosNew className='text-3xl hover:bg-customGray-100 p-2 rounded-full mx-0.5' onClick={()=>handleBack()}/>}
                  <Link href={"/"}><a>Bitrefill</a></Link>
                </div>
              </div>
           </div>
           <div className='bg-inherit text-inherit container mx-auto md:p-8'>
              <div className='lg:grid lg:grid-cols-2 lg:gap-4 gap-2'>
                 <div className={`rounded shadow m-4 ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
                    <div className='w-full p-4 md:p-8'>
                       <div className='text-xl font-semibold'>Order details </div>
                       <div className='text-sm'>
                          <div className='flex justify-between py-2'>
                             <div>
                               <div className='text-customGray-200'>Email address</div>
                               <div>example@exampole.com</div>
                             </div>
                             <Link href={"/checkout"}><a className='underline'> change</a></Link>
                          </div>
                       </div>
                       <div className='text-xs'>
                          <div className='flex justify-between py-2'>
                             <div>
                               <div className='text-customGray-200'>Payment Method</div>
                               <div>{paymentMethod.name}</div>
                             </div>
                             <Link href={"/checkout"}><a className='underline'> change</a></Link>
                          </div>
                       </div>
                       <div className='text-xs'>
                          <div className='flex justify-between py-2'>
                             <div>
                               <div className='text-customGray-200'>Invoice id</div>
                               <div>5d78c7e9-e2c6-4621-953f-65d5555d4b11</div>
                             </div>
                          </div>
                       </div>
                       <hr/>
                       <div className='py-4 '>
                        {
                          cart.cartItems.length>0?cart.cartItems.map(item=>(
                            <div className='flex items-center justify-between my-4'>
                            <div className='flex items-center'>
                            <div className='relative w-16 h-12 mx-2 border'>
                               <Image src={item.img} layout='fill' objectFit='cover' objectPosition="center" alt=''/>
                            </div>
                             <div className='py-1'>
                                <div className={`${darkMode?"text-white":"text-main"} font-semibold text-sm `}>{item.title}</div>
                                <div className='text-customGray-200'>${item.price}</div>
                             </div>
                         </div>
                         <div className='text-customGray-200'>125AUD</div>
                        </div>
                          )):(
                            <div className='text-customGray-200 py-4'>Shpping Cart is empity</div>
                          )
                         
                        }
                       </div>
                        <hr/>
                        <div className='flex justify-between pt-4 '>
                           <div className='items-center text-sm flex relative group cursor-pointer'>
                            <span>Total</span>
                            </div>
                           <div>1562 AUD</div>
                        </div>
                    </div>
                 </div>
                 <div className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} rounded shadow p-8 m-4 relative`}>
                  {openWalletOverlay&&<OpenWalletOverlay QRImg={QRImg} setCopyOverlay={setCopyOverlay} setOpenWalletOverlay={setOpenWalletOverlay}/>}
                    <span className='text-2xl font-semibold'>Payment</span>
                    <div className='flex items-center justify-center p-8'>
                      <div className='w-3/4'>
                         <div>
                           <div className='text-xs text-customGray-200 my-2'>Select your wallet for the best experience</div>
                            <button onClick={()=>setWalletsOverlay(true)} className={`${darkMode?"bg-customGray-100 text-main":"bg-customGray-100 text-main"} font-bold flex justify-between items-center w-full text-sm px-6 py-3 rounded-full hover:bg-customGray-200 transition duration-200 active:scale-90`}>
                                <div className='flex items-center'>
                                <div className='w-8 h-8 relative rounded-full overfolw-hidden'>
                                 {
                                 cart.wallet.item?<Image src={cart.wallet.item} layout="fill" objectFit='cover' objectPosition="center" alt={cart.wallet.name}/>
                                  :
                                  <div>Sellect Wallet</div>}
                              </div>
                               <span className='mx-2'>{cart.wallet.name}</span>
                                </div>
                                <span>Change</span>
                            </button>
                            <div className='shadow border  w-full rounded my-8 p-4 relative'>
                              <div className='relative h-60'>
                                 <div className='w-full h-full relative'>
                                    <Image src={`${QRImg}`} layout='fill' objectFit='fill' objectPosition="center" alt='Qr-code'/>
                                 </div>
                                 <div className='absolute top-0 left-0 w-full h-full flex  items-center justify-center'>
                                    <div className='scale-150' dangerouslySetInnerHTML={{__html:paymentMethod.item}}/>
                                 </div>
                                 </div>
                                 <div className='py-4 text-customGray-200 text-xs'>Recommended Transaction Fee Rate for Fast Confirmation:<span className='text-main'>15 gwei</span> </div>
                                 <div className='flex items-center py-4 px-2 rounded text-red-500 bg-red-100 text-xs font-bold'>
                                    <BsInfoCircle className='text-red-600 text-2xl mx-2'/>
                                    <span >Only send USDC ERC20 using the Ethereum chain</span>
                                 </div>
                            </div>
                         </div>
                         <div className=' items-center justify-between '>
                          <button onClick={()=>setOpenWalletOverlay(true)} className='font-bold w-full active:scale-90 transition duration-200 ease-in-out bg-secondary-100 hover:bg-secondary-200 text-white flex items-center justify-center py-2.5 rounded-full'>
                              Open your wallet
                          </button>
                          <button onClick={()=>setCopyOverlay(true)} className='font-bold my-4 w-full  flex items-center justify-center py-2.5 rounded-full active:scale-90 transition duration-200 ease-in-out bg-customGray-100 hover:bg-customGray-200 text-main'>
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

  )
}

export async function getStaticProps({locale}) {
  
  try{
   
        return {
          props: {
            errMsg:false,
            ...(await serverSideTranslations(locale, ['common']))
          }
        }
  }catch(err){
    return {
      props: {
        errMsg:true,
        ...(await serverSideTranslations(locale, ['common']))
      }
  }  }
 
}

export default CheckoutId