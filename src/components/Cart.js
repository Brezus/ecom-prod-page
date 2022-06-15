import React from "react";

export default function Cart({ cartDetails }) {
  const shoeImage = "./images/image-product-1-thumbnail.jpg";
  //   console.log(cartDetails);
  console.log(cartDetails.cart);
  return (
    <div className="cart">
      <h4>Cart</h4>
      {cartDetails.cart ? (
        <div className="cart-item">
          <img src={shoeImage} alt="product-img1" />
          <p>fall limited edition sneakers</p>
          <p>
            {cartDetails.discountPrice +
              "x" +
              cartDetails.itemCount +
              "" +
              cartDetails.shoePrice}
          </p>
          <img
            src="./images/icon-delete.svg"
            alt="bin-icon"
            onClick={cartDetails.removeFromCart}
          />
        </div>
      ) : (
        <p>your cart is empty</p>
      )}
    </div>
  );
}
