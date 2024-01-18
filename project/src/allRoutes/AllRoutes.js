import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from '../components/user/feature/Home'
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import AdminLogin from '../components/admin/feature/AdminLogin'


const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path='' element={<UserModule/>}>
            <Route path='' element={<Home/>}/>
           
          </Route>

          <Route path='/admin' element={<AdminModule/>}>
            <Route path='' element={<AdminLogin/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default AllRoutes