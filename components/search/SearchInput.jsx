import { useTranslation } from 'next-i18next';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { Store } from '../../utils/Store';

function SearchInput({bgWhite}) {
    const {state} =useContext(Store);
    const {darkMode}=state;
    const {t,i18n} =useTranslation();
    const [search,setSearch]=useState("");


    const handleSearchSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='w-full'>
        <form onSubmit={handleSearchSubmit} className={`flex mx-6 text-gray-900 items-center relative `}>
            <div className="flex items-center  relative rounded-full w-full">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" className={`${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":`focus:border-customGray-200 border-2 border-customGray-100 text-main focus:bg-white ${bgWhite?"bg-white":"bg-customGray-100"} `}  focus:outline-none flex-grow transition duration-200  px-6 py-2 w-full h-full rounded-full`} placeholder={t("common:search")}/>
            <div className="absolute top-1/6 right-0">
                <MdOutlineSearch  className="text-3xl text-customGray-200 cursor-pointer text-primary"/>
            </div>
            </div>
            {search&&<div className='p-4 absolute top-6 z-40 left-0 bg-transparent w-full rounded-xl overflow-hidden'>
                <div className={`${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"} p-4 rounded-xl`}>
                    no card found
                </div>
            </div>}
        </form>
    </div>
  )
}

export default SearchInput