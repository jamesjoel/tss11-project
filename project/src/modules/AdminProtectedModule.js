import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const AdminProtectedModule = () => {

    let navigate = useNavigate()
    useEffect(()=>{
        if(! localStorage.getItem("admin-token")){
            navigate("/")
        }
    },[])

  return (
    <div>AdminProtectedModule</div>
  )
}

export default AdminProtectedModule