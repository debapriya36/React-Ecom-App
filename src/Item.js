import React from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert';

export default function Item({item}) {
  const dispatch=useDispatch();
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <h1>{item.itemName}</h1>
      <img style={{height : '280px' }} src={item.itemImage} className='img-fluid' alt="no-img-found" />
      <h2> Price ~ {item.itemPrice} :/</h2>
      <button className='btn btn-info' onClick={()=>{
         dispatch({ type : 'ADD_ITEM' , payload : item})
         swal("Good Job!", "Successfully added to Cart!", "success");
          }}>ADD TO CART</button>
      
    </div>
  )
}

