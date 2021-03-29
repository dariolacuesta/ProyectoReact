import React from 'react'
import  './ItemListContainer.css'
import Itemdata from '../../mock-data/Itemdata.jsx'
import {useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({})=>{

    const [items,setItems] = useState([])
    useEffect(()=>{
      new Promise((correct)=>{
        setTimeout(()=>{
          correct(Itemdata);
        },2000);

      }).then((resultado)=>
      setItems(resultado)
      )
    },[]);

return(
<div>
    <ItemList items={items}/>
</div>
 )};
 export default ItemListContainer;