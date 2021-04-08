import React, { useState } from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../cartContext/CartContext';


    const  Navbar =()=> {
    const  [state,setState] = useState(false)
       
    let {cartSize} = useCartContext();
    let handleClick = ()=>{
        setState({clicked:!state.clicked})
    }

    
        return(
            <nav className="NavbarItems">
                <Link to={'/'}><h1 className="navbar-logo">Music Store <i className="fas fa-compact-disc fa-sm"></i></h1></Link>
                <div className="menu-icon" onClick={handleClick}>
                   <i className={state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                    return(<li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>)
                    })}
                </ul>
                {cartSize >0 && <CardWidget></CardWidget>}
            </nav>
        )
    
}
export default Navbar