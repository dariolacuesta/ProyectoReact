import React from 'react'
import './item.css'

const Item = (props) =>
 <div class="card">
  <div class="col s2 cardstyle z-depth-1 card2">
    <div class="card-image">
    <img src={props.item.img}/>
      <div class="card-title" style={{fontSize:"30px"}}>{props.item.name}</div>
    </div>
    <div class="card-content">
         <li>Banda: {props.item.band}</li>
    <li>Banda: {props.item.band}</li>
    <li>Precio: {props.item.price}</li>
    <li>Stock: {props.item.stock}</li>
    <li>Genero: {props.item.genre}</li>
    <button class="trans waves-effect waves-light btn-small">Comprar</button>
    </div>
  </div>
</div>



export default Item;


{/* <div>
<li> CD: {props.item.name}</li>
<img src={props.item.img}/>
<li>Banda :{props.item.band}</li>
<li>Precio: {props.item.price}</li>
<li>Stock: {props.item.stock}</li>
<li>Genero: {props.item.genre}</li>
</div> */}

{/* <div class="row">
<div class="col s4 m7">
  <div class="card ">
    <div class="card-image">
    <img src={props.item.img}/>
      <span class="card-title">{props.item.name}</span>
    </div>
    <div class="card-content">
    <li>Banda :{props.item.band}</li>
    <li>Precio: {props.item.price}</li>
    <li>Stock: {props.item.stock}</li>
    <li>Genero: {props.item.genre}</li>
<button class="waves-effect waves-light btn">Comprar</button>
    </div>
  </div>
</div>
</div> */}