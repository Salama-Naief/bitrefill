import React from 'react'
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { MdOutlineClear} from "react-icons/md"
import { GrLanguage } from "react-icons/gr"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import OptionsLayout from '../layout/OptionsLayout';

function TopNavbar() {
  const {state,dispatch} =useContext(Store);
  const {darkMode,countary}=state;
  const [optionLayout,setOptionLayout]=useState(false)
  
  
  const {t,i18n} =useTranslation();

 
  return (
    <div className={`${darkMode?"bg-dark-100 text-white":"bg-customGray-100 text-main"} hidden md:flex justify-end`}>
      <div className={`container mx-auto flex justify-end py-1`}>
           <div onClick={()=>setOptionLayout(true)} className={`flex items-center rounded-full cursor-pointer px-2 py-1 transition duration-200 ${darkMode?"hover:bg-dark-100":"hover:bg-customGray-200"}`}>
            <div className='relative w-6 h-6 rounded-full overflow-hidden'>
             <Image src="/img/eg-flag.png" width={10} heigh={10} layout="fill" objectFit='center' objectPosition="center"/>
            </div>
            <div className='capitalize mx-1'>{countary}</div>
           </div>
           <div onClick={()=>setOptionLayout(true)} className={`flex items-center mx-4 rounded-full cursor-pointer px-2 py-1 transition duration-200 ${darkMode?"hover:bg-dark-100":"hover:bg-customGray-200"}`}>
             <GrLanguage className='text-xl'/>
            <div className='capitalize mx-1'>{i18n.language==="ar"?"Arabic":"english"}</div>
           </div>
           <div className={`flex items-center  rounded-full cursor-pointer px-2 py-1 transition duration-200 ${darkMode?"hover:bg-dark-100":"hover:bg-customGray-200"}`}>
             <AiOutlineQuestionCircle className='text-xl'/>
            <div className='capitalize mx-1'>help</div>
           </div>
      </div>
    { optionLayout&&<OptionsLayout setOptionLayout={setOptionLayout}/>}
    </div>
  )
}

export default dynamic(() => Promise.resolve(TopNavbar), { ssr: false });
