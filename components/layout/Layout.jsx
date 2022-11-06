import Head from 'next/head'
import React from 'react'
import MainNavbar from '../navbar/MainNavbar'

import TopNavbar from '../navbar/TopNavbar'
export default function Layout({children,title,desc}) {


  return (
    <div>
        <Head>
        <title>{title?title:""}</title>
        <meta name="description" content={desc?desc:""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <TopNavbar/>
            <MainNavbar/>
           <div>
            {children}
           </div>
           
        </main>
        <footer>     
 
        </footer>
    </div>
  )
}
