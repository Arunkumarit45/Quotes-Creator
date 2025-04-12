import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    
    const[username,setUserName]=useState("");
    const[otp,setOtp]=useState("");
    const navigate = useNavigate();

    const handleuserlogin = async (e) =>{
        
        e.preventDefault();
        
        const response = await fetch('https://assignment.stage.crafto.app/login',{
                                method: "POST",
                                headers: { 
                                        "Content-Type" : "application/json" 
                                    },
                                body: JSON.stringify( { username , otp } )
                                });

        if(response.ok){

            const data = await response.json();
            console.log('Token-' , data.token);
            sessionStorage.setItem("token", data.token)
            navigate('/quotes');
        
        }else{
        
            alert(" Login Failed ")
            return;
        
        }

    }

    return (
        <div className='login-container'>
            
            <div className='login-box'>
                
                <h2>Login</h2>
                
                <form onSubmit={handleuserlogin}>
                    
                    <div className='inp'>
                        <label>User Name</label>
                        < input type='text'  placeholder='Enter User Name'   value={username}    
                            onChange={(e)=>setUserName(e.target.value)}     required    />
                    </div>
            
                    <div className='inp'>
                        <label>OTP</label>
                        < input  type='password' placeholder='Enter OTP'     value={otp}
                            onChange={(e)=>setOtp(e.target.value)}          required    />
                    </div>
                    
                    <button type='submit' className='login-btn'>Login</button>

                </form>

            </div>

        </div>

    )
}

export default Login;