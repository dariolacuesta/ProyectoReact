import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) => {


return <form className="itemcount">
     <p className="stock">Stock: {stock}</p>
    <br/>
    <input id='cantidad' type="number" placeholder={initial}></input>
    <br/>
    <button onClick ={(e)=> onAdd(e,1)}  >Agregar al Carrito</button>
</form>
};




export default ItemCount;