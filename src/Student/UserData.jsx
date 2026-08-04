import React, { useEffect, useState } from 'react'
import StudentData from './StudentData';
import { Link } from 'react-router-dom';

import BackendApi from '../BackEndApi/FrontEndApi';
const UserData = () => {


    const [getData,setData]=useState([]);

    useEffect(()=>{
       BackendApi.retrive()
        .then(res=>{
            setData(res.data);
        }).catch(error=> console.log(error))
        
    },[])
  return (
    
  <div className='container mt-3'>
     <div className='row mt-3 p-2'>
      <table className='table table-bordered' >
        <thead>
            <tr>
                <th>Id</th>
                <th>User Name</th>
                <th>Password</th>
            </tr>
        </thead>
        {
             getData.map((data)=>{
                return(
                    <>
                    <tbody key={data.stuId}>
                        <tr>
                            <td>{data.stuId}</td>
                            <td>{data.stuName}</td>
                            <td>{data.stuPass}</td>
                        </tr>

                    </tbody>
                    </>
                )
             })
        }

 <Link to='/'>
 <button className='btn btn-danger mt-4'>Login Page</button></Link>
  <Link to='/dashboard'>
 <button className='btn btn-primary mt-4 ms-4'>Dash Board Page</button></Link>
    </table>
    
  </div>
  </div>
  )
}

export default UserData
