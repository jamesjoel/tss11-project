import React  from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/admin/shared/Header'
import Footer from '../components/admin/shared/Footer'


const AdminModule = () => {



  return (
    <>
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
     
     <Header/>
    <Outlet/>
    <Footer/>
    </div>
    
    
    </>
  )
}

export default AdminModule