import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from "../components/user/feature/Home"
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import AdminLogin from '../components/admin/feature/AdminLogin'
import AdminProtectedModule from '../modules/AdminProtectedModule'
import Login from '../components/user/feature/Login'
import Signup from '../components/user/feature/Signup'
import Contact from '../components/user/feature/Contact'
import About from '../components/user/feature/About'
import Menu from '../components/user/feature/Menu'
import BookTable from '../components/user/feature/BookTable'



const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path='' element={<UserModule/>}>
            <Route path='' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='booktable' element={<BookTable/>}/>

          </Route>

          <Route path='admin' element={<AdminModule/>}>
            <Route path='' element={<AdminLogin/>}/>
<<<<<<< HEAD
           
            
=======
            <Route path='' element={<AdminProtectedModule/>}>
              
            </Route>
>>>>>>> c42cdb4ae56928acc443794acf88bda0403049a2
          </Route>
        </Routes>
    </>
  )
}

export default AllRoutes