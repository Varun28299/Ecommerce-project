import React from 'react'
import Layout from '../common/Layout'

const Login = () => {
  return (
   <Layout>

    <div className="container d-flex justify-content-center py-5">
        <div className="card shadow border-0 login">
           <div className="card-body p-4">
            <h3>Admin Login</h3>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Email</label>
                    <input type="text" className='form-control' placeholder='Email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Password</label>
                    <input type="password" className='form-control' placeholder='Password' />
                </div>

                <button className='btn btn-secondary'>Login</button>
           </div>
        </div>
    </div>

   </Layout>
  )
}

export default Login
