
import React, { useState } from 'react'
import StudentClass from './StudentClass';
import { userContext } from './StudentToken';
import { Link, useNavigate } from 'react-router-dom';
const Student = () => {

   const [getName, setName]=useState({
    stuName:"",
    stuPass:""
})

const {login}=userContext()

const navigate=useNavigate();

    const handelLogin=(e)=>{
        
     e.preventDefault();

     StudentClass.login(getName)
     .then(req=>{
        console.log(req.data)
        alert("User login Success")
        login(req.data)
        navigate("/dashboard")
        setName({
            stuName:"",
            stuPass:""
        })
     }).catch(error=>{
        console.log(error);
        alert("Login faild")
     })


    }

  return (
  <form onSubmit={handelLogin}>
      <div className='container border border-3 w-50 p-3 mt-3 rounded-3'>
        <h1 className='bi bi-person-fill text-primary'>User Login Form</h1>

          <dl>
            <dt>User Name:</dt>
            <dd><input type='text' className='form-control w-50 mx-auto' value={getName.stuName} onChange={(event)=>{setName({...getName, stuName: event.target.value})}}/></dd>

            <dt>User Password:</dt>
            <dd><input type='password' className='form-control w-50 mx-auto'  value={getName.stuPass} onChange={(event)=>{setName({...getName, stuPass: event.target.value})}}/></dd>
            <button className='btn btn-danger w-50'>Login</button>
            <h6 className='text-primary mt-3 ms-3 m-4'>New User?
            </h6>
            <Link to='/post'>Create Account</Link>
          </dl>
        
    </div>
  </form>
  )
}

export default Student
