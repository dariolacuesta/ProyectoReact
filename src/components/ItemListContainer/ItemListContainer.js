import React from 'react'
import  './ItemListContainer.css'
import {useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList"
import { getFirestore } from '../../configs/firebase';
import EmptyList from '../EmptyList/EmptyList';


const ItemListContainer = ()=>{

    const [items,setItems] = useState([])
    // useEffect(()=>{
    //   new Promise((correct)=>{
    //     setTimeout(()=>{
    //       correct(Itemdata);
    //     },2000);

    //   }).then((resultado)=>{
    //   setItems(resultado)
    //   console.log(resultado)
    // })
    // },[]);

    useEffect(()=>{
      const db = getFirestore();
      const menu = db.collection('menu')
      menu.get().then(res =>{
         setItems(res.docs.map(doc=>doc.data()));
     
      })
    },[])

return(
<div>
    {items.length > 0 ? <ItemList items={items}/> :<EmptyList/>}
   
</div>
 )};
 export default ItemListContainer;