import React from 'react'
import '../button/Button.css'
import {Link} from 'react-router-dom'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const CardWidget = ({
    children,
    type,
    onClick,
    cartStyle,
    cartSize
})=>{
    const checkCartStyle = STYLES.includes(cartStyle) ? cartStyle : STYLES[0]
    const checkCartSize = SIZES.includes(cartSize) ? cartSize : SIZES[0]

    return (
      <Link to="/cart" className= {`btn ${checkCartStyle} ${checkCartSize} fas fa-cart-plus`} onClick={onClick}type={type}>
            {children}
      </Link>)}
export default CardWidget;