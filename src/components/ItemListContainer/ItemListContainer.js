import React from 'react'
import  './ItemListContainer.css'
import  ItemCount from '../ItemCount/ItemCount'
import {useState} from "react";

const ItemListContainer = ({curso,proyecto})=>{
    const [currentStock,setCurrentStock] = useState(5)
    const restartStock = (e,newStock)=>{
    e.preventDefault();
    // if(currentStock === 0){
    //     buttonState = 'true'
    // }
    setCurrentStock((currentStock)=>currentStock-newStock);}

return(
<div className="itemListContainer fa-3x" >
    <h2>Bienvenido a mi {proyecto}</h2>
    <p> Este sera el area utilizado para renderizar elementos en el {proyecto} final de {curso}</p>
    <p>Sitio aun en Construcción</p>
    <ItemCount stock={currentStock} initial={1} onAdd={restartStock}/>
 </div>
 )};

 export default ItemListContainer;