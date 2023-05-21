import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;

    {/*Make sure to import useContext and ShopContext */}
    {/*Grab this context to retrieve value of items in cart*/}
    {/* Also grab addToCart and RemoveFromCart functions */}
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">

        <img src={productImage} />
        <div className="description">
            <p>
                <b> {productName} </b>
            </p>
            <p> ${price}</p>
            {/* Change amount of items in cart */}
            <div className="countHandler"> 
                
                {/* Pass in ID for the cart item */}
                <button onClick={() => removeFromCart(id)}> - </button>

                {/* Item used from ShopContext */}
                {/*Display the ID of the item*/}
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>

                {/* Pass in ID for the cart item */}
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
};

