import React,{useState} from 'react'
import {useFormik} from 'formik'
import loginSchema from '../../../schemas/AdminLoginSchema'


const AdminLogin = () => {
  let[admin ,setAdmin] = useState({
    username : "",
    password : "",
  })

  let loginForm = useFormik({
    validationSchema : loginSchema,
    initialValues : admin,
    onSubmit : (formdata)=>{
      console.log(formdata)
    }
  })  

  return (
  <>
  <div className="container my-2">
    <form onSubmit={loginForm.handleSubmit}>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header">
            <h4 className='text-center'>Admin Login</h4>
          </div>
          <div className="card-body">
            <div className="my-2">
              <label htmlFor="">UserName/Email</label>
              <input type="text" onChange={loginForm.handleChange} name='username'className={'form-control ' + (loginForm.errors.username&& loginForm.touched.username? "is-invalid" : "")} placeholder='Email Id' />
              {
                loginForm.errors.username&& loginForm.touched.username?<small className='text-danger'>{loginForm.errors.username}</small> :""
              }
            </div>
            <div className="my-2">
              <label htmlFor="">Password</label>
              <input type="password" onChange={loginForm.handleChange} name='password'className={'form-control ' + (loginForm.errors.password&& loginForm.touched.password? "is-invalid" : "")}  placeholder='password' />
              {
                loginForm.errors.password&& loginForm.touched.password?<small className='text-danger'>{loginForm.errors.password}</small> :""
              }
            </div>
          </div>
          <div className="card-footer">
            <button type='submit' className='btn btn-success'>Login</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
  
  
  </>
  
  )
}

export default AdminLogin