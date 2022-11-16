import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Layout from "../components/layout/Layout"
import CardItems from '../components/cards/CardItems';
import { Store } from '../utils/Store';
import SearchInput from '../components/search/SearchInput';
import { cards } from '../utils/dumycards';
import DetailsSection from '../components/infoSection/DetailsSection';
import SecurityInfoSection from '../components/infoSection/SecurityInfoSecton';

import  countryCodes from 'country-codes-list'
 
const CountryiesAndphones=()=>{
  return(
    <select name="country" s className='text-xs white-space-wraps text-center w-fit md:py-4 focus:outline-none  border-none   bg-inherit text-inherit'>
      <option value="AD">Andorra(+376)🇦🇩</option>
      <option value="AF">Afghanistan(+93)🇦🇫</option>
      <option value="AI">Anguilla(+1)🇦🇮</option>
      <option value="AL">Albania(+355)🇦🇱</option>
      <option value="AM">Armenia(+374)🇦🇲</option>
      <option value="AO">Angola(+244)🇦🇴</option>
      <option value="AR">Argentina(+54)🇦🇷</option>
      <option value="AT">Austria(+43)🇦🇹</option>
      <option value="AU">Australia(+61)🇦🇺</option>
      <option value="AW">Aruba(+297)🇦🇼</option>
      <option value="AZ">Azerbaijan(+994)🇦🇿</option>
      <option value="BB">Barbados(+1)🇧🇧</option>
      <option value="BD">Bangladesh(+880)🇧🇩</option>
      <option value="BE">Belgium(+32)🇧🇪</option>
      <option value="BF">Burkina Faso(+226)🇧🇫</option>
      <option value="BG">Bulgaria(+359)🇧🇬</option>
      <option value="BH">Bahrain(+973)🇧🇭</option>
      <option value="BI">Burundi(+257)🇧🇮</option>
      <option value="BJ">Benin(+229)🇧🇯</option>
      <option value="BM">Bermuda(+1)🇧🇲</option>
      <option value="BO">Bolivia(+591)🇧🇴</option>
      <option value="BQ">Bonaire(+599)🇧🇶</option>
      <option value="BR">Brazil(+55)🇧🇷</option>
      <option value="BS">Bahamas(+1)🇧🇸</option>
      <option value="BT">Bhutan(+975)🇧🇹</option>
      <option value="BW">Botswana(+267)🇧🇼</option>
      <option value="BY">Belarus(+375)🇧🇾</option>
      <option value="BZ">Belize(+501)🇧🇿</option>
      <option value="CA">Canada(+1)🇨🇦</option>
      <option value="CG">Congo(+242)🇨🇬</option>
      <option value="CH">Switzerland(+41)🇨🇭</option>
      <option value="CI">Ivory Coast(+225)🇨🇮</option>
      <option value="CL">Chile(+56)🇨🇱</option>
      <option value="CM">Cameroon(+237)🇨🇲</option>
      <option value="CN">China(+86)🇨🇳</option>
      <option value="CO">Colombia(+57)🇨🇴</option>
      <option value="CR">Costa Rica(+506)🇨🇷</option>
      <option value="CU">Cuba(+53)🇨🇺</option>
      <option value="CV">Cape Verde(+238)🇨🇻</option>
      <option value="CW">Curacao(+599)🇨🇼</option>
      <option value="CY">Cyprus(+357)🇨🇾</option>
      <option value="DE">Germany(+49)🇩🇪</option>
      <option value="DJ">Djibouti(+253)🇩🇯</option>
      <option value="DK">Denmark(+45)🇩🇰</option>
      <option value="DM">Dominica(+1)🇩🇲</option>
      <option value="DZ">Algeria(+213)🇩🇿</option>
      <option value="EC">Ecuador(+593)🇪🇨</option>
      <option value="EE">Estonia(+372)🇪🇪</option>
      <option value="EG">Egypt(+20)🇪🇬</option>
      <option value="ES">Spain(+34)🇪🇸</option>
      <option value="ET">Ethiopia(+251)🇪🇹</option>
      <option value="EU">Eurozone </option>
      <option value="FI">Finland(+358)🇫🇮</option>
      <option value="FJ">Fiji(+679)🇫🇯</option>
      <option value="FR">France(+33)🇫🇷</option>
      <option value="GB">United Kingdom(+44)🇬🇧</option>
      <option value="GD">Grenada(+1)🇬🇩</option>
      <option value="GE">Georgia(+995)🇬🇪</option>
      <option value="GF">French Guiana(+594)🇬🇫</option>
      <option value="GH">Ghana(+233)🇬🇭</option>
      <option value="GM">Gambia(+220)🇬🇲</option>
      <option value="GN">Guinea(+224)🇬🇳</option>
      <option value="GP">Guadeloupe(+590)🇬🇵</option>
      <option value="GR">Greece(+30)🇬🇷</option>
      <option value="GT">Guatemala(+502)🇬🇹</option>
      <option value="GU">Guam(+1)🇬🇺</option>
      <option value="GY">Guyana(+592)🇬🇾</option>
      <option value="HK">Hong Kong(+852)🇭🇰</option>
      <option value="HN">Honduras(+504)🇭🇳</option>
      <option value="HR">Croatia(+385)🇭🇷</option>
      <option value="HT">Haiti(+509)🇭🇹</option>
      <option value="HU">Hungary(+36)🇭🇺</option>
      <option value="ID">Indonesia(+62)🇮🇩</option>
      <option value="IE">Ireland(+353)🇮🇪</option>
      <option value="IL">Israel(+972)🇮🇱</option>
      <option value="IN">India(+91)🇮🇳</option>
      <option value="IQ">Iraq(+964)🇮🇶</option>
      <option value="IR">Iran(+98)🇮🇷</option>
      <option value="IT">Italy(+39)🇮🇹</option>
      <option value="JM">Jamaica(+1)🇯🇲</option>
      <option value="JO">Jordan(+962)🇯🇴</option>
      <option value="JP">Japan(+81)🇯🇵</option>
      <option value="KE">Kenya(+254)🇰🇪</option>
      <option value="KG">Kyrgyzstan(+996)🇰🇬</option>
      <option value="KH">Cambodia(+855)🇰🇭</option>
      <option value="KM">Comoros(+269)🇰🇲</option>
      <option value="KR">South Korea(+82)🇰🇷</option>
      <option value="KW">Kuwait(+965)🇰🇼</option>
      <option value="KY">Cayman Islands(+1)🇰🇾</option>
      <option value="KZ">Kazakhstan(+7)🇰🇿</option>
      <option value="LA">Laos(+856)🇱🇦</option>
      <option value="LB">Lebanon(+961)🇱🇧</option>
      <option value="LC">St Lucia(+1)🇱🇨</option>
      <option value="LI">Liechtenstein(+423)🇱🇮</option>
      <option value="LK">Sri Lanka(+94)🇱🇰</option>
      <option value="LR">Liberia(+231)🇱🇷</option>
      <option value="LT">Lithuania(+370)🇱🇹</option>
      <option value="LU">Luxembourg(+352)🇱🇺</option>
      <option value="LV">Latvia(+371)🇱🇻</option>
      <option value="MA">Morocco(+212)</option>
      <option value="MD">Moldova(+373)</option>
      <option value="MG">Madagascar(+261)</option>
      <option value="ML">Mali(+223)</option>
      <option value="MM">Myanmar(+95)</option>
      <option value="MO">Macao(+853)</option>
      <option value="MQ">Martinique(+596)</option>
      <option value="MR">Mauritania(+222)</option>
      <option value="MS">Montserrat(+1)</option>
      <option value="MW">Malawi(+265)</option>
      <option value="MX">Mexico(+52)</option>
      <option value="MY">Malaysia(+60)</option>
      <option value="MZ">Mozambique(+258)</option>
      <option value="NA">Namibia(+264)</option>
      <option value="NE">Niger(+227)</option>
      <option value="NG">Nigeria(+234)</option>
      <option value="NI">Nicaragua(+505)</option>
      <option value="NL">Netherlands(+31)</option>
      <option value="NO">Norway(+47)</option>
      <option value="NP">Nepal(+977)</option>
      <option value="NR">Nauru(+674)</option>
      <option value="NZ">New Zealand(+64)</option>
      <option value="OM">Oman(+968)</option>
      <option value="PA">Panama(+507)</option>
      <option value="PE">Peru(+51)</option>
      <option value="PH">Philippines(+63)</option>
      <option value="PK">Pakistan(+92)</option>
      <option value="PL">Poland(+48)</option>
      <option value="PR">Puerto Rico(+1)</option>
      <option value="PS">Palestine(+970)</option>
      <option value="PT">Portugal(+351)</option>
      <option value="PY">Paraguay(+595)</option>
      <option value="QA">Qatar(+974)</option>
      <option value="RE">Reunion(+262)</option>
      <option value="RO">Romania(+40)</option>
      <option value="RU">Russia(+7)</option>
      <option value="RW">Rwanda(+250)</option>
      <option value="SA">Saudi Arabia(+966)</option>
      <option value="SE">Sweden(+46)</option>
      <option value="SG">Singapore(+65)</option>
      <option value="SI">Slovenia(+386)</option>
      <option value="SK">Slovakia(+421)</option>
      <option value="SL">Sierra Leone(+232)</option>
      <option value="SN">Senegal(+221)</option>
      <option value="SO">Somalia(+252)</option>
      <option value="SR">Suriname(+597)</option>
      <option value="SV">El Salvador(+503)</option>
      <option value="SZ">Swaziland(+268)</option>
      <option value="TC">Turks and Caicos(+1)</option>
      <option value="TG">Togo(+228)</option>
      <option value="TH">Thailand(+66)</option>
      <option value="TJ">Tajikistan(+992)</option>
      <option value="TN">Tunisia(+216)</option>
      <option value="TO">Tonga(+676)</option>
      <option value="TR">Turkey(+90)</option>
      <option value="TW">Taiwan(+886)</option>
      <option value="TZ">Tanzania(+255)</option>
      <option value="UA">Ukraine(+380)</option>
      <option value="UG">Uganda(+256)</option>
      <option value="US">USA(+1)</option>
      <option value="UY">Uruguay(+598)</option>
      <option value="UZ">Uzbekistan(+998)</option>
      <option value="VE">Venezuela(+58)</option>
      <option value="VG">Virgin Islands(+1)</option>
      <option value="VN">Vietnam(+84)</option>
      <option value="VU">Vanuatu(+678)</option>
      <option value="WS">Samoa(+685)🇼🇸</option>
      <option value="XI">International </option>
      <option value="XK">Kosovo(+383)</option>
      <option value="YE">Yemen(+967)</option>
      <option value="ZA">South Africa(+27)</option>
        <option value="ZM">Zambia(+260)</option>
        <option value="ZW">Zimbabwe(+263)</option>
        </select>
  )
}

function Refill() {
    const {state} =useContext(Store);
    const {darkMode}=state
    const [cardsItems,setCardsItems]=useState([])
 

    useEffect(()=>{  
        const items=cards.filter(card=>card.category.toLocaleLowerCase()==="phone codes"||card.category.toLocaleLowerCase()==="prepaid phones")
        setCardsItems(items)
         
     },[])
  return (
    <Layout title={"refill"}>
        <div  className={`${darkMode?"bg-dark-200 text-white":"bg-white text-main"} `}>
            <div className=' w-full h-72 bg-main text-white'>
                <div className='container h-full mx-auto flex items-center justify-center  relative'>
                    <div className='w-full px-4 md:w-2/3  shadow rounded'>
                        <h1 className='font-bold  text-xl lg:text-3xl'>Top up prepaid mobile phones with Bitcoin and other cryptocurrencies from anywhere in the world</h1>
                        <div className='absolute -bottom-5 w-full z-10 flex justify-center left-0 right-0 px-4'>
                            <div className='w-full md:w-1/2 flex items-center bg-white text-main'>
                              <CountryiesAndphones/>
                           {/* <select name="" id=""  className='flex-grow-0 text-center w-fit px-4 md:py-4 focus:outline-none  border-none   bg-inherit text-inherit'>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                                <option value="EG" className={`${darkMode?"bg-dark-100 text-white":"bg-white text-main"} border text-inherit`}>EG</option>
                              
  </select>*/}
                            <input type="text" required className={` h-fit ${darkMode?"focus:border-secondary-100 border-2 border-dark-200 bg-dark-100 text-white":"focus:border-customGray-200 border-2 border-gray-300 text-main bg-white"} flex-grow focus:outline-none transition duration-200  md:px-6 md:py-4 py-3`} placeholder="01025648"/>
                            <button  className={`whitespace-nowrap flex-grow-0 transition duration-200 active:scale-90 hover:bg-secondary-200  bg-secondary-100 text-white h-fit text-sm md:text-lg font-semibold px-4 py-4 font-sans `}>Sign Up</button>
                            </div>                           
                        </div>
                    </div>
                </div>
             </div>
             <div className='container mx-auto px-4 py-16'>
                <div className='flex justify-between'>
                    <div className='w-1/2 text-lg font-bold'>Popular Phone Refill products in Egypt</div>
                    <div className='w-1/2 md:w-1/3'>
                    <SearchInput />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 md:gap-4 lg:gap-6 py-12'>
                   {
                    cardsItems.map(card=>(
                      <div key={card.id}>
                        <CardItems card={card}/>
                      </div>
                    ))
                   }
                </div>
                <div className='py-8 flex justify-center '>
                  <div className='px-4 md:w-1/2'>
                  <div className='text-customGray-200 font-sans my-4 text-center font-bold'>Refill your airtime with Bitcoin, Ethereum, Litecoin, Dash, Dogecoin, or Lightning!</div>
                  <div className='w-full h-24 relative'> 
                     <Image src={"https://www.bitrefill.com/content/cn/v23/images%2Fcoins.svg"} layout='fill' objectFit='contain' objectPosition="center" alt=''/>
                  </div> 
                  </div>
                </div>
                <DetailsSection/>
                <SecurityInfoSection/>
             </div>
        </div>
    </Layout>
  )
}


export async function getStaticProps({locale}) {
  
    try{
     
          return {
            props: {
              errMsg:false,
              ...(await serverSideTranslations(locale, ['common']))
            }
          }
    }catch(err){
      return {
        props: {
          errMsg:true,
          ...(await serverSideTranslations(locale, ['common']))
        }
    }  }
   
  }
export default Refill