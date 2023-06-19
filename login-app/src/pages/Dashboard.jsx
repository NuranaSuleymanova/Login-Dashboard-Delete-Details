import React from 'react'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Logout from './Logout';
import Products from './Products';


const Dashboard = ({setUser}) => {

    const navigate=useNavigate();
  return (
    <div>
    
        <Products />
        <Logout />
        {/* <button className='logOut' onClick={()=>
        {
           sessionStorage.removeItem("token");
           navigate("/")
           setUser(false);

        }}>Logout</button> */}
    </div>
  )
}

export default Dashboard