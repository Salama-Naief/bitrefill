import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import ConnctWithUs from './ConenctWithUs'
import HeadBar from './HeadBar'
import Policies from './Policies'
import TopNavbar from './TopNavbar'
export default function Layout({children,productsTypes,title,desc,pages}) {


  return (
    <div>
        <Head>
        <title>{title?title:""}</title>
        <meta name="description" content={desc?desc:""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <TopNavbar/>
           <div>
            {children}
           </div>
           
        </main>
        <footer>     
 
        </footer>
    </div>
  )
}
