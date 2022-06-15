import React, { useContext } from "react";

export default function AboutShoe() {
  const cartIcon = <img src="./images/icon-cart.svg" alt="cart-icon" />;
  return (
    <section>
      <h4>Sneaker Company</h4>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <p>
        $125.00 <span>50%</span>
      </p>
      <p>$250.00</p>
      <div className="quantity-cont">
        <button>+</button>
        <p className="item-count">0</p>
        <button>-</button>
      </div>
      <button className="addToCart">{cartIcon}add to cart</button>
    </section>
  );
}
