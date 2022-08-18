const initaildata={
    cartItems:[]
}

export default function cartReducer(state=initaildata, action)
{
    switch(action.type)
    {
      case 'ADD_ITEM': return {
        ...state,
        cartItems : [...state.cartItems, action.payload] 
      }
      case 'DELETE_ITEM' : return {
          ...state,
          cartItems : state.cartItems.filter(item=>item.itemName !== action.payload.itemName)
      }
      default : {
        return state;
      }
    }
} 