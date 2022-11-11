import React from 'react'
import { collections } from '../../utils/dumyData'
import CollectionItem from './CollectionItem'

function Collections({type}) {

  const collectionSliderItems= type?collections.filter(c=>c.title!==type):collections
  return (
    <div className={`container mx-auto py-24`} >
        <h1 className='text-center text-3xl font-bold  py-4'>Explore More Collections</h1>
        <div className=" md:flex justify-between flex-wrap py-8">
          {
            collectionSliderItems.map((collection,index)=>(
              
               index<3&& <div key={collection.id} className="w-full my-4 md:w-1/3">
                    <CollectionItem collection={collection}/>
                </div>
            ))
        }
        </div>
        
    </div>
  )
}

export default Collections