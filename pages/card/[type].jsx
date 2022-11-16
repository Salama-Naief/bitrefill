import React, { useContext } from 'react'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import Layout from "../../components/layout/Layout"
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { cards } from '../../utils/dumycards'
import { Store } from '../../utils/Store'
import Image from 'next/image'
import {HiHeart} from "react-icons/hi"
import { BsStarFill } from 'react-icons/bs'
import { ImGift } from 'react-icons/im'
import ReviewStars from "../../components/reviewSection/ReviewStars"
import CardItems from "../../components/cards/CardItems"
import DetailsSection from "../../components/infoSection/DetailsSection"
import QuestionSection from "../../components/infoSection/QuestionSection"
import SecurityInfoSection from "../../components/infoSection/SecurityInfoSecton"
import Link from 'next/link'
import { useState } from 'react'
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineShoppingCart} from "react-icons/md"
import {BsCurrencyDollar, BsCurrencyEuro, BsCurrencyPound,BsCurrencyBitcoin} from "react-icons/bs"
import PurshaseGiftOverlay from '../../components/overlay/PurshaseGiftOverlay'

function SingleCard() {
    const router=useRouter()
    const {state,dispatch} =useContext(Store);
    const {darkMode}=state;
    const [priceType,setPriceType]=useState({amount:6})
    const [priceMenu,setPriceMenu]=useState(false)
    const [cardDetails,setCardDetails]=useState("Description")
    const [price,setPrice]=useState(0)
    const [purshaseGift,setPurshaseGift]=useState(false)
    const title=router.query.type?router.query.type.replace(/-/g," "):"";
    const card=cards.find(c=>c.title.toLocaleLowerCase()===title.toLocaleLowerCase());
    const relatedCards=cards.filter(c=>c.category===card.category)
    
    const loved=state.wishlist.filter(c=>c.id===card.id)
   
    console.log("loved",loved)

    const handleCartShippig=(e)=>{
      e.preventDefault()
      dispatch({type:"ADD_TO_CART",payload:{...card,price,amount:1}}) 
      dispatch({type:"UPDATE_SHIPPING_MENU",payload:true}) 
    }

    const handleWishlist=()=>{
      if(loved.length>0){
        dispatch({type:"REMOVE_FROM_WISHLIST",payload:card}) 
      }else{
        dispatch({type:"ADD_TO_WISHLIST",payload:card}) 
      }
    }
  
  return (
    <Layout title={title}>
         <div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} relative`}>
             {purshaseGift&&<PurshaseGiftOverlay card={card} setPurshaseGift={setPurshaseGift} price={price}/>}
            <div className='container mx-auto'>
                <div className=' md:grid grid-cols-2 '>
                  <div className=' md:p-8 h-fit md:sticky top-0'>
                    <div className={`${darkMode?"bg-customGray-200":"bg-customGray-100"} p-12 flex justify-center items-center relative`}>
                        <div className='w-80 h-80 relative'>
                            <Image src={card.img} width={2} height={2} layout="fill"  alt={card.title}/>
                        </div>
                        <div onClick={()=>handleWishlist()} className={`${darkMode?"bg-dark-200":"bg-white"} ${loved.length>0&&"bg-secondary-100"} transtion duration-200 hover:bg-secondary-100 cursor-pointer p-1 rounded-full absolute top-2 right-2 md:top-5 md:right-5`}>
                        <HiHeart className={`hover:text-white text-2xl ${loved.length>0?"text-white":"text-customGray-200"}`} />
                    </div>
                    </div>
                  </div>
                    
                    <div className="p-4 md:p-6 lg:p-8">
                       <div className='text-sm '>
                          <span className='text-customGray-200'>{card.countary}/</span>
                          <span className='text-customGray-200'><Link href={`/cards/${card.category}`}><a>{card.category}/</a></Link></span>
                          <span>{card.title}</span>
                       </div>
                       <div className="flex pt-4">
                        <h1 className='md:text-2xl font-bold'>{card.title}</h1>
                         <div className={` mx-1 px-3 text-xs rounded-full flex items-center  ${card.status==="featured"?darkMode?"bg-customGray-200":"bg-dark-100 text-white":card.status==="new"?"bg-secondary-200 text-white":card.status==="out of stock"&&"bg-yellow-600 text-main"}`}>{card.status}</div> 
                         <div className={` mx-1 px-4 text-xs rounded-full flex items-center bg-yellow-400  }`}><BsStarFill className='mx-1'/> {card.sale} Rewards</div> 
                       </div>
                       <div className="flex items-center">
                          <ReviewStars rate={card.feedback.rate}/>
                           <Link href={"/"}><a className='text-customGray-200 hover:underline'>Rating: {card.feedback.rate} - {card.feedback.reviews} reviews</a></Link>
                       </div>
                       <div className='px-4 py-1 border w-fit text-sm text-customGray-200'>This gift card is only redeemable on the e-commerce platform</div>
                       <div className='py-4 text-customGray-200 text-sm '>{card.excrept}</div>

                       <form onSubmit={(e)=>handleCartShippig(e)}>
                          <div className='font-bold font-sans text-xl py-4'>Enter the amount</div>
                          <div className='md:flex items-center relative'>

                             <input type="number" onChange={(e)=>setPrice(e.target.value)} required min={card.priceFrom} max={card.priceTo} className={`${darkMode?"focus:ring-secondary-100":"focus:ring-main"}  appearance-none w-64 py-1.5 text-customGray-200  rounded-xl px-4 outline-none ring-2 ring-gray-200 md:text-xl`} placeholder={`$${card.priceFrom}-${card.priceTo}`}/>
                             <div className='m-4 md:mx-8 relative'>
                              
                                <dev onClick={()=>setPriceMenu(!priceMenu)} className='cursor-pointer font-sans '>
                                  <div className='font-semibold text-sm md:text-base'>Estimated price</div>
                                   <div className='flex items-center'>
                                    <span className='mx-1'>${priceType.amount}</span>
                                   </div>
                                    
                                  </dev>
                                {priceMenu&&<ul className={`bg-customGray-100 rounded-md absolute h-40 overflow-y-auto overflow-x-hidden z-10 top-14 left-0 border py-2 px-4`}>
                                
                                       <li onClick={()=>{setPriceType({amount:10}); setPriceMenu(false)}} className='flex my-1 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-green-500'>
                                           <BsCurrencyDollar/>
                                       </div>
                                        <span className='mx-1 text-xs'>USD</span>
                                      </li>
                                      <li onClick={()=>{setPriceType({amount:10}); setPriceMenu(false)}} className='flex my-1 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-slate-500'>
                                           <BsCurrencyDollar/>
                                       </div>
                                        <span className='mx-1 text-xs'>UAD</span>
                                      </li>
                                      <li onClick={()=>{setPriceType({amount:10}); setPriceMenu(false)}} className='flex my-1 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-orange-500'>
                                           <BsCurrencyDollar/>
                                       </div>
                                        <span className='mx-1 text-xs'>CAD</span>
                                      </li>
                                      <li onClick={()=>{setPriceType({amount:10}); setPriceMenu(false)}} className='flex my-1 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-cyan-600'>
                                           <BsCurrencyEuro/>
                                       </div>
                                        <span className='mx-1 text-xs'>Euro</span>
                                      </li>
                                      <li onClick={()=>{setPriceType({amount:10}); setPriceMenu(false)}} className='flex my-1 items-center cursor-pointer'>
                                       <div className='rounded-full p-1 bg-yellow-300'>
                                           <BsCurrencyBitcoin/>
                                       </div>
                                        <span className='mx-1 text-xs'>bitcion</span>
                                      </li>
                                   
                                </ul>}
                                
                             </div>
                          </div>
                       <div className='md:flex items-center justify-between py-4'>
                          <button type="submit"  className='w-full md:w-2/3 active:scale-90 transition duration-200 ease-in-out bg-secondary-100 hover:bg-secondary-200 text-white flex items-center justify-center py-2.5 rounded-full'>
                            <MdOutlineShoppingCart className='text-2xl'/>
                              <span className='font-semibold'>Add to card</span> 
                          </button>
                          <button onClick={()=>setPurshaseGift(true)} className='my-4 md:my-0 md:mx-4 w-full md:w-1/3 flex items-center justify-center py-2.5 rounded-full active:scale-90 transition duration-200 ease-in-out bg-customGray-100 hover:bg-customGray-200 text-main'>
                            <ImGift className='text-2xl mx-1'/>
                            <span className='font-semibold text-sm'>Purshase as gift </span>
                          </button>
                        </div>
                       </form>

                        <div className='flex justify-between p-4'>
                            <div className='flex items-center'>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path stroke='#39d57d' d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43726 15.628 1.87979 13.4881 2.02167 11.3363C2.16356 9.18455 2.9972 7.13631 4.39828 5.49706C5.79935 3.85781 7.69278 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path stroke='#39d57d' d="M22 4L12 14.01L9 11.01"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                              <span className=' mx-2 text-sm text-customGray-200'>Instant, Private, Safe</span>
                            </div>
                            <div className='flex items-center'>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path stroke='#39d57d' d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43726 15.628 1.87979 13.4881 2.02167 11.3363C2.16356 9.18455 2.9972 7.13631 4.39828 5.49706C5.79935 3.85781 7.69278 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path stroke='#39d57d' d="M22 4L12 14.01L9 11.01"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                              <span className=' mx-2 text-sm text-customGray-200'>Email Delivery</span>
                            </div>
                        </div>
                        <div className='py-4'>
                        <div onClick={()=>setCardDetails(cardDetails==="Description"?"":"Description")} className='py-2 group clicked'>
                            <div className='font-semibold flex justify-between cursor-pointer '><div>Description</div>{cardDetails==="Description"?<MdKeyboardArrowDown className='font-normal text-2xl'/>:<MdKeyboardArrowUp className='font-normal text-2xl'/>}</div>
                            {<motion.div initial={{opacity:0}} animate={cardDetails==="Description"?{opacity:1,display:"block"}:{opacity:0,display:"none"}} className='text-sm text-customGray-200 py-2 '>{card.description}</motion.div>}
                            <div className='py-4 '>
                                <div className='w-full h-px bg-gray-400'></div>
                            </div>
                        </div>
                        {card.howToRedeem&&<div onClick={()=>setCardDetails(cardDetails==="HowtoRedeem"?"":"HowtoRedeem")} className='py-2 group clicked'>
                            <div className='font-semibold flex justify-between cursor-pointer '><div>How to Redeem</div>{cardDetails==="HowtoRedeem"?<MdKeyboardArrowDown className='font-normal text-2xl'/>:<MdKeyboardArrowUp className='font-normal text-2xl'/>}</div>
                            {<motion.div initial={{opacity:0}} animate={cardDetails==="HowtoRedeem"?{opacity:1,display:"block"}:{opacity:0,display:"none"}} className='text-sm text-customGray-200 py-2 '>{card.howToRedeem}</motion.div>}
                            <div className='py-4 '>
                                <div className='w-full h-px bg-gray-400'></div>
                            </div>
                        </div>}
                        {card.reviews.length>0&&<div onClick={()=>setCardDetails(cardDetails==="Reviews"?"":"Reviews")} className='py-2 group clicked'>
                            <div className='font-semibold flex justify-between cursor-pointer '><div>Reviews ({card.feedback.reviews})</div><div className='flex items-center'><ReviewStars rate={card.feedback.rate}/> {cardDetails==="Reviews"?<MdKeyboardArrowDown className='font-normal text-2xl'/>:<MdKeyboardArrowUp className='font-normal text-2xl'/>}</div></div>
                            {<motion.div initial={{opacity:0}} animate={cardDetails==="Reviews"?{opacity:1,display:"block"}:{opacity:0,display:"none"}} className='text-sm  py-2 '>
                               {card.reviews.map((review,index)=>(
                                <div key={index} className=" py-2 text-sm">
                                   <div className='flex items-center '>
                                     <div className='relative w-10 h-10 rounded-full overflow-hidden'><Image src={"/img/images_avatar1.svg"} layout='fill' objectFit='contain' objectPosition="center" alt='' /></div>
                                    
                                      <div className=' flex justify-between mx-4 w-full'>
                                        <div >
                                            <div className='font-semibold'>{review.name}</div>
                                            <div className='text-customGray-200 my-1'>{review.date}</div>
                                        </div>
                                        <ReviewStars rate={review.rate}/>
                                      </div>
                                     
                                   
                                   </div>
                                   
                                   <div className='py-1'>{review.message}</div>
                                </div>
                               )) 
                               }
                              </motion.div>}
                            <div className='py-4 '>
                                <div className='w-full h-px bg-gray-400'></div>
                            </div>
                        </div>}
                        {card.termsandconditions&&<div onClick={()=>setCardDetails(cardDetails==="terms-and-Conditions"?"":"terms-and-Conditions")} className='py-2 group clicked'>
                            <div className='font-semibold flex justify-between cursor-pointer '><div>Terms and Conditions</div>{cardDetails==="terms-and-Conditions"?<MdKeyboardArrowDown className='font-normal text-2xl'/>:<MdKeyboardArrowUp className='font-normal text-2xl'/>}</div>
                            {<motion.div initial={{opacity:0}} animate={cardDetails==="terms-and-Conditions"?{opacity:1,display:"block"}:{opacity:0,display:"none"}} className='text-sm text-customGray-200 py-2 '>{card.termsandconditions}</motion.div>}
                            <div className='py-4 '>
                                <div className='w-full h-px bg-gray-400'></div>
                            </div>
                        </div>}
                        </div>
                    </div>
                </div>

                {/** related products*/}
                <div>
                   <h1 className='text-xl font-semibold'>More products on Bitrefill</h1>
                   <div className="flex flex-wrap">
                    {
                        relatedCards&&relatedCards.map((card,index)=>(
                          <div key={index} className='p-4 w-1/2 md:w-1/3 ld:w-1/4'>
                             <CardItems card={card} relatedCards={true}/>
                          </div>
                        ))
                    }
                   </div>
                    <div className='flex justify-center my-4'>
                      <Link href={`/cards/${card.category.toLocaleLowerCase()}`}>
                         <a className='px-8 flex items-center justify-center py-2.5 rounded-full active:scale-90 transition duration-200 ease-in-out bg-customGray-100 w-fit hover:bg-customGray-200 text-main'>See All</a>
                      </Link>
                    </div>
                    <DetailsSection/>
                    <div className='my-4'>
                    <SecurityInfoSection/>
                    </div>
                    <QuestionSection/>
                    
                </div>
            </div>
         </div>
    </Layout>
  )
}

export async function getStaticPaths({locales}){
  const paths=[]
  cards.map(card=>{
     locales.map(locale=>{
        paths.push({params:{type:card.title.toLocaleLowerCase().trim().replace(/ /g,"-")},locale})
     })
  })

  return {
      paths,
      fallback: false
  }
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
export default SingleCard