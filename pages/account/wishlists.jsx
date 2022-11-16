import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Store } from '../../utils/Store';
import Link from 'next/link';
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {MdOutlineDeleteOutline} from "react-icons/md";
import Image from 'next/image';
import MenuList from '../../components/menus/MenuList';


const Item=({item})=>{
  const {state,dispatch} =useContext(Store);
  const {darkMode}=state
  const [cardHover,setCardHover]=useState(false)

const handleRemove=(item)=>{
  dispatch({type:"REMOVE_FROM_WISHLIST",payload:item})
}
  return(
      <div onMouseEnter={()=>setCardHover(true)} onMouseLeave={()=>setCardHover(false)} className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} w-full border shadow`}>
        <motion.div animate={cardHover?{y:-5}:{y:0}} className='w-full h-36 relative'>
          { item.img&&<Image src={item.img} layout="fill" objectFit='fill' objectPosition="center" alt={item.title}/>}
        </motion.div>
        <div className='p-2'>
            <div className='flex justify-between items-center font-sans text-sm font-bold'>
                <Link href={`/card/${item.title.toLowerCase().trim().replace(/ /g,"-")}`}><a>{item.title}</a></Link>
                <div className='flex items-center'>
                    <MdOutlineDeleteOutline onClick={()=>handleRemove(item)} className='text-xl hover:text-secondary-100 cursor-pointer'/>
                </div>
            </div>                
        </div>
      </div>
  )
}

function Wishlists() {
  const router=useRouter()
  const {query}=router
  const {state,dispatch} =useContext(Store);
  const {darkMode}=state;
  const [usedProductd,setUsedProductd]=useState(false)

  return (
    <Layout title={`account-order`}>
        <div className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"}`}>
          <div className='container mx-auto p-8'>
            <div className='md:grid md:grid-cols-4 gap-2'>
               <div className={`col-span-1 py-1 rounded font-sans shadow ${darkMode?"bg-dark-100 text-white":"bg-white text-main"}`}>
                 <MenuList type={"wishlists"}/> 
               </div>
               <div className={`col-span-3 rounded px-6 py-4 ${darkMode?"bg-dark-200 text-white":"bg-customGray-100 text-main"}`}>
                 <div className='pb-4 px-4 flex justify-between'>
                  <span className='text-2xl font-bold'>Wishlists</span>     
                 </div>

                  <div className='flex justify-center w-full py-8'>
                   {
                     state.wishlist.length?
                     <div className="grid grid-cols-4 gap-2 w-full">
                      {
                        state.wishlist.map((item,index)=>(
                        <div key={index}>
                          <Item item={item}/>
                        </div>
                     ))
                      }
                     </div>
                     
                     :<div>
                        <div>You have no unused products</div>
                        <div className={`m-4 text-center px-4 bg-secondary-100 hover:bg-secondary-200 text-sm font-semibold text-white rounded-full py-3`}>
                            <Link href={"/cards/top-products"}>
                                <a  className='text-center'>Browse products</a>
                            </Link>
                        </div>
                    </div>
                    }
                   
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

export default Wishlists