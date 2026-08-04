
import React, { useState } from 'react'
import { userContext } from './StudentToken';
import { Link, useNavigate } from 'react-router-dom';
import BackendAi from '../BackEndApi/FrontEndApi'
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

   BackendAi.login(getName)
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
  <>
    <form onSubmit={handelLogin}>
      <div className="container border border-3 w-50 p-3 mt-3 rounded-3">

        <h1>User Login Form</h1>

        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            value={getName.stuName}
            onChange={(e) =>
              setName({ ...getName, stuName: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={getName.stuPass}
            onChange={(e) =>
              setName({ ...getName, stuPass: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Login
        </button>
      </div>
    </form>

    <div className="text-center mt-3">
      <span>New User? </span>
      <Link to="/post">Create Account</Link>
    </div>
  </>
  )
}

export default Student
