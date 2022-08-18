import React from 'react'
import { useSelector } from 'react-redux';
import itemsReducer from './reducers/itemsReducer';
import Item from './Item';
import { useState } from 'react';
export default function () {

  const [search,setSearch]=useState();


  const itemsobj=useSelector(store=>store.itemsReducer);
  const [itemlist, setItemslist]=useState(itemsobj.items);
  const itemdata=itemlist.map((item)=>{
    return <div className='col-md-4'>
      <Item  item={item}/>
    </div>
  })

  function filteritems()
  {
    // alert(search);
    const duplist=itemsobj.items;
    const filteredlist=duplist.filter(item=>item.itemName.toLowerCase().includes(search.toLowerCase()));
   setItemslist(filteredlist);

  }



  return (
    <div className='container'>
          <input type="text"  placeholder='search items' className='form-control mt-2 mb-5 ' style={{borderColor : 'black'}} 
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
           onKeyUp={filteritems}
           />

          <div className="row m-1">
            {itemdata}
          </div>
    </div>
  )
}
