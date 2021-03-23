import React from 'react'
import Navbar from "./components/Navbar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useEffect,useState} from "react"
import Itemdata from './mock-data/Itemdata.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [items,setItems] = useState([])
  useEffect(()=>{
    new Promise((correct)=>{
      setTimeout(()=>{
        correct(Itemdata);
      },2000);
    }).then((resultado)=>setItems(resultado))
  },[]);

  return (
 <div className="App">
   <Navbar/>
   {/* <ItemListContainer items={items}/> */}
   <ItemDetailContainer/>
 </div>
  );}

export default App;
