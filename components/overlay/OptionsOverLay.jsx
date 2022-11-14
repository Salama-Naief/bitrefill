import { useTranslation } from 'next-i18next';
import React, { useContext, useState } from 'react'
import { MdOutlineClear } from 'react-icons/md';
import { Store } from '../../utils/Store';

function OptionsLayout({setOptionLayout}) {
    const {state,dispatch} =useContext(Store);
    const {t,i18n} =useTranslation();
    const {darkMode,countary}=state;
    const [countaryInput,setCountaryInput]=useState(countary)
    const [langInput,setLangInput]=useState(i18n.language)
    
    console.group("state",state)
    const handleSave=()=>{
        dispatch({type:"ADD_COUNTARY",payload:countaryInput})
        i18n.changeLanguage(langInput)
        setOptionLayout(false)
      }
  return (
    <div className={` fixed top-0 left-0 flex justify-center items-center w-full h-screen z-20  `}>
      <div onClick={()=>setOptionLayout(false)} className='absolute top-0 left-0 bg-gray-800 opacity-80 w-full h-full z-30'></div>
    <div className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"}  z-40 w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow relative`}>
     <h1 className='text-2xl'>Country & Language</h1>
     <div className='text-customGray-200 mt-4'>Countary</div>
       <select name="" id="" value={countaryInput} onChange={(e)=>setCountaryInput(e.target.value)} className={`${darkMode?"focus:outline-secondary-100":"outline-main"} text-main relative w-full py-2 border border-customGray-200`}>
         <option value="US" className={""}>Us</option>
         <option value="Egypt" className={""}>Egypt</option>
       </select>
       <div className='text-customGray-200 mt-4'>Language</div>
       <select name="" id="" value={langInput} onChange={(e)=>setLangInput(e.target.value)} className={`${darkMode?"focus:outline-secondary-100":"outline-main"} text-main relative w-full py-2 border border-customGray-200`}>
         <option value="en" className={""}><span>English</span></option>
         <option value="ar" className={""}><span>Arabic</span></option>

       </select>
       <div className={`absolute ${i18n.language==="ar"?"left-5":"right-5"} top-5 cursor-pointer`} onClick={()=>setOptionLayout(false)}><MdOutlineClear className="text-3xl"/></div>
       <button onClick={handleSave} className={`w-full py-2 font-semibold text-center bg-secondary-100 transition duration-150 hover:bg-secondary-200 text-white rounded-full mt-4`}>Save</button>          
     </div>
    
 </div>
  )
}

export default OptionsLayout