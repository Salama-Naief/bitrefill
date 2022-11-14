import Link from 'next/link'
import {useContext, useState} from 'react'
import { GrLanguage } from 'react-icons/gr'
import {useTranslation} from "next-i18next"
import { Store } from '../../utils/Store';
import Image from 'next/image';
import {FiFacebook,FiInstagram,FiTwitter} from "react-icons/fi"
import OptionsLayout from '../overlay/OptionsOverLay';


export default  function Footer() {
    const {state,dispatch} =useContext(Store);
    const {darkMode,countary}=state;
    const [optionLayout,setOptionLayout]=useState(false)
    const [countaryInput,setCountaryInput]=useState("")
    const [langInput,setLangInput]=useState("")
   
    
    const {t,i18n} =useTranslation();

    const handeTheme=(e)=>{
        console.log(e.target.value)
        dispatch({type:"DARK_MODE",payload:e.target.value==="dark"?true:false})
    }

  return (

    <div className={`${darkMode?"bg-dark-100  text-white":"text-main bg-customGray-100"} py-24 relative bottom-0 left-0`}>
        <div className='container mx-auto '>
          <div className='md:grid md:grid-cols-5 px-6 md:px-0'>
          <div className='col-span-1'>
              <ul>
                  <li>
                      <Link href={"/"} passHref><a className="text-2xl lg:text-3xl font-extrabold">Bitrefill</a></Link>
                  </li>
                  <li>
                  <div onClick={()=>setOptionLayout(true)} className={`flex items-center rounded-full cursor-pointer px-2 py-1 w-fit my-2 transition duration-200 ${darkMode?"hover:bg-dark-100":"hover:bg-customGray-200"}`}>
                      <div className='relative w-6 h-6 rounded-full overflow-hidden'>
                              <Image src="/img/eg-flag.png" width={10} heigh={10} layout="fill" objectFit='center' objectPosition="center" alt=""/>
                      </div>
                      <div className='capitalize mx-1'>{countary}</div>
                  </div>
                  </li>
                <li>
                <div onClick={()=>setOptionLayout(true)} className={`flex items-center  rounded-full cursor-pointer px-2 w-fit transition duration-200 ${darkMode?"hover:bg-dark-100":"hover:bg-customGray-200"}`}>
                      <GrLanguage className='text-xl'/>
                      <div className='capitalize mx-1'>{i18n.language==="ar"?"Arabic":"english"}</div>
                  </div>
                  </li> 
            
              </ul>
          </div>
          {optionLayout&&<OptionsLayout setOptionLayout={setOptionLayout}/>}
          <div className='col-span-1'>
            <div className='text-lg font-semibold pb-4'>Live on crypto</div>
              <ul>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Gift Cards</a></Link>
                  </li>  
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Phone Refills</a></Link>
                  </li>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Rewards</a></Link>
                  </li>
              </ul>
          </div>
          <div className='col-span-1'>
            <div className='text-lg font-semibold pb-4'>Support</div>
              <ul>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Help</a></Link>
                  </li>  
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Contact Us</a></Link>
                  </li>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Product Request</a></Link>
                  </li>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Purchase Limits</a></Link>
                  </li>
              </ul>
          </div>
          <div className='col-span-1'>
            <div className='text-lg font-semibold pb-4'>Company</div>
              <ul>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Careers</a></Link>
                  </li>  
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Press</a></Link>
                  </li>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Blog</a></Link>
                  </li>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Reviews</a></Link>
                  </li>
              </ul>
          </div>
          <div className='col-span-1'>
            <div className='text-lg font-semibold pb-4'>Resources</div>
              <ul>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Integrate Bitrefill</a></Link>
                  </li>  
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Refer-a-Friend Program</a></Link>
                  </li>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Affiliate</a></Link>
                  </li>
                  <li className='py-1.5'>
                      <Link href={"/"} passHref><a className={`${darkMode?"hover:text-white":"hover:text-main"} text-customGray-200 transition duration-200`}>Video Tutorials</a></Link>
                  </li>
              </ul>
          </div>
          </div>
          <div className='py-4'>
             <hr/>
          </div>
          <div className='px-4 md:px-0 md:grid md:grid-cols-2'>
            <div className='col-span-1 flex  my-4 md:my-0'>
                <Link href={"#"} passHref>
                   <a className={`${darkMode?"hover:text-white":"hover:text-main"} px-4 text-customGray-200 transition duration-200`}>Terms and Conditions</a>
                </Link>
                <Link href={"#"} passHref>
                   <a className={`${darkMode?"hover:text-white":"hover:text-main"} px-4 text-customGray-200 transition duration-200`}>Privacy Policy</a>
                </Link>
            </div>
            <div className="col-span-1 text-center justify-between md:flex  my-4 md:my-0">
                <div className=''>
                   <span className='mx-2'>theme :</span>
                   <select name="" id="" value={darkMode?"dark":"light"} onChange={(e)=>handeTheme(e)} className={`${darkMode?"border-customGray-200":"border-main"} py-1 outline-none border  bg-transparent px-4 rounded-full`}>
                     <option value="light" className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-200 text-main"} py-1`}>light</option>
                     <option value="dark" className={`${darkMode?"bg-dark-200 text-white":"bg-customGray-200 text-main"} py-1`}>dark</option>
                   </select>
                </div>
                <div className='flex items-center justify-center my-4 md:my-0'>
                <a href="#" className={`${darkMode?"hover:text-white ":"hover:text-main " }  text-customGray-200 transition duration-200 mx-2 p-1 rounded-full`}>
                    <FiFacebook className={`text-xl`}/>
                </a>
                <a href="#" className={`${darkMode?"hover:text-white ":"hover:text-main " }  text-customGray-200 transition duration-200 mx-2 p-1 rounded-full`}>
                    <FiTwitter className={`text-xl`}/>
                </a>
                <a href="#" className={`${darkMode?"hover:text-white ":"hover:text-main " }  text-customGray-200 transition duration-200 mx-2 p-1 rounded-full`}>
                    <FiInstagram className={`text-xl`}/>
                </a>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
  }

