import React, { useEffect, useState, useRef } from "react"
import useComponentVisible from "./useComponentVisible"

export default function Cart({ cartDetails }) {
  const { ref, isComponentVisible } = useComponentVisible(true)
  const shoeImage = "./images/image-product-1-thumbnail.jpg"
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  const [checkedOut, setCheckedOut] = useState(false)

  function checkOut() {
    setCheckedOut(true)
    setTimeout(() => {
      cartDetails.setCart(false)
    }, 2000)
  }

  return (
    <div
      className="cart"
      ref={ref}
      style={{ display: `${isComponentVisible}` }}
    >
      <h4>Cart</h4>
      <hr />
      {cartDetails.cart ? (
        <div className="full-cart">
          <img
            className="full-cart__thumbnail"
            src={shoeImage}
            alt="product-img1"
          />
          <div className="full-cart__about-item">
            <p className="full-cart-item-title">autumn limited edition...</p>
            <p>
              {formatter.format(cartDetails.discountPrice)} x{" "}
              {cartDetails.currentCart.count}{" "}
              <span className="full-cart__total">
                {formatter.format(cartDetails.currentCart.total)}
              </span>
            </p>
          </div>
          <img
            src="./images/icon-delete.svg"
            alt="bin-icon"
            onClick={cartDetails.removeFromCart}
          />
          <button
            onClick={checkOut}
            className={cartDetails.cart ? "addToCart-checkout" : "dp-none"}
          >
            {checkedOut ? "Placing Order..." : "Checkout"}
          </button>
        </div>
      ) : (
        <div className="empty-cart">
          <p>
            {checkedOut
              ? "Thank you for your purchase."
              : "Your cart is empty."}
          </p>
        </div>
      )}
    </div>
  )
}
