import React from 'react'
import Item from '../Items/Item'
import  './ItemList.css'


const ItemList = (props) =>(<ul>
    {props.items.map((x,index)=>(
        <Item key ={index} item={x}/>
        ))}

</ul>)

export default ItemList;