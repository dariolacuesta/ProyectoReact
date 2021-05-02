import React from 'react'
import Navbar from "./components/Navbar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import OrderDetail from './components/OrderDetail/OrderDetail'
import {CartContextProvider} from './cartContext/CartContext';
import Checkout from './components/CheckOut/Chekout'
import Releases from './components/Releases/Releases'
import AboutUs from './components/AboutUs/AboutUs'

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
      <Route exact path="/checkout">
        <Checkout/>      
        </Route>
        <Route exact path="/order/:id">
                <OrderDetail/>
        </Route>
        <Route path="/Releases">
      <Releases/>
        </Route>
        <Route path="/AboutUs">
      <AboutUs/>
        </Route>
    </Switch>
</BrowserRouter>
</CartContextProvider>

 </div>
  );}

export default App;
