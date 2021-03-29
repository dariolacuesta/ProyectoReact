import React from 'react';
import './ItemDetail.css';
import {Link} from 'react-router-dom'
import { CounterContainer } from '../ItemCountV2/CounterContainer';


const  ItemDetail= ({item1,song})=>(
    <>
    <div className="container">
    <h1>{item1.name}</h1>
    <h2>{item1.band}</h2>
    <img src={item1.img} alt=""/>
    <h6>{item1.genre}</h6>
    <p>{item1.review}</p>
    <h4>Lista de temas</h4>
    {song}
    <h2>Precio : ${item1.price}</h2>
    </div>
    <div className="x">
    <CounterContainer stockdetail={item1.stock} initial={0}/>
    </div>
    <div className="x">
    <Link to={'/'}className="stroke">
    <i className="fas fa-arrow-left fa-4x"> Inicio</i>
    </Link>
    </div>
    </>)


    export default ItemDetail;
