import { Head } from '@inertiajs/react';
import React from 'react' 
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import ModalForm from '../components/ModalForm';
import ModalNew from '../components/ModalNew';
import { useScript } from '../hooks/useScript';
import Navbar from './Navbar'
import SideBar from './SideBar' 

function MainLayout({children}) {
  
  const states = useSelector((initState) => initState.loaderComponent);
 
  useScript();

  return (
    <>
      <Head>
        <title>Home page</title> 
      </Head> 
      <main className="container-lg container-xl container-xxl py-3">
          <Navbar/>
          <div className="px-0 d-xl-flex position-relative d-flex">
            <SideBar/>
            <section className="home-section mx-3 bg-white rounded shadow overflow-hidden p-4">
              {children}
            </section>
          </div>
      </main> 
      <Loader {...states}/> 
    </>
  );
}

export default MainLayout