import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import swal from 'sweetalert';

const Login = ({setUser}) => {

    const navigate=useNavigate();

    const [loginData,setloginData]=useState(
        {
            username:"", 
            password:"",
        }
    );

    const login=()=>
    {
        axios.post(`http://localhost:3000/login`,loginData).then((res)=>
        {
        
             if(res.status=200)
             {
                swal("Success", "You clicked the button!", "success");
                sessionStorage.setItem("token",res.data.data.token);
                navigate('/dashboard');
                setUser(true);
                // checkToken();
             }
            else
            {
                swal("Success", "You clicked the button!", "error");
            
                // checkToken();
            }
            //  console.log(res.status)
        },
        )

        // window.axios.response.use(function (response) {
        //     return response;
        // }, function (error) {
        //     if (401 === error.response.status) {
        //         swal({
        //             title: "Session Expired",
        //             text: "Your session has expired. Would you like to be redirected to the login page?",
        //             type: "warning",
        //             showCancelButton: true,
        //             confirmButtonColor: "#DD6B55",
        //             confirmButtonText: "Yes",
        //             closeOnConfirm: false
        //         }, function(){
        //             window.location = '/login';
        //         });
        //     } else {
        //         return Promise.reject(error);
        //     }
        // });

    }
    
   
    const onHandleChange=(e)=>
    { 
     
        setloginData({...loginData,[e.target.name]:e.target.value})
    }

  return (
    <div>
        <div className="content">
        <div className="login">
            <div className="icon">
            <span><FaUserCircle size={"50px"} color={"#1089FF"} /></span>
             <h2>Sign in</h2>
            </div>
        <input type="text" placeholder='Username' name='username' onChange={onHandleChange}/>
        <input type="password" placeholder='Password' name='password' onChange={onHandleChange}/>
        <button  onClick={login}>Login</button>
        </div>
        </div>
        
        
    </div>
  )
}

export default Login