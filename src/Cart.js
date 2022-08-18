import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import cartReducer from './reducers/cartReducer';
import swal from 'sweetalert';

export default function Cart() {
  const dispatch=useDispatch();

  const cartobj=useSelector(store=>store.cartReducer)
  const tablebody=cartobj.cartItems.map((item)=>{
     return <tr>
        <td> { item.itemName} </td>
        <td> {item.itemPrice} </td>
        <button onClick={()=>{
           dispatch({type : 'DELETE_ITEM', payload : item})
           swal("Item Deleted!", "Item deleted from Cart!", "success");
           }} style={{color : 'yellow'}} className='btn btn-danger'> DELETE</button>
     </tr>
  })
  return (
    <div className='row justify-content-center'>
      <table className='table table-dark col-md-8 table-bordered' > 
      <thead>
      <tr>
        <th>
          Item Name
        </th>
        <th>
          Item Price
        </th>
        <th>
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      {tablebody}
      </tbody>
         
      </table>
    </div>
  )
}
