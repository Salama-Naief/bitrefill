import React, { useContext } from 'react'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import Layout from "../../components/layout/Layout"
import { useRouter } from 'next/router'
import { cards } from '../../utils/dumycards'
import { Store } from '../../utils/Store'
import Image from 'next/image'
import {HiHeart} from "react-icons/hi"

function SingleCard() {
    const router=useRouter()
    const {state} =useContext(Store);
    const {darkMode}=state;
    const title=router.query.type?router.query.type.replace("%20"," "):"";
    const card=cards.find(c=>c.title===title);

  return (
    <Layout title={title}>
         <div className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"}`}>

            <div className='container mx-auto'>
                <div className='md:grid grid-cols-2 '>
                    <div className={`${darkMode?"bg-customGray-200":"bg-customGray-100"} p-12 flex justify-center items-center relative`}>
                        <div className='w-80 h-80 relative'>
                            <Image src={card.img} width={2} height={2} layout="fill"  alt={card.title}/>
                        </div>
                        <div className={`${darkMode?"bg-dark-200":"bg-white"} cursor-pointer p-1 rounded-full absolute top-5 right-5`}>
                        <HiHeart className={`text-customGray-200 text-2xl`} />
                    </div>
                    </div>
                    
                </div>
            </div>
         </div>
    </Layout>
  )
}

export async function getServerSideProps({locale}) {
  
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