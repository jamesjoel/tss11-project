import React,{useState} from 'react'
import { useFormik } from 'formik'
import LoginSchema from "../../../schemas/LoginSchema"


const Login = () => {
  let loginForm = useFormik({
    validationSchema : LoginSchema,
    initialValues : {
      email : "",
      password : ""
    },
    onSubmit : (formdata)=>{
      console.log(formdata)
    }
  })
  

  return (
    <div className='container my-5' style={{ minHeight: "700px"}}>
      <form onSubmit={loginForm.handleSubmit}>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card border-dark'>
            <div className='card-header'>
              <h3>User Login</h3>
            </div>
            <div className='card-body'>
              <div className='m-3'>
                <label>Username/Email</label>
                <input type='text' onChange={loginForm.handleChange} name='email' className={'form-control '+(loginForm.errors.email && loginForm.touched.email ? 'is-invalid' : '')}/>
                {
                  loginForm.errors.email && loginForm.touched.email ? <small className='text-danger'>{loginForm.errors.email}</small> : ""
                }
              </div>
              <div className='m-3'>
                <label>Password</label>
                <input type='password' onChange={loginForm.handleChange} name='password' className={'form-control '+(loginForm.errors.email && loginForm.touched.email ? 'is-invalid' : '')}/>
                {
                  loginForm.errors.password && loginForm.touched.password ? <small className='text-danger'>{loginForm.errors.password}</small> : ""
                }
              </div>
              <div className='card-footer'>
                <button className='btn btn-success btn-sm'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login