import React from 'react'
import { useFormik } from 'formik'
import SignupSchema from '../../../schemas/SignupSchema'


const Signup = () => {

    let SignupForm = useFormik({
        validationSchema : SignupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repassword : "",
            contact : "",
            address : "",
        },
        onSubmit:(formdata)=>{
            console.log(formdata)
        }
    })

  return (
    <div className='container my-5' style={{minHeight : "700px"}}>
        <form onSubmit={SignupForm.handleSubmit}>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <div className='card'>
                <div className='card-header'>
                <h3>User Signup</h3>
                </div>
                <div className='card-body'>
                    <div className='m-3'>
                        <label>Full Name</label>
                        <input type='text' name='name' onChange={SignupForm.handleChange} className={'form-control '+(SignupForm.errors.name && SignupForm.touched.name ? 'is-invalid' : '' )}/>
                        {
                            SignupForm.errors.name && SignupForm.touched.name ? <small className='text-danger'>{SignupForm.errors.name}</small> : '' 
                        }
                    </div>
                    <div className='m-3'>
                        <label>Email</label>
                        <input type='text' name='email' onChange={SignupForm.handleChange} className={'form-control '+(SignupForm.errors.email && SignupForm.touched.email ? 'is-invalid' : '' )}/>
                        {
                            SignupForm.errors.email && SignupForm.touched.email ? <small className='text-danger'>{SignupForm.errors.email}</small> : '' 
                        }
                    </div>
                    <div className='m-3'>
                        <label>Password</label>
                        <input type='password' onChange={SignupForm.handleChange} name='password' className={'form-control '+(SignupForm.errors.password && SignupForm.touched.password ? 'is-invalid' : '' )} />
                        {
                            SignupForm.errors.password && SignupForm.touched.password ? <small className='text-danger'>{SignupForm.errors.password}</small> : '' 
                        }
                    </div>
                    <div className='m-3'>
                        <label>Re-Password</label>
                        <input type='password' onChange={SignupForm.handleChange} name='password' className={'form-control '+(SignupForm.errors.repassword && SignupForm.touched.repassword ? 'is-invalid' : '' )} />
                        {
                            SignupForm.errors.repassword && SignupForm.touched.repassword ? <small className='text-danger'>{SignupForm.errors.repassword}</small> : '' 
                        }
                    </div>
                    <div className='m-3'>
                        <label>Contact</label>
                        <input type='password' onChange={SignupForm.handleChange} name='repassword' className={'form-control '+(SignupForm.errors.contact && SignupForm.touched.contact ? 'is-invalid' : '' )} />
                        {
                            SignupForm.errors.contact && SignupForm.touched.contact ? <small className='text-danger'>{SignupForm.errors.contact}</small> : '' 
                        }
                    </div>
                    <div className='m-3'>
                        <label>Address</label>
                        <textarea onChange={SignupForm.handleChange} className={'form-control '+(SignupForm.errors.address && SignupForm.touched.address ? 'is-invalid' : '' )}></textarea>
                        {
                            SignupForm.errors.address && SignupForm.touched.address ? <small className='text-danger'>{SignupForm.errors.address}</small> : '' 
                        }
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success btn-sm'>Signup</button>
                </div>
            </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Signup