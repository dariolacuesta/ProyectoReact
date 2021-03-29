import React,{useEffect, useState} from 'react'
import './Counter.css'

export const Counter = ({initial = 0, stock,onAdd}) =>{

    const [counter,setCounter] = useState(initial);
    let availableStock = stock - counter

    const handleAdd = () =>{
        if(counter < stock){
            setCounter(counter + 1);
        };
    };
    const handleSubstract = () =>{
        if(counter >0){
            setCounter(counter-1)
        };
    };

    return (
        <div className="card col-auto mx-auto text-center w-25">
        <h3 className="mt-2">Stock:{availableStock }</h3>
        <div className="row x d-flex mt-5 mb-3">
            <button onClick={ handleSubstract } className="btn btn-light">-</button>
            <input type="text" className="form-control" style={({ textAlign: "center" })} value={counter} />
            <button onClick={ handleAdd } className="btn btn-light" style={({ marginLeft: "8px" })}>+</button>
        </div>
        <button onClick={ e => onAdd( counter ) } className="btn btn-primary pl-10 pr-10 mt-2 mb-5 pl-3 pr-3"> Agregar </button>
    </div>
    )
}
