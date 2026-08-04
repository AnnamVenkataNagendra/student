import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserLogin from './UserLogin'
import UserData from './UserData'
import UserRegister from './UserRegister'
const App1 = () => {
  return (
    <div>
     
     <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/fetch' element={<UserData/>}/>
        <Route path='/post' element={<UserRegister/>}/>
     </Routes>

    </div>
  )
}

export default App1
