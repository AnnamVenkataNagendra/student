
import React, { useState } from 'react'
import StudentData from './StudentData';
import { Link } from 'react-router-dom';

const StudentLoginForm = () => {

    const [getName,setName]=useState({stuName:" ", stuPass:""})

    const [getSuccess, setSuccess]=useState(false);

    const [getMsg,setMsg]=useState('')

    const handelLogin=(e)=>{
        
     e.preventDefault();
     StudentData.post(getName)
     .then(req=>{
        console.log(req.data)
        setName({
            stuName:"",
            stuPass:""
        })
        setSuccess(true);
        setMsg("Registration Successful!")
     }).catch(error=>{
        console.log(error);
        setMsg("User register failed")
        setSuccess(false);
     })


    }
  return (
    <form onSubmit={handelLogin}>
      <div className='container border border-3 w-50 p-3 mt-3 rounded-3'>
        <h1 className='bi bi-person-fill text-primary'>User Login Form</h1>

          <dl>
            <dt>User Name:</dt>
            <dd><input type='text' className='form-control w-50 mx-auto' value={getName.stuName} onChange={(event)=>{setName({...getName, stuName: event.target.value})}} required/></dd>

            <dt>User Password:</dt>
            <dd><input type='password' className='form-control w-50 mx-auto'  value={getName.stuPass} onChange={(event)=>{setName({...getName, stuPass: event.target.value})}} required/></dd>
            <button className='btn btn-danger w-50' type='submit'>Register</button>
            <p className={getSuccess==true? 'text-success' : 'text-danger'}>{getMsg}</p> 
          </dl>
           <Link to='/'>
         <button className='btn btn-primary mt-4 ms-4'>Login User?</button></Link>
    </div>
  </form>
  )
}

export default StudentLoginForm
