import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Student from './Student'
import DashBoard from './DashBoard'
import StudentDetails from './StudentDetails'

const App1 = () => {
  return (
    <div>
     
     <Routes>
        <Route path='/' element={<Student/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/fetch' element={<StudentDetails/>}/>
     </Routes>

    </div>
  )
}

export default App1
