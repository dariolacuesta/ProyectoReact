import React from 'react'
import { useCartContext } from '../../cartContext/CartContext'
import './Cart.css'
import {Link} from 'react-router-dom'


const Cart = () =>{
    const {cart,removeFromCart,clearCart,cartSize} = useCartContext();
    let total = 0;
    
    

    const removeItem = (e) =>{
        if(e.target.nodeName==="path"){
            let {id} = cart[e.target.nearestViewportElement.id]["item1"]
            removeFromCart(id)
        }
        else{
            let{id} = cart[e.target.id]["item1"]
            removeFromCart(id)
        }
    }

    const RemoveAllitems = ()=>{
        if(window.confirm("Se vaciara el carro")){
            total = 0
            clearCart()
        }
    }

    return(
       cartSize >0 ?
       
         <table className="container">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <>
             {
              cart.map((x,i)=>{
                  total  += x.item1.price * x.quantity
                  return(
                      <tr key={i}>
                                  <td>{x.item1.name}</td>
                                  <td>{x.quantity}</td>
                                  <td>{x.item1.price} x Unidad</td>
                                  <td>
                                      <button id={i} onClick={(e)=>removeItem(e)} className="far fa-window-close"></button>
                                  </td>
                      </tr>
                    
                  )
                  
              })
             }
             <tr>
                 <td/>
                 <td/>
                 <td >Vaciar Carrito</td>
                 <td ><button onClick={()=>RemoveAllitems()} className="fas fa-trash"></button></td>
             </tr>
             <h6>Total : {total}</h6>
            </>
        {/* 
       <h1>{cart.map((x)=>(x.item1.name))}</h1>
       <h2>{cart.map((x)=>(x.quantity))}</h2> */}
       </table>
       
       :<>
       <p className="emptyCart">No hay items en el carro,quizas quieras volver al catalogo</p>
       <Link to ="/" className="emptyCart">Catalogo</Link>
       </>
    )
}

export default Cart;