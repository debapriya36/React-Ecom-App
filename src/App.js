import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Items from './Items';
import Additem from './Additem';
import Cart from './Cart';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react'
import swal from 'sweetalert';
import Footer from './Footer';


function App() {

  const persistConfig={
    key : 'root', 
    storage
 }
 const persist_Reducer=persistReducer(persistConfig,rootReducer);
  const store=createStore(persist_Reducer);
   const persistor= persistStore(store);
 


  return (
    <div className="App">


     <Provider store={store}>
     <PersistGate persistor={persistor}>
     <Navbar/>
        <BrowserRouter>
        <Routes>
                 <Route exact path='/' element={< Items />}></Route>
                 <Route exact path='/additem' element={< Additem />}></Route>
                 <Route exact path='/cart' element={< Cart />}></Route>
                
          </Routes>
        </BrowserRouter>
       
      
     </PersistGate>
   </Provider>
   
    </div>
  );
}

export default App;
