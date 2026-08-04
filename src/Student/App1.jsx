import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Student from './Student'
import DashBoard from './DashBoard'
import StudentDetails from './StudentDetails'
import StudentLoginForm from './StudentLoginForm'

const App1 = () => {
  return (
    <div>
     
     <Routes>
        <Route path='/' element={<Student/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/fetch' element={<StudentDetails/>}/>
        <Route path='/post' element={<StudentLoginForm/>}/>
     </Routes>

    </div>
  )
}

export default App1
