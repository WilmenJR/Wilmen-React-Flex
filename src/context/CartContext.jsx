import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {

        if(isInCart(item.id)) {
            const updateCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return {...prod, quantity: prod.quantity + quantity}
                } else {
                    return prod
                }
            })
            setCart(updateCart)
        }else{  
        setCart([...cart, {...item, quantity}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }   

    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0) 
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartTotal, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)