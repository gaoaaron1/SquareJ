import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);


{/* function for stock in cart */}
const getDefaultCart = () => {
    
    let cart = {};

    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
  
    const [cartItems, setCartItems] = useState(getDefaultCart());
  
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    {/* Method used to change the value of stock in item */}
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    {/* Method used to get the total amount of stock in items */}
    const getTotalCartAmount = (itemId) => {
        
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                {/* Find an element in array where product id is equivalent to item */}
                {/* Find product to get access to its price */}
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount;
    }

    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount,
        getTotalCartAmount
    };


    return (
    <ShopContext.Provider value={contextValue}> 
        {props.children}  
    </ShopContext.Provider>
  ) 
};
