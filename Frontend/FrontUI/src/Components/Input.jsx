import {FaRegEye , FaRegEyeSlash} from "react-icons/fa"
import React, { useState } from 'react'

const Input = ({value, onchange , label, placeholder, type}) => {
    const [showPassword, setshowPassword] = useState(false)

    const ToggleShowPassword = ()=>{
        setshowPassword(!showPassword);
    }
  return (
    <div className='flex flex-col my-2 space-y-1.5 '>
        <label htmlFor="" className="font-medium" >{label}</label>
        <input type={ type =="password" ? (showPassword ? "text" : "password") : type}
            placeholder={placeholder}
            className='  p-3 bg-slate-50 relative outline-none rounded-md'
            value={value}
            onChange={(e)=>onchange(e)}
        />
        {
            type == "password" && (
                <>
                    {
                        showPassword ? (
                            <div className="border border-black"  onClick={ToggleShowPassword}>
                                <FaRegEye size={22} className='border'/>
                            </div>
                        )
                        :
                        (
                            <FaRegEyeSlash size={22} className='' onClick={ToggleShowPassword} />
                        )

                    }

                </>
            )
        }
    </div>
  )
}

export default Input