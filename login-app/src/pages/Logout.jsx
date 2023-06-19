import React from 'react';
import { useNavigate } from "react-router-dom";


const Logout = (setUser) => {
    const navigate=useNavigate();
  return (
    <div>
        
        <button className='logOut' onClick={()=>
        {
           sessionStorage.removeItem("token");
           navigate("/")
           setUser(false);

        }}>Logout</button>
    </div>
  )
}

export default Logout