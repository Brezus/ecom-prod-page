import React, { useContext, useState } from "react"

export default function AboutShoe({ logic }) {
  const cartIcon = "./images/icon-cart.svg"
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
        {"$" + logic.shoePrice + ".00"} <span>50%</span>
      </p>
      <p>{logic.originalPrice}</p>
      <div className="quantity-cont">
        <button onClick={logic.addItem}>+</button>
        <p className="item-count">{logic.itemCount}</p>
        <button onClick={logic.minusItem}>-</button>
      </div>
      <button className="addToCart" onClick={logic.addToCart}>
        <img src={cartIcon} alt="cart-icon" />
        add to cart
      </button>
    </section>
  )
}
