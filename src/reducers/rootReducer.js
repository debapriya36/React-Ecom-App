import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import itemsReducer from './itemsReducer';


const rootReducer=combineReducers({
    cartReducer : cartReducer,
    itemsReducer : itemsReducer
})

export default rootReducer