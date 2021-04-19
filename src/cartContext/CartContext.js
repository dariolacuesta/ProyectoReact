import  React, { useContext, useState } from "react";

export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) =>{
    const [cart,setCart] = useState([])

    const getItem = (id) => cart.find(item =>item.id ===id)

    const clear = ()=> setCart([]);
    
    const removeItem = (id) =>setCart(cart.filter(({item1})=>item1.id!==id))

    const isInCart = (id) => id === undefined ? undefined : getItem(id) !== undefined

    const addItem = (item) =>{
        if(isInCart(item.id)){
            console.log("Item existente")
        }
        else{
            setCart([...cart,item])
            console.log(cart)
        }
    }

    
    const value ={cart, addItem, isInCart,removeFromCart:removeItem,clearCart:clear,cartSize: cart.length}


    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export const useCartContext = () =>{
    const context = useContext(CartContext)
    return context
}


