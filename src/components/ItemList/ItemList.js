import React from 'react'
import Item from '../Items/Item'
import  './ItemList.css'
import Footer from  '../Footer/Footer'

const ItemList = ({items}) =>(
<>
<div className="row">
    {items.map((x)=>(
    <Item key ={x.id} item={x}/>
    ))}  
</div>
<Footer/>
</>)
export default ItemList;