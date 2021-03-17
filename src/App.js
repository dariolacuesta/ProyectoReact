import React from 'react'
import Navbar from "./components/Navbar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useEffect,useState} from "react"

function App() {



  const [items,setItems] = useState([''])
  useEffect(()=>{
    new Promise((correct)=>{
      setTimeout(()=>{
        correct(["ROCK","ACDC","High Voltage","1500"]);
      },2000);
    }).then(resultado=>setItems(resultado))
  });

  return (
 <div className="App">
   <Navbar/>
   <ItemListContainer items={items}/>
 </div>
  );}

export default App;
