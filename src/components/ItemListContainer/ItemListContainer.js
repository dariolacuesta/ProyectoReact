import React from 'react'
import  './ItemListContainer.css'
import  ItemCount from '../ItemCount/ItemCount'
import {useState} from "react";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = (props)=>{
    const [currentStock,setCurrentStock] = useState(5)
    const restartStock = (e,newStock)=>{
    e.preventDefault();

    setCurrentStock((currentStock)=>(currentStock-newStock));}

return(
<div className="itemListContainer fa-3x" >

    <ItemCount stock={currentStock} initial={1} onAdd={restartStock}/>
    <ItemList items={props.items} />
</div>
 )};

 export default ItemListContainer;