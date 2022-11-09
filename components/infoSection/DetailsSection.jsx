import React, { useContext } from 'react'
import { Store } from '../../utils/Store';

function DetailsSection() {

    const {state} =useContext(Store);
    const {darkMode}=state;

  return (
    <div className={` font-sans`}>
        <div className='container mx-auto'>
            <div className=''>
                <h1 className='text-2xl font-bold px-8 pt-6'>How gift cards work</h1>
                <div className='md:flex justify-between'>
                    <div className={`px-8 my-8 md:w-1/3 `}>
                    <div className={`p-10 rounded-md relative flex-col flex items-center justify-center ${darkMode?"bg-customGray-200":"bg-customGray-100"}`}>
                        <svg width={187} height={48} viewBox="0 0 187 48" fill='none'>
                           <rect x={1.3333} width={128} height={46} fill="white" stroke='#002B28' rx={3} strokeWidth={2}/>
                           <rect width={67.947} height={23} fill="white" transform='translate(13.8672 12)'/>
                           <path fill='#002B28' d='M19.591 17.4H17.323C17.179 18.768 16.603 19.164 15.631 19.164H14.731V21.216H15.721C16.243 21.216 16.981 21.054 17.215 20.73V30H19.591V17.4Z'/>
                           <path fill='#002B28' d='M24.1076 21.774H26.5016C26.4656 20.244 27.2216 19.218 28.5716 19.218C29.7956 19.218 30.5696 19.974 30.5696 21.144C30.5696 22.062 30.0476 22.782 29.0216 23.286L27.0056 24.294C25.7996 24.888 24.0896 26.22 24.0896 28.254L24.1076 30H32.9636V27.93H26.4476C26.4476 27.156 27.3116 26.544 28.0316 26.166L29.9756 25.194C31.9736 24.204 32.9636 22.854 32.9636 21.162C32.9636 18.804 31.1636 17.256 28.5716 17.256C25.8176 17.256 24.0536 18.984 24.1076 21.774Z'/>
                           <path fill='#002B28' d='M37.1599 27.678V30H39.5719V27.678H37.1599Z'/>
                           <path fill='#002B28' d='M48.5459 25.806C49.6979 25.806 50.9579 25.176 51.4799 24.294C51.3719 26.508 50.2199 28.164 48.5279 28.164C47.3039 28.164 46.4219 27.498 46.2239 26.562H43.9919C44.2619 28.578 46.0259 30.144 48.6179 30.144C51.6059 30.144 53.6939 27.66 53.6939 23.25C53.6939 19.812 51.9659 17.256 48.8159 17.256C46.1699 17.256 44.1359 19.11 44.1359 21.558C44.1359 23.97 45.9179 25.806 48.5459 25.806ZM46.5299 21.558C46.5299 20.244 47.4299 19.326 48.7619 19.326C50.1119 19.326 51.0299 20.244 51.0299 21.558C51.0299 22.854 50.1119 23.772 48.7619 23.772C47.4299 23.772 46.5299 22.854 46.5299 21.558Z'/>
                           <path fill='#002B28' d='M62.5459 25.806C63.6979 25.806 64.9579 25.176 65.4799 24.294C65.3719 26.508 64.2199 28.164 62.5279 28.164C61.3039 28.164 60.4219 27.498 60.2239 26.562H57.9919C58.2619 28.578 60.0259 30.144 62.6179 30.144C65.6059 30.144 67.6939 27.66 67.6939 23.25C67.6939 19.812 65.9659 17.256 62.8159 17.256C60.1699 17.256 58.1359 19.11 58.1359 21.558C58.1359 23.97 59.9179 25.806 62.5459 25.806ZM60.5299 21.558C60.5299 20.244 61.4299 19.326 62.7619 19.326C64.1119 19.326 65.0299 20.244 65.0299 21.558C65.0299 22.854 64.1119 23.772 62.7619 23.772C61.4299 23.772 60.5299 22.854 60.5299 21.558Z'/>
                           <rect x={72.8672} y={12} width={2.5} height={23} fill="white" stroke='#002B28' rx={1.25}/>
                           <circle cx={162.332} cy={24} r={24} fill="#EA0B2C" />
                           <path fill='white' d='M170.225 23.4929C170.162 23.3293 170.067 23.1797 169.945 23.0529L163.279 16.3863C163.154 16.2619 163.007 16.1633 162.844 16.0961C162.682 16.0288 162.508 15.9941 162.332 15.9941C161.977 15.9941 161.636 16.1352 161.385 16.3863C161.261 16.5106 161.162 16.6582 161.095 16.8206C161.028 16.983 160.993 17.1571 160.993 17.3329C160.993 17.688 161.134 18.0285 161.385 18.2796L165.785 22.6663H155.665C155.312 22.6663 154.973 22.8067 154.723 23.0568C154.473 23.3068 154.332 23.646 154.332 23.9996C154.332 24.3532 154.473 24.6924 154.723 24.9424C154.973 25.1925 155.312 25.3329 155.665 25.3329H165.785L161.385 29.7196C161.26 29.8435 161.161 29.991 161.094 30.1535C161.026 30.316 160.991 30.4902 160.991 30.6663C160.991 30.8423 161.026 31.0166 161.094 31.179C161.161 31.3415 161.26 31.489 161.385 31.6129C161.509 31.7379 161.657 31.8371 161.819 31.9048C161.982 31.9725 162.156 32.0073 162.332 32.0073C162.508 32.0073 162.682 31.9725 162.845 31.9048C163.007 31.8371 163.155 31.7379 163.279 31.6129L169.945 24.9463C170.067 24.8195 170.162 24.6699 170.225 24.5063C170.359 24.1816 170.359 23.8175 170.225 23.4929Z'/>
                        </svg>
                        </div>
                        <div className={``}>
                            <div className='font-bold my-2 '>Enter the amount</div>
                            <div className='text-sm my-2 text-customGray-200'>Select or type the amount you want the card to have</div>
                        </div>
                    </div>
                    <div className={`px-8 my-8 md:w-1/3 `}>
                        <div className={`p-10 rounded-md relative flex-col flex items-center justify-center ${darkMode?"bg-customGray-200":"bg-customGray-100"}`}>
                        <svg width="153" height="56" viewBox="0 0 153 56" fill="none">
                            <g clipPath=''ath="url(#clip0_1641_83486)">
                               <path fillRule="evenodd" clipRule="evenodd" d="M47.7825 33.8064C44.5745 46.6368 31.5233 54.4904 18.6937 51.2824C5.86325 48.0744 -1.99035 35.0784 1.21765 22.1936C4.42565 9.36321 17.4217 1.50961 30.3065 4.71761C43.1369 7.92561 50.9905 20.9768 47.7825 33.8064V33.8064Z" fill="#F7931A"></path>
                               <path fillRule="evenodd" clipRule="evenodd" d="M35.0656 24.568C35.564 21.36 33.1296 19.6456 29.812 18.5392L30.8632 14.1712L28.2632 13.5624L27.2128 17.7648C26.5108 17.6051 25.8103 17.4392 25.1112 17.2672L26.1624 13.0088L23.5072 12.3448L22.4568 16.6592C21.8488 16.5488 21.2952 16.4376 20.7424 16.272L17.148 15.3872L16.4288 18.2072L18.3648 18.6504C19.4152 18.9264 19.5808 19.6456 19.5808 20.1984L18.3088 25.1208C18.42 25.1208 18.5304 25.176 18.5856 25.2312C18.5296 25.1752 18.42 25.1752 18.3088 25.1208L16.5944 32.0328C16.484 32.3656 16.152 32.8632 15.3784 32.6416C15.4336 32.6976 13.4984 32.1992 13.4984 32.1992L12.1704 35.1856L15.5992 36.0704C16.2632 36.2368 16.8712 36.4024 17.4792 36.568L16.3736 40.9376L19.028 41.5456L20.0792 37.232C20.7976 37.4528 21.5168 37.6192 22.18 37.7848L21.1296 42.0984L23.784 42.7624L24.8352 38.3936C29.3144 39.2232 32.7432 38.8912 34.1256 34.8536C35.2872 31.536 34.0704 29.6552 31.6928 28.4384C33.4624 28.052 34.7344 26.8904 35.0656 24.5672V24.568ZM29.0376 33.0288C28.264 36.292 22.7336 34.5224 20.964 34.0792L22.4016 28.2728C24.1712 28.7152 29.9224 29.6008 29.0376 33.0288ZM29.868 24.512C29.1496 27.4984 24.5592 26.0056 23.0656 25.6184L24.3936 20.3648C25.8864 20.7512 30.6424 21.4152 29.868 24.512Z" fill="white"></path>
                               </g>
                               <path d="M80.3933 27.4933C80.3299 27.3297 80.2347 27.1801 80.1133 27.0533L73.4467 20.3867C73.3223 20.2623 73.1748 20.1637 73.0123 20.0965C72.8499 20.0292 72.6758 19.9945 72.5 19.9945C72.1449 19.9945 71.8044 20.1356 71.5533 20.3867C71.429 20.511 71.3304 20.6586 71.2631 20.821C71.1958 20.9834 71.1612 21.1575 71.1612 21.3333C71.1612 21.6884 71.3023 22.0289 71.5533 22.28L75.9533 26.6667H65.8333C65.4797 26.6667 65.1406 26.8071 64.8905 27.0572C64.6405 27.3072 64.5 27.6464 64.5 28C64.5 28.3536 64.6405 28.6928 64.8905 28.9428C65.1406 29.1929 65.4797 29.3333 65.8333 29.3333H75.9533L71.5533 33.72C71.4284 33.844 71.3292 33.9914 71.2615 34.1539C71.1938 34.3164 71.1589 34.4906 71.1589 34.6667C71.1589 34.8427 71.1938 35.017 71.2615 35.1794C71.3292 35.3419 71.4284 35.4894 71.5533 35.6133C71.6773 35.7383 71.8248 35.8375 71.9872 35.9052C72.1497 35.9729 72.324 36.0077 72.5 36.0077C72.676 36.0077 72.8503 35.9729 73.0128 35.9052C73.1752 35.8375 73.3227 35.7383 73.4467 35.6133L80.1133 28.9467C80.2347 28.8199 80.3299 28.6703 80.3933 28.5067C80.5267 28.1821 80.5267 27.8179 80.3933 27.4933Z" fill="#EA0B2C"></path>
                               <rect x="97.5" y="1" width="54" height="54" rx="1" fill="white" stroke="#002B28" strokeWidth="+2"></rect><path d="M122.5 8H106.25C105.56 8 105 8.55875 105 9.25V25.5C105 26.1913 105.56 26.75 106.25 26.75H122.5C123.19 26.75 123.75 26.1913 123.75 25.5V9.25C123.75 8.55875 123.19 8 122.5 8ZM121.25 24.25H107.5V10.5H121.25V24.25ZM111.25 21.75H117.5C118.19 21.75 118.75 21.1913 118.75 20.5V14.25C118.75 13.5588 118.19 13 117.5 13H111.25C110.56 13 110 13.5588 110 14.25V20.5C110 21.1913 110.56 21.75 111.25 21.75ZM112.5 15.5H116.25V19.25H112.5V15.5ZM143.75 8H127.5C126.81 8 126.25 8.55875 126.25 9.25V25.5C126.25 26.1913 126.81 26.75 127.5 26.75H143.75C144.44 26.75 145 26.1913 145 25.5V9.25C145 8.55875 144.44 8 143.75 8ZM142.5 24.25H128.75V10.5H142.5V24.25ZM132.5 21.75H138.75C139.44 21.75 140 21.1913 140 20.5V14.25C140 13.5588 139.44 13 138.75 13H132.5C131.81 13 131.25 13.5588 131.25 14.25V20.5C131.25 21.1913 131.81 21.75 132.5 21.75ZM133.75 15.5H137.5V19.25H133.75V15.5ZM143.75 29.25H127.5C126.81 29.25 126.25 29.8088 126.25 30.5V46.75C126.25 47.4413 126.81 48 127.5 48H143.75C144.44 48 145 47.4413 145 46.75V30.5C145 29.8088 144.44 29.25 143.75 29.25ZM142.5 45.5H128.75V31.75H142.5V45.5ZM132.5 43H138.75C139.44 43 140 42.4413 140 41.75V35.5C140 34.8088 139.44 34.25 138.75 34.25H132.5C131.81 34.25 131.25 34.8088 131.25 35.5V41.75C131.25 42.4413 131.81 43 132.5 43ZM133.75 36.75H137.5V40.5H133.75V36.75ZM122.5 29.25H116.25C115.56 29.25 115 29.8088 115 30.5V35.5H106.25C105.56 35.5 105 36.0588 105 36.75V46.75C105 47.4413 105.56 48 106.25 48H116.25C116.94 48 117.5 47.4413 117.5 46.75V38H122.5C123.19 38 123.75 37.4413 123.75 36.75V30.5C123.75 29.8088 123.19 29.25 122.5 29.25ZM115 45.5H107.5V38H115V45.5ZM121.25 35.5H117.5V31.75H121.25V35.5ZM105 30.5C105 29.8088 105.56 29.25 106.25 29.25H111.25C111.94 29.25 112.5 29.8088 112.5 30.5C112.5 31.1913 111.94 31.75 111.25 31.75H106.25C105.56 31.75 105 31.1913 105 30.5ZM112.5 43H110V40.5H112.5V43ZM123.75 40.5V46.75C123.75 47.4413 123.19 48 122.5 48H120C119.31 48 118.75 47.4413 118.75 46.75C118.75 46.0588 119.31 45.5 120 45.5H121.25V40.5C121.25 39.8088 121.81 39.25 122.5 39.25C123.19 39.25 123.75 39.8088 123.75 40.5Z" fill="#002B28"></path>
                               <defs><clipPath id="clip0_1641_83486">
                                <rect width="48" height="48" fill="white" transform="translate(0.5 4)"></rect>
                                </clipPath>
                                </defs>
                                </svg>
                          </div>
                          <div className={``}>
                            <div className='font-bold my-2 '>Pay with your preferred coin</div>
                            <div className='text-sm my-2 text-customGray-200'>Your payment is confirmed the same minute in most cases</div>
                        </div>
                    </div>
                    <div className={`px-8 my-8 md:w-1/3 `}>
                    <div className={`p-10 rounded-md relative flex-col flex items-center justify-center ${darkMode?"bg-customGray-200":"bg-customGray-100"}`}>
                    <svg width="86" height="63" viewBox="0 0 86 63" fill="none">
                    <rect x="6.73047" y="1.47852" width="78" height="55" rx="1" fill="white" stroke="#002B28" strokeWidth="2"></rect>
                    <rect x="1" y="6.5" width="78" height="55" rx="1" fill="white" stroke="#002B28" strokeWidth="2"></rect>
                    <rect x="10" y="15.5" width="12" height="12" rx="6" fill="#D7DCDA"></rect>
                    <rect x="10" y="41.5" width="60" height="11" rx="2" fill="#D7DCDA"></rect>
                    <circle cx="41" cy="33" r="20" fill="#EA0B2C"></circle>
                    <path d="M46.5005 27.8186L39.3505 34.9853L36.6005 32.2353C36.4511 32.0608 36.2673 31.9191 36.0605 31.8191C35.8537 31.7191 35.6285 31.6628 35.399 31.654C35.1694 31.6451 34.9405 31.6838 34.7267 31.7676C34.5128 31.8514 34.3185 31.9785 34.1561 32.1409C33.9937 32.3033 33.8666 32.4976 33.7828 32.7114C33.699 32.9253 33.6603 33.1542 33.6692 33.3837C33.6781 33.6133 33.7343 33.8385 33.8343 34.0453C33.9344 34.252 34.0761 34.4359 34.2505 34.5853L38.1672 38.5186C38.3229 38.6731 38.5076 38.7953 38.7107 38.8783C38.9138 38.9612 39.1312 39.0032 39.3505 39.002C39.7878 39.0001 40.2068 38.8265 40.5172 38.5186L48.8505 30.1853C49.0068 30.0304 49.1307 29.846 49.2154 29.6429C49.3 29.4398 49.3435 29.222 49.3435 29.002C49.3435 28.782 49.3 28.5641 49.2154 28.361C49.1307 28.1579 49.0068 27.9736 48.8505 27.8186C48.5383 27.5082 48.1159 27.334 47.6755 27.334C47.2352 27.334 46.8128 27.5082 46.5005 27.8186Z" fill="white"></path>
                    </svg>
                    </div>
                    <div className={``}>
                            <div className='font-bold my-2 '>That is it, ready to use it!</div>
                            <div className='text-sm my-2 text-customGray-200'>Redeem your card at your chosen retailer according to their instructions.</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsSection