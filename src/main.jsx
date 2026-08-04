import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter} from 'react-router-dom'
import UserLoginToken from './Student/UserToken'
import App1 from './Student/App1'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <UserLoginToken>
      <App1/>
    </UserLoginToken>
   </BrowserRouter>
  </StrictMode>,
)
