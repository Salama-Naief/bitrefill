import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { ImGift } from 'react-icons/im';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Store } from '../../utils/Store';

function PurshaseGiftLayout({card,price,setPurshaseGift}) {
    const {state,dispatch} =useContext(Store);
    const {t,i18n} =useTranslation();
    const {darkMode}=state;
    const [recipientName,setRecipientName]=useState("")
    const [recipientEmail,setRecipientEmail]=useState("")
    const [yourName,setYourName]=useState("")
    const [message,setMessage]=useState("")
    const [giftType,setGiftType]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
       // dispatch({type:"ADD_COUNTARY",payload:countaryInput})
 
      }
  return (
    <div className={` fixed top-0 left-0 flex justify-center items-center w-full h-screen z-20 `}>
        <div onClick={()=>setPurshaseGift(false)} className='absolute top-0 left-0 bg-gray-800 opacity-80 w-full h-full z-30'></div>
    <div className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} relative top-0 bottom-0 left-0 rigt-0 z-40 w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow `}>
     <div className='flex items-center justify-between'>
        <div className='flex items-center'>
            <ImGift className='text-3xl mx-1 text-secondary-100'/>
            <span className='font-semibold text-sm'>Purshase as gift </span>
        </div>
        <div className='flex items-center '>
            <div className="w-7 h-7 relative">
                <Image src={card.img}  layout='fill' objectFit='cover' objectPosition="center" alt=''/>
            </div>
            <div>
            <div className='mx-2 text-xs'>{card.title}</div>
            <div className='mx-2 text-xs text-customGray-200'>${price}</div>

            </div>
        </div>
     </div>
        
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <div className='flex justify-between py-4'>
            <div className='w-1/2 px-1'>
                <div className='text-customGray-200 text-xs'>Recipient Name</div>
                <input type="text" onChange={(e)=>setRecipientName(e.target.value)} value={recipientName}  required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"} text-sm focus:outline-none transition duration-200  px-2 w-full h-full rounded-lg`} placeholder="Recipient Name"/> 
            </div>
            <div className='w-1/2 px-1'>
                <div className='text-customGray-200 text-xs'>Your Name</div>
                <input type="text" onChange={(e)=>setYourName(e.target.value)} value={yourName}  required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"} text-sm focus:outline-none transition duration-200  px-2 w-full h-full rounded-lg`} placeholder="Recipient Name"/> 
            </div>
          </div>
          <div className='flex justify-between my-4'>
            <div className='px-1 w-1/2'>
                <div className='text-customGray-200 text-xs'>Recipient Email</div>
                <input type="email" onChange={(e)=>setRecipientEmail(e.target.value)} value={recipientEmail}  required className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"} text-sm focus:outline-none transition duration-200  px-2 w-full py-2 rounded-lg`} placeholder="Recipient Email"/> 
            </div>
            <div className='px-1 w-1/2'>
                <div className='text-customGray-200 text-xs'>Message (optional)</div>
                <textarea rows={2}  onChange={(e)=>setMessage(e.target.value)} value={message}  className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"} text-sm focus:outline-none transition duration-200  px-2 w-full  rounded-lg`} placeholder="Message"/> 
            </div>
          </div>
          <div className='flex justify-between'>
             <div onClick={()=>setGiftType("Brithday")} className={`${giftType==="Brithday"&&"border-secondary-100"} hover:border-secondary-100 border transition duration-200 flex flex-col p-2 cursor-pointer`}>
             <svg className='mx-auto' width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 11.25V8.783h2.5v2.467h6.25v-5h2.5v5h6.25v-2.5H25v2.5h.944c2.254.114 4.053 2.057 4.053 4.399a4.377 4.377 0 01-1.247 3.072V30H1.25V18.725A4.361 4.361 0 010 15.647c0-2.51 2.036-4.348 4.053-4.397H5zM26.25 25H3.75v2.5h22.5V25zm-22.5-5.034V22.5h22.5v-2.534l-.509.031a4.16 4.16 0 01-2.692-.987 4.168 4.168 0 01-5.372.012 4.182 4.182 0 01-2.67.976 4.171 4.171 0 01-2.686-.976 4.162 4.162 0 01-5.371-.012 4.179 4.179 0 01-2.692.987l-.508-.03zm.362-6.216c-.783.061-1.553.794-1.61 1.776-.063 1.109.79 1.982 1.818 1.97C5.79 17.48 6.714 16.421 6.966 15c.271 1.1 1.233 2.469 2.682 2.495 1.444.026 2.487-1.199 2.7-2.448l.01-.047c.25 1.3 1.238 2.495 2.637 2.495 1.444 0 2.396-1.09 2.715-2.495.31 1.422 1.294 2.492 2.646 2.496 1.385.004 2.444-1.16 2.754-2.496.235 1.035 1.005 2.481 2.564 2.497.948.01 1.825-.812 1.825-1.853 0-1.046-.811-1.851-1.648-1.896l-21.738.002zm1.08-5.564C2.82 7.41 3.501 3.881 6.303 2.533 6.404 4.31 8.75 4.49 8.75 6.285c0 .752-.551 1.593-1.355 1.901.193-.636-.232-1.77-1.1-2.261-.877.509-1.329 1.628-1.104 2.261zm17.498-.032c-2.37-.776-1.688-4.305 1.114-5.654.1 1.777 2.446 1.957 2.446 3.753 0 .752-.551 1.592-1.355 1.9.191-.636-.232-1.77-1.1-2.26-.878.508-1.329 1.627-1.105 2.26zm-8.749-2.5C11.57 4.878 12.252 1.349 15.054 0c.1 1.778 2.446 1.958 2.446 3.752 0 .753-.551 1.593-1.355 1.902.191-.636-.232-1.77-1.1-2.261-.877.508-1.329 1.627-1.104 2.26z" fill="#6D27CA"></path></g>
                    <defs><clipPath id="clip0">
                        <path fill="#fff" d="M0 0h30v30H0z"></path>
                        </clipPath>
                    </defs>
                 </svg>
                 <div className='text-xs text-customGray-200 my-0.5'>Brithday</div>
             </div>
             <div onClick={()=>setGiftType("Bitcoin")} className={`${giftType==="Bitcoin"&&"border-secondary-100"} hover:border-secondary-100 border transition duration-200 flex flex-col p-2 cursor-pointer`}>
                <BsCurrencyBitcoin className='text-3xl text-orange-500 mx-auto'/>
                 <div className='text-xs text-customGray-200 my-0.5'>Bitcoin</div>
             </div>
             <div onClick={()=>setGiftType("Red")} className={`${giftType==="Red"&&"border-secondary-100"} hover:border-secondary-100 border transition duration-200 flex flex-col p-2 justify-centercursor-pointer`}>
                  <div className='w-10 h-9 bg-secondary-100 rounded'></div>
                 <div className='text-xs mx-auto text-customGray-200 my-0.5'>Red</div>
             </div>
             <div onClick={()=>setGiftType("Green")} className={`${giftType==="Green"&&"border-secondary-100"} hover:border-secondary-100 border transition duration-200 flex flex-col p-2 justify-centercursor-pointer`}>
                  <div className='w-10 h-9 bg-green-600 rounded'></div>
                 <div className='text-xs mx-auto text-customGray-200 my-0.5'>Green</div>
             </div>
             <div onClick={()=>setGiftType("Blue")} className={`${giftType==="Blue"&&"border-secondary-100"} hover:border-secondary-100 border transition duration-200 flex flex-col p-2 justify-centercursor-pointer`}>
                  <div className='w-10 h-9 bg-blue-600 rounded'></div>
                 <div className='text-xs mx-auto text-customGray-200 my-0.5'>Blue</div>
             </div>
          </div>
       <div className='flex justify-between'>
       <button onClick={()=>setPurshaseGift(false)} className={`active:scale-90 px-4 py-1 text-sm font-semibold text-center transition duration-150 bg-customGray-100 hover:bg-customGray-200 text-main rounded-full mt-4`}>cancel</button>          
       <button  className={`active:scale-90  px-4 py-1 text-sm font-semibold text-center bg-secondary-100 transition duration-150 hover:bg-secondary-200 text-white rounded-full mt-4`}>
            <span className='font-semibold'>preview</span> 
        </button> 
        <button  className={`active:scale-90 flex items-center px-4 py-1 text-sm font-semibold text-center bg-secondary-100 transition duration-150 hover:bg-secondary-200 text-white rounded-full mt-4`}>
        <MdOutlineShoppingCart className='text-2xl'/>
            <span className='font-semibold'>Add to card</span> 
        </button>          

       </div>
       </form>
     </div>
    
 </div>
  )
}

export default PurshaseGiftLayout