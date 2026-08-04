import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Student from './Student/Student.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import StudentToken from './Student/StudentToken.jsx'

import {BrowserRouter} from 'react-router-dom'
import App1 from './Student/App1.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <StudentToken>
      <App1 />
    </StudentToken>
   </BrowserRouter>
  </StrictMode>,
)
