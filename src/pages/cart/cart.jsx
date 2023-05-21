import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";

import { useNavigate } from "react-router-dom"

export const Cart = () => {

    {/* Grab cart items and total amount from shop context */}
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    {/* Grab the total amount */}
    const totalAmount = getTotalCartAmount()

    {/* Used to navigate pages */}
    const navigate = useNavigate()

    return (
    <div className="cart">
      <div>
        <h1>
            Your Cart Items
        </h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            } 
        })}

      </div>

        {/* If total amount greater than 0, display labels, buttons, etc. */}
        {totalAmount > 0 ? (
            <div className="checkout">
                
                {/* Grab the total amount of the price */}
                <p> Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/")}> Continue Shopping</button>
                <button> Checkout </button>  
            
            </div>          
        
        //else
        ) : ( 
            <h1> Your Cart is Empty</h1> 
        )}
    </div>
  );
};
