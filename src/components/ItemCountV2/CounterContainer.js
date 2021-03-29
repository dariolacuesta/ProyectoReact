import React,{useState} from 'react'
import {Counter} from './Counter'

export const CounterContainer =({stockdetail}) => {
    let stockI = stockdetail;
    const [stock,setStock] = useState(stockdetail);
    {console.log(stockdetail)}
    {console.log(stock)}
    const onAdd = (q) =>{
        if(q <= stockI){
            alert(`Has agregado ${q} elementos al carrito`);
            setStock(stock - q);
       }
        else{
            alert('No hay suficiente stock');
        }
    }
return (
        <div className="mt-5">
            <Counter initial ={0} stock={stockI} onAdd={onAdd}></Counter>
        </div>
    )
}
