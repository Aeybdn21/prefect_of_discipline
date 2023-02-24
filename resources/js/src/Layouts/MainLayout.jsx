import { Head } from '@inertiajs/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import { useScript } from '../hooks/useScript';
import Navbar from './Navbar'
import SideBar from './SideBar'

function MainLayout({children}) {
    useScript();
  return (<>
    <Head>
        <title>Home page</title>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/sidebar.css" />
      </Head> 
    <main className="container-lg container-xl container-xxl">
        <Navbar/>
        <div className="px-0 d-xl-flex position-relative d-flex">
        <SideBar/>
        {children}
        </div>
    </main> 
    </>
  )
}

export default MainLayout