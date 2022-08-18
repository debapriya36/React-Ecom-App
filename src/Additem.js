import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

export default function Additem() {
  
  const navigate=useNavigate();

   const dispatch=useDispatch();

  const[name,setName]=useState('');
  const[url,setUrl]=useState('');
  const[price,setPrice]=useState('');
 
  function addi()
  {
      let item ={
        itemName : name,
        itemImage : url,
        itemPrice : price
      }

      dispatch({type : 'add_item', payload : item})
      swal("Congrats!", "Item added Successfully!", "success");
      navigate('/');

  }

  return (
    <div className=' row justify-content-center mt-5'>
 
         <div  className="col-md-6">
          <input style={{borderColor : 'black'}} type="text" placeholder='Item-Name' className='form-control'
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}
          />
          <br />
           <input  style={{borderColor : 'black'}} type="text" placeholder='Image-Url' className='form-control'
              value={url} 
            onChange={(e)=>{setUrl(e.target.value)}}
            />
            <br />
           <input style={{borderColor : 'black'}} type="text" placeholder='Item-Price'  className='form-control'
            value={price} 
            onChange={(e)=>{setPrice(e.target.value)}}
             />
             <br />
             <button onClick={addi} className='btn btn-success'>ADD ITEM</button>
         </div> 
    </div>
  )
}
