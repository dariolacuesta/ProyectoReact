import React from 'react'
import Navbar from "./components/Navbar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart'
import {CartContextProvider} from './cartContext/CartContext';
import {getFirestore} from './configs/firebase'

function App() {

  return (
 <div className="App">
  <CartContextProvider>
    <BrowserRouter>
   <Navbar/>
    <Switch>
      <Route path="/ItemDetailContainer/:id">
          <ItemDetailContainer/>
      </Route>
      <Route path = "/cart">
        <Cart/>
      </Route>
      <Route exact path="/">
          <ItemListContainer/>
      </Route>
    </Switch>
</BrowserRouter>
</CartContextProvider>


 </div>
  );}

export default App;
