import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from '../components/user/feature/Home'
import UserModule from '../modules/UserModule'

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path='' element={<UserModule/>}>
            <Route path='' element={<Home/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default AllRoutes