import { useEffect, useState } from "react";
import { Route, Routes,Navigate  } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import jwt_decode from "jwt-decode";
import ProductDetail from "./pages/ProductDetail";

function App() {
  // Session storage-da olan tokenimizo jwt decode-de cagiririq
  const [user,setUser]=useState(null);


  useEffect(()=>
  {
    const token=sessionStorage.getItem("token");
    if(token)
    {
      let decoded = jwt_decode(token);
      setUser(decoded.sub);
      console.log(decoded);
    }
  },[user]
  );
  // const checkToken=(tokenPassLogin)=>
  // {
  //   const token=sessionStorage.getItem("token");
  //    if(tokenPassLogin===token)
  //    {
  //     setUser(token);
  //    }
  // }
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={ user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
      <Route path="/dashboard" element={user ? <Dashboard setUser={setUser}/>: <Navigate to="/"/>} />
      <Route path="/product-detail/:id" element ={user? <ProductDetail setUser={setUser}/>  :<Navigate to="/" />}/>
    </Routes>
    </div>

  );
}

export default App;
 

// checkToken={checkToken}