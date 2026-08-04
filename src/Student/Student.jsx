
import React, { useState } from 'react'
import StudentClass from './StudentClass';
import { userContext } from './StudentToken';
import { Link, useNavigate } from 'react-router-dom';
const Student = () => {

   const [getName, setName]=useState({
    stuName:"",
    stuPass:""
})

  const [getSuccess, setSuccess]=useState(false);

    const [getMsg,setMsg]=useState('')

const {login}=userContext()

const navigate=useNavigate();

    const handelLogin=(e)=>{
        
     e.preventDefault();

     StudentClass.login(getName)
     .then(req=>{
        console.log(req.data)
        login(req.data)
        navigate("/dashboard")
        setName({
            stuName:"",
            stuPass:""
        })
         setSuccess(true);
        setMsg("Login Successful!")
     }).catch(error=>{
        console.log(error);
         setMsg("User Login Failed")
        setSuccess(false);
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
              <button type="submit" className="btn btn-danger w-50">
                   Login
                   </button>           
             <h6 className='text-primary mt-3 ms-3 m-4'>New User?</h6>
              <p className={getSuccess==true? 'text-success' : 'text-danger'}>{getMsg}</p> 

             <div className="mt-3">
               <Link to="/post" className="btn btn-primary">
                    Create Account
                    </Link>
                   </div>    
          </dl>
        
    </div>
  </form>
  )
}

export default Student
