import React from 'react'
import Navbar from "./components/Navbar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
 <div className="App">
   <Navbar/>
   <ItemListContainer curso="React" proyecto ="proyecto"/>
 </div>
  );}

export default App;
