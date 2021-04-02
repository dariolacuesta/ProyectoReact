import { useState} from "react";
import  './ItemCount.css'

const ItemCount = ({stock,initial,onAdd}) => {
const [counter,setCounter] = useState(initial);

const addProduct = (e) => {
    e.preventDefault();
    onAdd(counter);
    setCounter(initial);
}

const addCounter = (e) => {
    e.preventDefault();
    setCounter(counter < stock ? counter +1 :counter)
}

const restCounter = (e) => {
    e.preventDefault();
    setCounter(counter > initial ? counter -1 : counter)
}

return (


<div>
            <form>
                {
                    stock
                    ?
                    <>
                        <div className="div-buttons">
                            <button className="btn btn-sucess" onClick={(e) => restCounter(e)}>-</button>
                            <label className="counter">{counter}</label>
                            <button className="btn btn-sucess" onClick={(e) => addCounter(e)}>+</button>
                        </div>
                        <button className="btn waves-effect waves-red" onClick={(e) => addProduct(e)}>Añadir al carrito</button>
                    </>
                    :
                    <span className="stock-counter">Sin stock</span>
                }
            </form>
            <span className="span-stock">Stock: {stock}</span>
        </div>);
};
export default ItemCount;