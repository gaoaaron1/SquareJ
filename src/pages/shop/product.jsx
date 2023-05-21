import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

  // Check if the query is empty or if the productName includes the query
  const shouldDisplayProduct =
    props.query === '' || productName.toLowerCase().includes(props.query.toLowerCase());


    return (

        //Render the product if the conditions are met
        shouldDisplayProduct && (

            
          <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
              <p>
                <b>{productName}</b>
              </p>
              <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
          </div>

        )

      );
    };


