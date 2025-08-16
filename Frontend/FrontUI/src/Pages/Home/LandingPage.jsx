import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    const handleNavigation = (path)=>{
        if(path === "Login")
            navigate("/Login")
        else
            navigate("/SignUp")

    }
  return (
    <div className='font-urbanist h-screen flex items-center justify-center gap-4'>
        <button className='btn-large' onClick={()=>handleNavigation("Login")} >Login</button>
        <button className='btn-large'  onClick={()=>handleNavigation("SignUp")} > SignUp</button>
    </div>
  )
}

export default LandingPage