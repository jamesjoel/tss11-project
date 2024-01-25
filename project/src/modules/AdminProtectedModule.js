import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AdminProtectedModule = () => {
    // let navigate = useNavigate()
    // useEffect(()=>{
    //     if(! localStorage.getItem("admin-token")){
    //         navigate("/")
    //     }
    // },[])
  return (
    <>
      <h1 className='text-dark'>wlle</h1>
       <Outlet/>
    </>
   
  )
}

export default AdminProtectedModule