import React, { useContext, useState } from 'react'
import DetailsSection from '../../components/infoSection/DetailsSection'
import QuestionSection from '../../components/infoSection/QuestionSection';
import Layout from '../../components/layout/Layout'
import { Store } from '../../utils/Store';
import {cards} from "../../utils/dumycards"
import Link from 'next/link';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CardItems from '../../components/cards/CardItems';
import CardSlider from '../../components/cards/CardSlider';

function Card() {
  const router=useRouter()
  const {query}=router
  const {state} =useContext(Store);
    const {darkMode}=state;
    const [cardCategory,setCardCategory]=useState([])
    const [cardsItems,setCardsItems]=useState([])
    const [sorteType,setSortType]=useState('')
    const [travelCards,setTravelCards]=useState([])
    const [gamesCards,setGamesCards]=useState([])
    const [ecommerceCards,setEcommerceCards]=useState([])

    useEffect(()=>{
      const categoryArry=[]
        cards.map(card=>{
           if(!categoryArry.includes(card.category)){
            categoryArry.push(card.category)
           }
        })
        setCardCategory(categoryArry)
    },[])
  
    useEffect(()=>{
      let sortArr=[]
    
      if(sorteType==="popular"){
        sortArr.push(cardsItems.sort(function(a, b){return b.feedback.rate - a.feedback.rate }))
      }else if(sorteType==="az"){
        sortArr.push( cardsItems.sort(function(a, b){
         let x = a.title.toLowerCase();
         let y = b.title.toLowerCase();
         if (x < y) {return -1;}
         if (x > y) {return 1;}
         return 0;
       }))
       
       }else{
         sortArr.push(cardsItems)
       }
       if(sortArr.length>0){
         setCardsItems(...sortArr)
       }
    },[sorteType])
    

   useEffect(()=>{
    setEcommerceCards([])
    setGamesCards([])
    setTravelCards([])
   if(query.type==="all-gift-cards"){
      setCardsItems(cards)
     
    }else if(query.type==="top-products"){
      setCardsItems(cards)
      setEcommerceCards(cards.filter(c=>c.category.toLocaleLowerCase()==="ecommerce"))
      setTravelCards(cards.filter(c=>c.category.toLocaleLowerCase()==="travel"))
      setGamesCards(cards.filter(c=>c.category.toLocaleLowerCase()==="games"))
    }else{
      const items=cards.filter(card=>card.category.toLocaleLowerCase()===query.type.toLocaleLowerCase())
      setCardsItems(items)
    }
       
   },[query.type])

   const handleLinks=(type)=>{
      router.push(`/cards/${type}`)
   }

  return (
    <Layout title={`cards`}>
        <div className={`${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"}`}>
          <div className='container mx-auto'>
            <div className='md:grid md:grid-cols-5'>
               <div className='col-span-1  py-8 font-sans'>
                <div className='md:hidden px-4'>
                        <select name="" id="" onChange={(e)=>handleLinks(e.target.value)} className='px-6 w-full py-2 focus:outline-none rounded-full border-none  appearance-none ring-2 ring-customGray-200 ring-inherit bg-inherit text-inherit'>
                            <option value="all-gift-cards" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>
                            All gift cards
                            </option>
                            <option value="top-products" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>
                            Top Products
                            </option>
                              {
                                cardCategory.map((card,index)=>(
                        
                                  <option key={index} value={card} className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>
                                       {card}
                                    </option>
                                  
                                ))
                              }

                  
                     </select>
                </div>
                <div className='hidden md:block'>
                  <div className={`${query.type.toLocaleLowerCase()==="all-gift-cards"?"text-secondary-100":"text-inherit"} py-2 font-semibold`}>
                    <Link href={`/cards/all-gift-cards`}><a className='hover:underline transition duration-200 ease-in-out'>All gift cards</a></Link>
                  </div>
                <div className={`${query.type.toLocaleLowerCase()==="top-products"?"text-secondary-100":"text-inherit"} py-2 font-semibold`}>
                    <Link href={`/cards/top-products`}><a className='hover:underline transition duration-200 ease-in-out'>Top Products</a></Link>
                  </div>
                  {
                    cardCategory.map((card,index)=>(
                      <div key={index} className={`${query.type.toLocaleLowerCase()===card.toLocaleLowerCase()?"text-secondary-100":"text-inherit"} py-2 font-semibold`}>
                        <Link href={`/cards/${card.toLocaleLowerCase()}`}><a className='hover:underline transition duration-200 ease-in-out'>{card}</a></Link>
                      </div>
                    ))
                  }
                 </div>
               </div>
               <div className='col-span-4 p-4'>
                {travelCards.length>0&&<CardSlider title="For Your Travel Needs" category="travel" desc="Need new clothes, books or a computer? We got you!" cards={travelCards}/>}
                {gamesCards.length>0&&<CardSlider title="Gaming Cards We Love" category="games" desc="" cards={gamesCards}/>}
                {ecommerceCards.length>0&&<CardSlider title="Ecommerce Picks" category="ecommerce" desc="" cards={ecommerceCards}/>}
                  <div className='py-6 flex items-center justify-between px-2'>
                     <h1 className='text-2xl md:text-3xl font-bold capitalize'>{query.type}</h1>
                     <div className='flex items-center'>
                      <span className='px-2.5'>Sort by:</span>
                        <select name="" id="" value={sorteType} onChange={(e)=>setSortType(e.target.value)} className='px-6 py-1 focus:outline-none rounded-full border-none  appearance-none ring-2 ring-customGray-200 ring-inherit bg-inherit text-inherit'>
                        <option value="featured" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>Featured</option>
                        <option value="popular" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>Popular</option>
                        <option value="az" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>A-Z</option>
                        <option value="recentlyAdded" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>Recently Added</option>
                        <option value="rewarded" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>Rewarded</option>
                     </select>
                     </div>

                  </div>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-8 lg:gap-12 p-2'>
                   {
                    cardsItems.map(card=>(
                      <div key={card.id}>
                        <CardItems card={card}/>
                      </div>
                    ))
                   }
                </div>
                <div className='p-12 font-sans w-full flex justify-center'>
                  <div className='flex flex-col justify-center text-center'>
                    <div className='w-fit'>
                       <div className='font-semibold'>Showing {cardsItems.length} out of {cardsItems.length}</div>
                      <div className='w-full h-1 my-2 rounded-full bg-secondary-100'></div>
                     <span className='text-xs text-customGray-200'>Did not find what you were looking for? Request a product</span>
                    </div>
                  </div>
                </div>
                <DetailsSection/>
                <QuestionSection/>

               </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export async function getStaticPaths({locales}){
  const paths=[{params:{type:"top-products"},locale:locales[0]},{params:{type:"top-products"},locale:locales[1]},
       {params:{type:"all-gift-cards"},locale:locales[0]},{params:{type:"all-gift-cards"},locale:locales[1]},
      ]
  cards.map(card=>{
     locales.map(locale=>{
        paths.push({params:{type:card.category.toLocaleLowerCase().trim().replace(/ /g,"-")},locale})
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

export default Card