
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
  <div className="container border border-3 w-50 p-3 mt-3 rounded-3">

    <h1 className="bi bi-person-fill text-primary">
      User Login Form
    </h1>

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

    <div className="mt-3">
      <span>New User?</span>

      <Link to="/post" className="btn btn-primary ms-2">
        Create Account
      </Link>
    </div>

  </div>
</form>
  )
}

export default Student
