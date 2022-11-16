import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Store } from '../../utils/Store';
import QRCode from 'qrcode'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {BsArrowRightShort, BsCurrencyBitcoin, BsCurrencyDollar, BsCurrencyEuro, BsInfoCircle,BsExclamationTriangle} from "react-icons/bs"
import MenuList from '../../components/menus/MenuList';
import {paymentMethods} from '../../utils/dumyPayments';
import Image from 'next/image';
import OpenWalletOverlay from '../../components/overlay/OpenWellatOverlay';
import CopyOverlay from '../../components/overlay/CopyOverlay';
import WalletOverlay from '../../components/overlay/WalletOverlay';
import { useEffect } from 'react';


function Topup() {
  const router=useRouter()
  const {query}=router
  const {state} =useContext(Store);
  const {darkMode,cart}=state;
  const [currencyFrom,setCurrencyFrom]=useState(paymentMethods[0])
  const [currencyFromMenu,setCurrencyFromMenu]=useState(false)
  const [currencyTo,setCurrencyTo]=useState({item:<div className='rounded-full p-1 bg-green-500'><BsCurrencyDollar/></div>,name:"Dollar"})
  const [currencyToMenu,setCurrencyToMenu]=useState(false)
  const [copyOverlay,setCopyOverlay]=useState(false)
  const [openWalletOverlay,setOpenWalletOverlay]=useState(false)
  const [walletsOverlay,setWalletsOverlay]=useState(false)
  const [QRImg,setQRImg]=useState("/img/qr-code.svg")
  const [copied,setCopied]=useState(false)

const currencyItems=[
  {item:<div className='rounded-full p-1 bg-green-500'><BsCurrencyDollar/></div>,name:"USD"},
  {item:<div className='rounded-full p-1 bg-slate-500'><BsCurrencyDollar/></div>,name:"UAD"},
  {item:<div className='rounded-full p-1 bg-orange-500'><BsCurrencyDollar/></div>,name:"CAD"},
  {item:<div className='rounded-full p-1 bg-cyan-600'><BsCurrencyEuro/></div>,name:"Euro"},
  {item: <div className='rounded-full p-1 bg-yellow-300'><BsCurrencyBitcoin/></div>,name:"bitcion"},
]



useEffect(()=>{
  // With promises
    QRCode.toDataURL('5d78c7e9-e2c6-4621-953f-65d5555d4b11')
.then(url => {
 setQRImg(url)
})
.catch(err => {
 console.error(err)
})
},[])

const handleCopy=()=>{
  setCopied(true)
  setTimeout(()=>{
     setCopied(false)
  },800)
}


  return (
    <Layout title={`account-order`}>
        <div className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"} relative`}>
         {walletsOverlay&&<WalletOverlay setWalletsOverlay={setWalletsOverlay}/>}
          <div className='container mx-auto p-4 md:p-8'>
            <div className='md:grid md:grid-cols-4 gap-2'>
               <div className={`col-span-1 py-1 rounded font-sans shadow ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
                  <MenuList type={"account"}/>  
               </div>
               <div className={`col-span-3 rounded md:px-6 py-4 ${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"}`}>
                 <div className='pb-4 px-4 flex justify-between'>
                 <div className='relative group cursor-pointer'>
                  <div className='text-xl lg:text-2xl font-bold'>Top-up Balance</div>
                  <div className='text-sm text-customGray-200 my-2'>Select how to top-up your balance, and use it to make purchases on Bitrefill</div>
                  </div>
                </div>
                <div className='py-8'>
                   <div className='lg:flex items-center'>
                     <div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"}  rounded-full relative m-4`}>
                        <div onClick={()=>setCurrencyFromMenu(!currencyFromMenu)} className='items-center flex px-6 py-2 cursor-pointer'>
                          <div dangerouslySetInnerHTML={{__html:currencyFrom.item}}/>
                          <div className='mx-2'>
                              <div className='text-xs text-customGray-200'>from</div>
                              <div className='text-sm'>{currencyFrom.name}</div>
                          </div>
                        </div>
                       {currencyFromMenu&&<motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.2}} className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} border z-20 px-4 py-2 rounded absolute top-16 left-0 right-0 h-64 overflow-y-auto overflow-x-hidden`}>
                           {
                            paymentMethods.map((item,index)=>(
                              <div onClick={()=>{setCurrencyFrom(item); setCurrencyFromMenu(false)}} key={index} className='flex items-center my-4 cursor-pointer'>
                                <div dangerouslySetInnerHTML={{__html:item.item}}/>
                                <div className='mx-2 text-sm'>{item.name}</div>
                              </div>
                            ))
                           }
                        </motion.div>}
                     </div>
                       <div className='flex justify-center'>
                         <div className='rounded-full p-2 border w-fit'>
                          <BsArrowRightShort className='text-3xl'/>
                         </div>
                        </div>
                     <div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"}  rounded-full relative m-4`}>
                        <div onClick={()=>setCurrencyToMenu(!currencyToMenu)} className='items-center flex px-6 py-2 cursor-pointer'>
                          
                          {currencyTo.item}
                          <div className='mx-2'>
                              <div className='text-xs text-customGray-200'>to</div>
                              <div className='text-sm'>{currencyTo.name}</div>
                          </div>
                        </div>
                        {currencyToMenu&&<motion.ul initial={{scale:0}} animate={{scale:1}} className={`${darkMode?"bg-dark-200":"bg-white"}  rounded-md absolute h-60 overflow-y-auto overflow-x-hidden z-10 top-16 left-0 right-0 border py-2 px-4`}>
                                {
                                  currencyItems.map((item,index)=>(
                                    <li key={index} onClick={()=>{setCurrencyTo(item); setCurrencyToMenu(false)}} className='flex my-4 items-center cursor-pointer'>
                                       <div className=''>
                                           {item.item}
                                       </div>
                                        <span className='mx-1 text-xs'>{item.name}</span>
                                      </li>
                                  ))
                                }         
                              </motion.ul>}
                     </div>

                    <div className='mx-4 border rounded py-2 px-4 text-center'>
                      <div className='text-sm'>Exchange Rate</div>
                      <div>$12.554</div>
                    </div>
                   </div>    
                   <div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} rounded shadow md:p-8 m-4 relative`}>
                  {openWalletOverlay&&<OpenWalletOverlay item={currencyFrom.item} copy={true} QRImg={QRImg} setCopyOverlay={setCopyOverlay} setOpenWalletOverlay={setOpenWalletOverlay}/>}
                    <div className='flex items-center justify-center lg:p-8'>
                      <div className='lg:w-3/4 w-full'>
                         <div>
                           <div className='text-xs text-customGray-200 my-2'>Select your wallet for the best experience</div>
                            <button onClick={()=>setWalletsOverlay(true)} className={`${darkMode?"bg-customGray-100 text-main":"bg-customGray-100 text-main"} font-bold flex justify-between items-center w-full text-sm md:px-6 py-3 rounded-full hover:bg-customGray-200 transition duration-200 active:scale-90`}>
                                <div className='flex items-center'>
                                 {
                                 cart.wallet.item? <div className='w-8 h-8 relative rounded-full overfolw-hidden'>
                                    <Image src={cart.wallet.item} layout="fill" objectFit='cover' objectPosition="center" alt={cart.wallet.name}/>
                                  </div>
                                  :
                                  <div className='whitespace-nowrap'>Sellect Wallet</div>}
                               <span className='mx-2'>{cart.wallet.name}</span>
                                </div>
                                <span>Change</span>
                            </button>
                            <div className='border rounded p-4 text-center my-4'>
                              <div className='text-customGray-200 text-sm'>Send {currencyFrom.name} to this address</div>
                              <div className='py-4'>
                                { <motion.input initial={{opacity:1}} animate={copied?{opacity:0,display:"none"}:{opacity:1}} transition={{duration:0.5}} onClick={()=>handleCopy()} readOnly tabIndex={-1} value="5d78c7e9-e2c6-4621-953f-65d5555d4b11" className={`w-full p-2 bg-customGray-100 rounded ${darkMode&&"text-main"} `}/>}
                                  {copied&&<motion.input initial={{opacity:0}} animate={copied?{opacity:1}:{opacity:0}} transition={{duration:0.5}}  readOnly tabIndex={-1} value="Copied!" className={`w-full p-2 bg-customGray-100 rounded ${darkMode&&"text-main"} `}/>}
                              </div>
                            </div>
                            <div className='shadow border bg-white w-full rounded my-8 p-4 relative'>
                              <div className='relative w-full h-60'>
                                 <div className='w-full h-full relative'>
                                    <Image src={`${QRImg}`} layout='fill' objectFit='fill' objectPosition="center" alt='Qr-code'/>
                                 </div>
                                 <div className='absolute top-0 left-0 w-full h-full flex  items-center justify-center'>
                                    <div className='scale-150' dangerouslySetInnerHTML={{__html:currencyFrom.item}}/>
                                 </div>
                                 </div>
                                 <div className='py-4 text-customGray-200 text-xs'>Recommended Transaction Fee Rate for Fast Confirmation:<span className={`text-main mx-2`}>15 gwei</span> </div>
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
                        </div>
                        <div className='bg-amber-800 p-4 m-4 rounded text-white flex '>
                           <div><BsExclamationTriangle className='text-3xl my-4'/></div>
                           <ul className='mx-4 text-sm'>
                             <li className='m-4 list-disc'>Top-up addresses are one-time use only</li>
                             <li className='m-4 list-disc'>Do not reuse it, as your account will not be cridited</li>
                             <li className='m-4 list-disc'>Your top-up limiy is $2,000 per transaction</li>
                             <li className='m-4 list-disc'>Your total balance limit s $10,000</li>
                           </ul>
                        </div>
                      </div>
                    </div>
                 </div>

                </div>
               </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}



export async function getStaticProps({locale}) {
  
  try{
   
        return {
          props: {
            ...(await serverSideTranslations(locale, ['common']))
          }
        }
  }catch(err){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common']))
      }
  }  }
 
}

export default Topup