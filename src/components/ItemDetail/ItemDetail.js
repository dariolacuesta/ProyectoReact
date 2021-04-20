import React, { useState } from 'react';
import './ItemDetail.css';
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import {useCartContext} from '../../cartContext/CartContext'



const  ItemDetail= ({item1,song})=>{


        const [stock,setStock] = useState(item1.stock)
        const [finishPurchase,setFinishPurchase] = useState(false);
        const cartContext = useCartContext();

        const newStock = (amount) => {
            if (amount <= stock){
                setStock(stock- amount);
                setFinishPurchase(true)
                cartContext.addItem({
                        item1,
                        quantity:amount
                },
                )}}

        const ShowCounter = () => {
            if(finishPurchase === true){
                return (
                    <>
                    <ItemCount stock = {stock} initial ={1} onAdd ={newStock}/>
                    <Link to ="/cart" className="finish-cart">Ir al Carro</Link>
                </>
                )
            }else {
                return <ItemCount stock ={stock} initial = {1} onAdd ={newStock}/>

        }
    }
    return(
    <>
    <div className="container">
    <h1 className="Title">{item1.name}</h1>
    <h2 className="Band">{item1.band}</h2>
    <img src={item1.img} alt=""/>
    <h6>Genero : {item1.genre}</h6>
    <p className="review">{item1.review}</p>
    <h4 className="Songlist">Lista de temas</h4>
    {song}
    <h2 className="Songlist">Precio : ${item1.price}</h2>
    </div>
    <div className="x">
    <ShowCounter/>
    </div>
    <div className="x">
    <Link to={'/'}className="stroke">
    <i className="fas fa-arrow-left fa-4x"> Inicio</i>
    </Link>
    </div>
    </>
    )
 }

    export default ItemDetail;
