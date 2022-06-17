import React from "react";

export default function Cart({ cartDetails }) {
  const shoeImage = "./images/image-product-1-thumbnail.jpg";
  return (
    <div className="cart">
      <h4>Cart</h4>
      {cartDetails.cart ? (
        <div className="full-cart">
          <img src={shoeImage} alt="product-img1" />
          <p>fall limited edition sneakers</p>
          <p>
            {cartDetails.discountPrice} x {cartDetails.currentCart.count} $
            {cartDetails.currentCart.total}
          </p>
          <img
            src="./images/icon-delete.svg"
            alt="bin-icon"
            onClick={cartDetails.removeFromCart}
          />
        </div>
      ) : (
        <div className="empty-cart">
          <p>your cart is empty</p>
        </div>
      )}
    </div>
  );
}
