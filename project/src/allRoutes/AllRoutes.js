import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from "../components/user/feature/Home"
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import AdminLogin from '../components/admin/feature/AdminLogin'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import AdminDashboard from '../components/admin/feature/AdminDashboard'
import AdminUsers from '../components/admin/feature/AdminUsers'


=======
>>>>>>> 6ac7c57ba9e7fec6ddb6490cc47078222d6a0610
>>>>>>> f06bc6e465fb9d1a1ba09cac6e75eb5b2ffe6324

>>>>>>> 6ac7c57ba9e7fec6ddb6490cc47078222d6a0610
import AdminProtectedModule from '../modules/AdminProtectedModule'
import Login from '../components/user/feature/Login'
import Signup from '../components/user/feature/Signup'
import Contact from '../components/user/feature/Contact'
import About from '../components/user/feature/About'
import Menu from '../components/user/feature/Menu'
import BookTable from '../components/user/feature/BookTable'
import AdminMenu from '../components/admin/feature/AdminMenu'


<<<<<<< HEAD
=======

>>>>>>> 6ac7c57ba9e7fec6ddb6490cc47078222d6a0610
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

>>>>>>> 6ac7c57ba9e7fec6ddb6490cc47078222d6a0610
            <Route path='' element={<AdminProtectedModule/>}>
              <Route path='dashboard' element={<AdminDashboard/>}/>
              <Route path='users' element={<AdminUsers/>}/>        
              <Route path='menu' element={<AdminMenu/>}/>

              
            </Route>
<<<<<<< HEAD
=======

>>>>>>> 6ac7c57ba9e7fec6ddb6490cc47078222d6a0610
          </Route>
        </Routes>
    </>
  )
}

export default AllRoutes