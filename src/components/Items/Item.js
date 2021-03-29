import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

const Item = ({item}) =>
 <div className="card">
  <div className="col s2 cardstyle z-depth-1 card2">
  <Link to={`/ItemDetailContainer/${item.id}`} style={{color: "black"}}>
    <div className="card-image">
    <img src={item.img} alt=""/>
      <div className="card-title" style={{fontSize:"  30px"}}>{item.name}</div>
    </div>
    <div className="card-content">
    <li>Disco: {item.name}</li>
    <li>Banda: {item.band}</li>
    <li>Precio: {item.price}</li>
    <li>Stock: {item.stock}</li>
    <li>Genero: {item.genre}</li>
    <button className="trans waves-effect waves-light btn-small">Comprar</button>
    </div>
    </Link>
  </div>
</div>

export default Item;

