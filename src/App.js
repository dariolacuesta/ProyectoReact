import React from 'react'
import Navbar from "./components/Navbar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {

  return (
 <div className="App">
   <BrowserRouter>
   <Navbar/>
    <Switch>
      <Route path="/ItemDetailContainer/:id">
          <ItemDetailContainer/>
      </Route>
      <Route exact path="/">
          <ItemListContainer/>
      </Route>
    </Switch>
</BrowserRouter>
 </div>
  );}

export default App;
