import React from 'react'
import { useContext } from 'react';
import { Store } from '../../utils/Store';

function SecurityInfoSection() {

  const {state} =useContext(Store);
    const {darkMode}=state;
  return (
    <div className={`${darkMode?"bg-customGray-200 text-white":"bg-white text-main"} py-4 rounded`} >
       <div className='flex flex-wrap'>
          <div className='w-1/2 md:w-1/4 flex flex-col justify-center'>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"  className='mx-auto'>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.666626 14C0.666626 6.63684 6.63575 0.666687 14 0.666687C21.3631 0.666687 27.3333 6.63581 27.3333 14C27.3333 21.3632 21.3642 27.3334 14 27.3334C6.63678 27.3334 0.666626 21.3642 0.666626 14ZM14 3.33335C8.10864 3.33335 3.33329 8.10947 3.33329 14C3.33329 19.8913 8.10941 24.6667 14 24.6667C19.8913 24.6667 24.6666 19.8906 24.6666 14C24.6666 8.1087 19.8905 3.33335 14 3.33335Z" fill="#ff001c"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M14 5.46637C14.7363 5.46637 15.3333 6.06332 15.3333 6.7997V13.1759L19.3962 15.2077C20.0548 15.5371 20.3217 16.338 19.9923 16.9966C19.6629 17.6552 18.862 17.9221 18.2034 17.5928L13.4036 15.1924C12.9519 14.9665 12.6666 14.5049 12.6666 13.9999V6.7997C12.6666 6.06332 13.2636 5.46637 14 5.46637Z" fill="#ff001c"></path>
         </svg>
            <div className='my-4 font-bold text-center'>Instant digital delivery</div>
          </div>
          <div className='w-1/2 md:w-1/4 flex flex-col justify-center'>
          <svg className='mx-auto' width="32" height="32" viewBox="0 0 32 32" fill="none" >
            <path d="M16 16C15.2089 16 14.4355 16.2346 13.7777 16.6741C13.1199 17.1136 12.6072 17.7384 12.3045 18.4693C12.0017 19.2002 11.9225 20.0044 12.0769 20.7804C12.2312 21.5563 12.6122 22.269 13.1716 22.8284C13.731 23.3878 14.4437 23.7688 15.2196 23.9231C15.9956 24.0775 16.7998 23.9983 17.5307 23.6955C18.2616 23.3928 18.8863 22.8801 19.3259 22.2223C19.7654 21.5645 20 20.7911 20 20C20 18.9391 19.5786 17.9217 18.8284 17.1716C18.0783 16.4214 17.0609 16 16 16ZM16 21.3333C15.7363 21.3333 15.4785 21.2551 15.2592 21.1086C15.04 20.9621 14.8691 20.7539 14.7682 20.5102C14.6672 20.2666 14.6408 19.9985 14.6923 19.7399C14.7437 19.4812 14.8707 19.2437 15.0572 19.0572C15.2437 18.8707 15.4812 18.7437 15.7399 18.6923C15.9985 18.6408 16.2666 18.6672 16.5102 18.7682C16.7539 18.8691 16.9621 19.04 17.1086 19.2592C17.2551 19.4785 17.3333 19.7363 17.3333 20C17.3333 20.3536 17.1929 20.6928 16.9428 20.9428C16.6928 21.1929 16.3536 21.3333 16 21.3333ZM15.0533 12.9467C15.1801 13.0681 15.3297 13.1632 15.4933 13.2267C15.6529 13.2972 15.8255 13.3336 16 13.3336C16.1745 13.3336 16.3471 13.2972 16.5067 13.2267C16.6703 13.1632 16.8199 13.0681 16.9467 12.9467L20 9.94666C20.2581 9.68852 20.4032 9.3384 20.4032 8.97333C20.4032 8.60826 20.2581 8.25814 20 8C19.7418 7.74185 19.3917 7.59683 19.0267 7.59683C18.6616 7.59683 18.3115 7.74185 18.0533 8L17.3333 8.78666V4C17.3333 3.64638 17.1929 3.30724 16.9428 3.05719C16.6928 2.80714 16.3536 2.66666 16 2.66666C15.6464 2.66666 15.3072 2.80714 15.0572 3.05719C14.8071 3.30724 14.6667 3.64638 14.6667 4V8.78666L13.9467 8C13.6885 7.74185 13.3384 7.59683 12.9733 7.59683C12.6083 7.59683 12.2581 7.74185 12 8C11.7418 8.25814 11.5968 8.60826 11.5968 8.97333C11.5968 9.3384 11.7418 9.68852 12 9.94666L15.0533 12.9467ZM25.3333 20C25.3333 19.7363 25.2551 19.4785 25.1086 19.2592C24.9621 19.04 24.7539 18.8691 24.5102 18.7682C24.2666 18.6672 23.9985 18.6408 23.7399 18.6923C23.4812 18.7437 23.2437 18.8707 23.0572 19.0572C22.8707 19.2437 22.7437 19.4812 22.6923 19.7399C22.6408 19.9985 22.6672 20.2666 22.7682 20.5102C22.8691 20.7539 23.04 20.9621 23.2592 21.1086C23.4785 21.2551 23.7363 21.3333 24 21.3333C24.3536 21.3333 24.6928 21.1929 24.9428 20.9428C25.1929 20.6928 25.3333 20.3536 25.3333 20ZM26.6667 10.6667H22.6667C22.313 10.6667 21.9739 10.8071 21.7239 11.0572C21.4738 11.3072 21.3333 11.6464 21.3333 12C21.3333 12.3536 21.4738 12.6928 21.7239 12.9428C21.9739 13.1929 22.313 13.3333 22.6667 13.3333H26.6667C27.0203 13.3333 27.3594 13.4738 27.6095 13.7239C27.8595 13.9739 28 14.313 28 14.6667V25.3333C28 25.687 27.8595 26.0261 27.6095 26.2761C27.3594 26.5262 27.0203 26.6667 26.6667 26.6667H5.33333C4.97971 26.6667 4.64057 26.5262 4.39052 26.2761C4.14047 26.0261 3.99999 25.687 3.99999 25.3333V14.6667C3.99999 14.313 4.14047 13.9739 4.39052 13.7239C4.64057 13.4738 4.97971 13.3333 5.33333 13.3333H9.33333C9.68695 13.3333 10.0261 13.1929 10.2761 12.9428C10.5262 12.6928 10.6667 12.3536 10.6667 12C10.6667 11.6464 10.5262 11.3072 10.2761 11.0572C10.0261 10.8071 9.68695 10.6667 9.33333 10.6667H5.33333C4.27246 10.6667 3.25505 11.0881 2.5049 11.8382C1.75476 12.5884 1.33333 13.6058 1.33333 14.6667V25.3333C1.33333 26.3942 1.75476 27.4116 2.5049 28.1618C3.25505 28.9119 4.27246 29.3333 5.33333 29.3333H26.6667C27.7275 29.3333 28.7449 28.9119 29.4951 28.1618C30.2452 27.4116 30.6667 26.3942 30.6667 25.3333V14.6667C30.6667 13.6058 30.2452 12.5884 29.4951 11.8382C28.7449 11.0881 27.7275 10.6667 26.6667 10.6667ZM6.66666 20C6.66666 20.2637 6.74486 20.5215 6.89137 20.7408C7.03788 20.96 7.24612 21.1309 7.48975 21.2318C7.73339 21.3328 8.00147 21.3592 8.26011 21.3077C8.51876 21.2563 8.75633 21.1293 8.9428 20.9428C9.12927 20.7563 9.25626 20.5188 9.30771 20.2601C9.35916 20.0015 9.33275 19.7334 9.23183 19.4898C9.13092 19.2461 8.96002 19.0379 8.74075 18.8914C8.52149 18.7449 8.2637 18.6667 7.99999 18.6667C7.64637 18.6667 7.30723 18.8071 7.05719 19.0572C6.80714 19.3072 6.66666 19.6464 6.66666 20Z" fill="#ff001c">
          </path>
          </svg>
            <div className='my-4 font-bold text-center'>Cash out without banks</div>
          </div>
          <div className='w-1/2 md:w-1/4 flex flex-col justify-center'>
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none" className='mx-auto'><path d="M23.3333 5.33333H22V4C22 2.93913 21.5786 1.92172 20.8284 1.17157C20.0783 0.421427 19.0609 0 18 0H4.66666C3.6058 0 2.58838 0.421427 1.83824 1.17157C1.08809 1.92172 0.666664 2.93913 0.666664 4V20C0.666664 21.0609 1.08809 22.0783 1.83824 22.8284C2.58838 23.5786 3.6058 24 4.66666 24H23.3333C24.3942 24 25.4116 23.5786 26.1618 22.8284C26.9119 22.0783 27.3333 21.0609 27.3333 20V9.33333C27.3333 8.27247 26.9119 7.25505 26.1618 6.50491C25.4116 5.75476 24.3942 5.33333 23.3333 5.33333ZM4.66666 2.66667H18C18.3536 2.66667 18.6928 2.80714 18.9428 3.05719C19.1929 3.30724 19.3333 3.64638 19.3333 4V5.33333H4.66666C4.31304 5.33333 3.9739 5.19286 3.72386 4.94281C3.47381 4.69276 3.33333 4.35362 3.33333 4C3.33333 3.64638 3.47381 3.30724 3.72386 3.05719C3.9739 2.80714 4.31304 2.66667 4.66666 2.66667ZM24.6667 16H23.3333C22.9797 16 22.6406 15.8595 22.3905 15.6095C22.1405 15.3594 22 15.0203 22 14.6667C22 14.313 22.1405 13.9739 22.3905 13.7239C22.6406 13.4738 22.9797 13.3333 23.3333 13.3333H24.6667V16ZM24.6667 10.6667H23.3333C22.2725 10.6667 21.255 11.0881 20.5049 11.8382C19.7548 12.5884 19.3333 13.6058 19.3333 14.6667C19.3333 15.7275 19.7548 16.7449 20.5049 17.4951C21.255 18.2452 22.2725 18.6667 23.3333 18.6667H24.6667V20C24.6667 20.3536 24.5262 20.6928 24.2761 20.9428C24.0261 21.1929 23.687 21.3333 23.3333 21.3333H4.66666C4.31304 21.3333 3.9739 21.1929 3.72386 20.9428C3.47381 20.6928 3.33333 20.3536 3.33333 20V7.77333C3.76169 7.92402 4.21258 8.00067 4.66666 8H23.3333C23.687 8 24.0261 8.14048 24.2761 8.39052C24.5262 8.64057 24.6667 8.97971 24.6667 9.33333V10.6667Z" fill="#ff001c"></path></svg>
            <div className='my-4 font-bold text-center'>Save on exchange fees</div>
          </div>
          <div className='w-1/2 md:w-1/4 flex flex-col justify-center'>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className='mx-auto'><path d="M12.848 14.1555L12.0536 17.3759C13.0342 17.6221 16.0586 18.6043 16.5055 16.7876C16.9728 14.893 13.8285 14.403 12.848 14.1555ZM13.9315 9.76057L13.2114 12.6813C14.0279 12.8872 16.5451 13.7267 16.953 12.0743C17.3778 10.3506 14.7481 9.96638 13.9316 9.76057H13.9315ZM14 0.666664C11.3629 0.666664 8.78505 1.44865 6.59239 2.91374C4.39974 4.37882 2.69077 6.4612 1.6816 8.89755C0.672434 11.3339 0.408389 14.0148 0.922859 16.6012C1.43733 19.1876 2.70721 21.5634 4.57191 23.4281C6.43661 25.2928 8.81238 26.5627 11.3988 27.0771C13.9852 27.5916 16.6661 27.3276 19.1024 26.3184C21.5388 25.3092 23.6212 23.6003 25.0863 21.4076C26.5513 19.2149 27.3333 16.6371 27.3333 14C27.3333 12.249 26.9885 10.5152 26.3184 8.89755C25.6483 7.27988 24.6662 5.81002 23.4281 4.57191C22.19 3.33379 20.7201 2.35167 19.1024 1.6816C17.4848 1.01154 15.751 0.666664 14 0.666664ZM19.8107 12.1005C19.7826 12.6121 19.5864 13.1 19.2523 13.4885C18.9183 13.877 18.4653 14.1441 17.9637 14.2485C18.2933 14.3827 18.5916 14.5838 18.8397 14.839C19.0878 15.0942 19.2804 15.398 19.4053 15.7313C19.5301 16.0646 19.5846 16.4202 19.5652 16.7756C19.5459 17.131 19.4531 17.4786 19.2928 17.7964C18.5121 20.0525 16.6573 20.243 14.1907 19.7709L13.5921 22.1972L12.1456 21.8326L12.7364 19.4389C12.3615 19.3447 11.9784 19.2447 11.5837 19.1364L10.9908 21.5413L9.54597 21.1767L10.1446 18.7459C9.80674 18.6584 9.46357 18.5654 9.11338 18.4767L7.23106 18.0021L7.94916 16.3276C7.94916 16.3276 9.01492 16.6142 9.00052 16.593C9.06685 16.6142 9.13672 16.622 9.20608 16.6159C9.27545 16.6099 9.34292 16.5901 9.40459 16.5578C9.46625 16.5255 9.52089 16.4812 9.56532 16.4276C9.60976 16.374 9.64311 16.3121 9.66343 16.2455L11.2867 9.66178C11.3075 9.46007 11.2487 9.2582 11.1228 9.09925C10.9968 8.9403 10.8138 8.83684 10.6127 8.81096C10.6353 8.79557 9.562 8.5468 9.562 8.5468L9.94684 6.98429L11.9416 7.48804L11.94 7.4956C12.2399 7.57096 12.5489 7.64265 12.8637 7.71517L13.4565 5.31266L14.9022 5.67724L14.3213 8.03264C14.7094 8.12222 15.1 8.21264 15.4803 8.3085L16.057 5.9685L17.5035 6.33309L16.9111 8.73641C18.7373 9.37264 20.073 10.3264 19.8107 12.1005Z" fill="#ff001c"></path></svg>
            <div className='my-4 font-bold text-center'>Min 1% cashback on all refills</div>
          </div>
       </div>
  </div>
  )
}

export default SecurityInfoSection