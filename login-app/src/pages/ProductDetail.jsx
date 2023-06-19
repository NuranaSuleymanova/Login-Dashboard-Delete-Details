import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
    const {id}=useParams();
    const [card,setCard]=useState({})
    useEffect(()=>
    {
        axios(`http://localhost:3000/get-data/${id}`).then(res=>
        {
            setCard(res.data.data);
        })
    },[])
    console.log(id);
  return (
    <div className='card-content'><ProductCard card={card} /></div>
  )
}

export default ProductDetail