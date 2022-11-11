import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {  MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"

function CollectionBanner({collection}) {
   const [collectionItems,setCollectionItems]=useState(null)
   const {i18n} =useTranslation()
  useEffect(()=>{
     setCollectionItems(collection)
  },[collection])
  return (
    <div className=' relative'>
        {collectionItems&&<div className="w-full h-96 md:h-fit relative overflow-hidden" style={{backgroundColor:collectionItems.color}}>
           <div className='h-full relative top-0 right-0'>
              <video src={collectionItems.video} autoPlay loop className='w-auto h-auto hidden md:block' > 
              </video>
              <div className='absolute w-full flex items-center top-0 left-0 h-full'>
                <div className='container mx-auto px-4'>
                  <div className='font-sans text-white w-full  md:w-1/2'>
                  <h1 className='font-bold text-2xl md:text-3xl my-4'>{collectionItems.subtitle}</h1>
                  <p className=''>{collectionItems.desc}</p>
                  </div>
                  <div className='my-6 w-full'>
                    <Link href={`/cards/${collectionItems.title.toLowerCase()}`}>
                     <a className='w-full px-16  rounded-full text-center py-3 active:scale-90 transition duration-200 ease-in-out bg-white text-main hover:bg-customGray-100 font-bold capitalize' style={{color:collectionItems.color}}>Browse {collectionItems.title} Gift Cards</a>
                  </Link>
                  </div>
                  
                  <div className='flex items-center text-white py-2'>
                     <svg className='scale-50' width="137" height="101" viewBox="0 0 137 101" fill="none">
                      <path d="M90.79 50.865s6.796-4.239 6.796-11.726c0 0 .845-14.773-19.903-15.788V10h-8.025v13.351h-6.605V10h-8.037v13.351h-15.91a.653.653 0 00-.653.647v7.628c0 .355.294.647.653.647h7.321c1.344 0 2.445 1.079 2.445 2.424V73.01a2.05 2.05 0 01-2.06 2.044h-6.58a.45.45 0 00-.435.368l-1.241 8.63a.664.664 0 00.652.748h15.808v13.174h8.037V84.827h6.605V98h8.025V84.89s24.652 0 24.767-19.443c-.013-.012.665-10.863-11.66-14.582zm-27.737-18.58s3.418-.025 4.903 0c14.962.292 14.399 7.83 14.399 7.83-.141 9.62-14.515 8.974-14.515 8.974h-4.787V32.285zm23.142 33.442c0 9.429-15.398 9.34-15.398 9.34h-7.744V57.084H73.37c13.119 0 12.825 8.643 12.825 8.643z" fill="#fff"></path>
                      <path d="M113.163 20.51c.46-1.717 1.035-3.028 1.725-3.934.689-.906 1.717-1.702 3.084-2.387 1.382-.694 2.339-1.299 2.871-1.813a3.955 3.955 0 001.079-1.82c.556-2.073-.123-3.366-2.036-3.878-.908-.243-1.713-.157-2.416.26-.687.407-1.175 1.098-1.462 2.072l-5.334-1.43c.652-2.335 1.897-3.966 3.736-4.893 1.851-.923 4.064-1.04 6.639-.35 2.6.696 4.448 1.868 5.544 3.516 1.1 1.635 1.342 3.6.728 5.893a6.77 6.77 0 01-1.493 2.774c-.712.795-1.802 1.6-3.269 2.416l-1.87 1.017c-1.172.646-1.986 1.551-2.443 2.717l-.374 1.102-4.709-1.262zm-2.046 5.504c.22-.821.676-1.422 1.369-1.801.709-.389 1.499-.466 2.369-.233.871.233 1.51.694 1.917 1.381.423.678.524 1.429.304 2.25-.217.81-.672 1.404-1.365 1.783-.681.383-1.469.455-2.364.215-.895-.24-1.548-.698-1.958-1.373-.399-.672-.489-1.412-.272-2.222zM123.416 90.117c-.46-1.717-.618-3.14-.474-4.27.144-1.129.637-2.332 1.477-3.609.85-1.292 1.377-2.294 1.581-3.006.2-.724.208-1.429.024-2.116-.555-2.072-1.789-2.852-3.702-2.34-.908.244-1.562.721-1.963 1.433-.391.697-.468 1.539-.23 2.526l-5.334 1.43c-.603-2.35-.34-4.385.789-6.106 1.141-1.726 2.999-2.933 5.574-3.623 2.6-.697 4.787-.606 6.56.273 1.77.866 2.962 2.446 3.576 4.739a6.772 6.772 0 01.095 3.149c-.22 1.044-.761 2.287-1.624 3.727l-1.11 1.816c-.692 1.144-.945 2.336-.757 3.574l.227 1.142-4.709 1.261zm.979 5.79c-.22-.821-.125-1.57.286-2.245.419-.69 1.065-1.153 1.935-1.386.871-.233 1.654-.154 2.351.238.705.376 1.168.975 1.388 1.796.217.81.12 1.552-.29 2.227-.399.672-1.045 1.128-1.941 1.368-.895.24-1.689.17-2.382-.21-.681-.382-1.13-.978-1.347-1.788zM10.011 27.5c.889-1.54 1.783-2.657 2.684-3.354.9-.697 2.1-1.2 3.597-1.508 1.515-.313 2.596-.649 3.243-1.008a3.96 3.96 0 001.513-1.479c1.073-1.858.752-3.282-.963-4.272-.814-.47-1.614-.595-2.4-.375-.77.216-1.42.757-1.95 1.624l-4.782-2.762c1.234-2.087 2.86-3.34 4.875-3.76 2.027-.412 4.195.048 6.504 1.38 2.33 1.346 3.812 2.957 4.445 4.832.639 1.864.365 3.824-.822 5.88a6.764 6.764 0 01-2.16 2.293c-.894.584-2.155 1.08-3.783 1.488l-2.07.499c-1.298.32-2.32.984-3.062 1.991l-.647.968L10.01 27.5zM6.61 32.287c.425-.737 1.021-1.199 1.79-1.386.784-.192 1.567-.062 2.348.388.78.451 1.278 1.061 1.494 1.83.232.765.136 1.516-.289 2.252-.419.726-1.012 1.182-1.78 1.37-.757.193-1.536.058-2.339-.405-.803-.464-1.315-1.075-1.537-1.833-.21-.752-.106-1.49.313-2.216zM14.778 84.535c-.889-1.539-1.41-2.873-1.563-4.001-.152-1.128.012-2.418.494-3.869.486-1.468.735-2.572.748-3.312a3.96 3.96 0 00-.524-2.05C12.86 69.443 11.466 69.01 9.75 70c-.814.47-1.322 1.1-1.525 1.891-.198.774-.054 1.608.432 2.5l-4.783 2.761c-1.19-2.113-1.463-4.147-.818-6.102.656-1.962 2.138-3.61 4.447-4.942 2.33-1.346 4.466-1.824 6.406-1.434 1.934.379 3.494 1.596 4.681 3.652.54.934.842 1.94.907 3.017.058 1.066-.143 2.406-.604 4.02l-.602 2.041c-.373 1.285-.308 2.501.193 3.649L19 82.098l-4.222 2.437zm2.445 5.34c-.425-.737-.527-1.485-.305-2.243.226-.776.73-1.39 1.51-1.84.78-.45 1.558-.577 2.332-.379.779.181 1.381.64 1.806 1.377.42.725.518 1.467.296 2.226-.21.752-.717 1.36-1.52 1.823-.803.463-1.588.601-2.356.414-.756-.193-1.344-.653-1.763-1.379z" fill="#fff" fillOpacity=".42"></path>
                     </svg>
                     <div>
                       <h1 className='font-bold text-2xl'>New to Crypto?</h1>
                       <Link href={"/"}>
                        <a className='flex items-center hover:underline'>
                        <span>Check out our getting started guide</span>
                          {i18n.language==="ar"?<MdArrowBackIosNew className='mx-2'/>:<MdArrowForwardIos className='mx-2'/>}
                        </a>
                        </Link>
                     </div>
                  </div>
                </div>
                
          </div>
           </div>
        </div>}
        <hr/>
    </div>
  )
}

export default CollectionBanner