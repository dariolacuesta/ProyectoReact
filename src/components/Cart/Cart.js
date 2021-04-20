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
       <>
         <table className="container striped centered">
                <thead>
                <tr className="tr">    
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
                </thead>
                <tbody>
             {
              cart.map((x,i)=>{
                  total  += x.item1.price * x.quantity
                  console.log(total)
                  return(
                      <tr key={i}>
                                  <td>{x.item1.name}</td>
                                  <td>{x.quantity}</td>
                                  <td>{x.item1.price} x Unidad</td>
                                  <td>
                                      <button id={i} onClick={(e)=>removeItem(e)} className="far fa-window-close fa-1x"></button>
                                  </td>
                      </tr>)})
             }
             
             <tr>
                 <td/>
                 <td/>
                 <td >Vaciar Carrito</td>
                 <td ><button onClick={()=>RemoveAllitems()} className="fas fa-trash fa-1x"></button></td>
             </tr>
            </tbody>
       </table>
       <div className="row">
           <h6  className="col s6">Total : ${total}</h6>
            <Link to ="/Checkout"  className="paybutton col s2 waves-effect waves-light">
                <i className="material-icons left">payment</i>Finalizar Compra
            </Link>
            <Link to ="/"  className="paybutton col s2 waves-effect waves-light">
                <i className="material-icons left">album</i>Seguir Comprando
            </Link>
       </div>
       </>
       :<>
       <p className="emptyCart">No hay items en el carro,quizas quieras volver al catalogo</p>
       <Link to ="/" className="emptyCart">Catalogo</Link>
       </>
    )
}

export default Cart;