import React from 'react'
import Item from '../Items/Item';
import './ItemDetail.css'


const  ItemDetail= ({item1,song})=>(
    <div class="container">
    <h1>{item1.name}</h1>
    <h2>{item1.band}</h2>
    <img src={item1.img}/>
    <h6>{item1.genre}</h6>
    <p>{item1.review}</p>
    <h4>Lista de temas</h4>
    {song}
    <h2>Precio : ${item1.price}</h2>
    </div>)


    export default ItemDetail;
