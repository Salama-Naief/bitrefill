import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CollectionItem({collection}) {
  console.log("collection",collection)
  return (
    <div className={`mx-4 text-white h-96 rounded-xl overflow-hidden`} style={{backgroundColor:collection.color}}>
        <div className='h-full relative overflow-hidden'>
          <div className='absolute top-5 left-0 right-0 z-10' >
            <Link href={`/collection/${collection.title}`}>
               <a>
                  <h1 className='text-center text-3xl pt-8 capitalize'>{collection.title}</h1>
               </a>
            </Link>
          </div>
            
           <div className='w-full h-full relative'>
             <Image src={collection.img} layout="fill" objectFit='cover' objectPosition="center" alt=''/>
           </div>
        </div>
        
    </div>
  )
}

export default CollectionItem