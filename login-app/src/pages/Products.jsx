import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate=useNavigate();
    const [dataProduct ,setDataProducut]=useState([]);
useEffect(()=>
{
    axios(`http://localhost:3000/get-data`).then(res=>
    {
        // console.log(res.data.data);

        setDataProducut(res.data.data);
    })
},[]);


const deleteItem=(id)=>
{
   console.log(id);
axios.delete( `http://localhost:3000/delete-data/${id}`).then(res=>
{
    setDataProducut(res.data.data);
})
};

  return (
    <div> 
     
                <table id="customers">
                <thead>
                    <tr>
                       <th>ID</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Details</th>
                        <th>Delete</th>
                    </tr>
              </thead>
              
              <tbody>
              {
        dataProduct.map(item=>
        {
            if (typeof item.title !== "undefined")
            {
                return ( <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><img src={item.image} alt="" /></td>
                    <td>  {item.title.slice(0,15)}</td>
                    <td>{item.description.slice(0,29)}....</td>
                    <td>{item.category}</td>
                    <td>{item.price }</td>
                    <td><button className='details_btn' onClick={()=>navigate(`/product-detail/${item.id}`)}>Details</button></td>
                    <td><button className='delete_btn'onClick={()=>deleteItem(item.id  )}>Delete</button></td>
                </tr>
                );
               
            }
        }            
            
     )
            }
              </tbody>
        </table>
      
            
            
               
            
        
        
        </div>
  )

}

export default Products