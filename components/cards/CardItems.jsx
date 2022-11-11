import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {BsStarFill} from "react-icons/bs"
import {motion} from "framer-motion"
import { useEffect } from 'react'
function CardItems({card,withOnlyImg,relatedCards}) {
  const [cardHover,setCardHover]=useState(false)

  if(!card){
    return;
  }
  return (
    <div onMouseEnter={()=>setCardHover(true)} onMouseLeave={()=>setCardHover(false)} className=' overflow'>
        <Link href={`/card/${card.title.trim().toLowerCase().replace(/ /g,"-")}`}>
          <a>
          <motion.div animate={cardHover?{y:-5}:{y:0}} className='w-full h-36  md:h-40 lg:h-52 relative'>
              <Image src={card.img} layout="fill" objectFit='fill' objectPosition="center" alt={card.title}/>
          </motion.div>
          { !withOnlyImg&&<div className='p-2'>
              <div className='flex justify-between items-center font-sans font-bold text-lg'>
                  <div>{card.title}</div>
                  <div className='flex items-center'>
                      <span className='px-2 text-sm'>{card.feedback.rate}</span>
                      <BsStarFill/>
                  </div>
              </div>
              {!relatedCards&&<div>
                <div className='text-customGray-200'>${card.priceFrom}-${card.priceTo}</div>
              <div className='text-orange-600'>{card.status}</div>
              </div>}
              
          </div>}
          </a>
        </Link>
        
        
    </div>
  )
}

export default CardItems