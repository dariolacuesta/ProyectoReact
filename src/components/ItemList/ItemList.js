import React from 'react'
import Item from '../Items/Item'
import  './ItemList.css'


const ItemList = ({items}) =>(<div class="row">
    {items.map((x,index)=>(
        <Item key ={index} item={x}/>
        ))}

</div>)

export default ItemList;