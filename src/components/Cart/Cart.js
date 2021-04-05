import React from 'react'
import { useCartContext } from '../../cartContext/CartContext'

const Cart = () =>{
    const {cart,removeFromCart,clearCart,cartSize} = useCartContext();
    let total = 0;
    console.log(cart.length);
    console.log(cart.map((x)=>(x.item1.name)))
    console.log(cart.map((x)=>(x.quantity)))

    const removeItem = (e) =>{
        if(e.target.nodeName==="path"){
            let {id} = cart[e.target.nearestViewportElement.id]["item"]
            removeFromCart(id)
        }
        else{
            let{id} = cart[e.target.id]["item"]
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
            <tbody>
             {
              cart.map((x,i)=>{
                  total  += x.price
                  return(
                      <tr key={i}>
                                  <td>{x.item1.name}</td>
                                  <td>{x.quantity}</td>
                                  <td>{x.item1.price} x Unidad</td>
                      </tr>

                  )
              })
             }
            </tbody>
        {/* 
       <h1>{cart.map((x)=>(x.item1.name))}</h1>
       <h2>{cart.map((x)=>(x.quantity))}</h2> */}
       </table>
       :<h1>No hay items en el carro</h1>

    )
}

export default Cart;