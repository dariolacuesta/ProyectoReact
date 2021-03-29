import React from 'react'
import Item from '../Items/Item'
import  './ItemList.css'


const ItemList = ({items}) =>(
<div className="row">
    {items.map((x)=>(
    <Item key ={x.id} item={x}/>
    ))}

</div>)

export default ItemList;