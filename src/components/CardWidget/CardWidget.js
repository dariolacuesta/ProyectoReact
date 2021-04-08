import React from 'react'
import '../button/Button.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../cartContext/CartContext'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]


const CardWidget = ({
    children,
    type,
    onClick,
    cartStyle,
    cartSize2
})=>{
    let {cartSize} = useCartContext()

    const checkCartStyle = STYLES.includes(cartStyle) ? cartStyle : STYLES[0]
    const checkCartSize = SIZES.includes(cartSize2) ? cartSize2 : SIZES[0]

    return (
      <Link to="/cart" className= {`btn ${checkCartStyle} ${checkCartSize} fas fa-cart-plus`} onClick={onClick}type={type}>
          <button className="badge cyan">{cartSize}  {children}</button>
      </Link>)}
export default CardWidget;