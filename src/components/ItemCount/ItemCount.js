import { useState,useRef } from "react";
import  './ItemCount.css'

const ItemCount = ({stock,initial,onAdd}) => {
const [counter,setCurrentStock] = useState(0);
const onChange = (e)=>{
e.preventDefault();
const  actualStock = stock - e.target.value
if(actualStock<0)
    counterInput.current.disabled = true
else
    counterInput.current.disabled = false

    setCurrentStock(e.target.value);
};
const counterInput = useRef(null)

return <form className="itemcount">
     <p className="stock">Stock: {stock}</p>
    <br/>
    <input onChange={(e)=>onChange(e)} id='cantidad' type="number" placeholder={initial} min="0" step="1"></input>
    <br/>
    <button onClick ={(e)=> onAdd(e,counter)} ref={counterInput} >Agregar al Carrito</button>
</form>
};

export default ItemCount;