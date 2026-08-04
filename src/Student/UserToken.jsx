
import React, { createContext, useContext, useState } from 'react'

const AuthContext=createContext(null);
const StudentToken = ({ children }) => {

    const [getToken, setToken]=useState(localStorage.getItem('login'));
  
    const login=(token)=>{

        localStorage.setItem('login', token);
        setToken(token);
    }

  return(
      <AuthContext.Provider value={{getToken, login}}>
         {children}
    </AuthContext.Provider>
  )

}

export default StudentToken;
export const userContext=()=>{
    return useContext(AuthContext);
}
