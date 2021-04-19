import React from 'react'
import '../button/Button.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../cartContext/CartContext'


const CardWidget = ({
    type,
    onClick,
    })=>{
    let {cartSize} = useCartContext()

    return (
      <Link to="/cart" onClick={onClick}type={type} className="btn">
          <span className= {`fas fa-cart-plus fa-lg`}> <button className="badge red btn-floating btn-small">{cartSize}</button></span>
      </Link>)}
export default CardWidget;