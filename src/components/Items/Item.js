import React from 'react'
import './item.css'

const Item = ({item}) =>
 <div class="card">
  <div class="col s2 cardstyle z-depth-1 card2">
    <div class="card-image">
    <img src={item.img}/>
      <div class="card-title" style={{fontSize:"30px"}}>{item.name}</div>
    </div>
    <div class="card-content">
    <li>Disco: {item.name}</li>
    <li>Banda: {item.band}</li>
    <li>Precio: {item.price}</li>
    <li>Stock: {item.stock}</li>
    <li>Genero: {item.genre}</li>
    <button class="trans waves-effect waves-light btn-small">Comprar</button>
    </div>
  </div>
</div>

export default Item;

