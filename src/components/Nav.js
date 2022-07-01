import React, { useRef, useState } from "react"
import useComponentVisible from "./useComponentVisible"

export default function Nav({ cartInfo }) {
  const logo = "./images/logo.svg"
  const cartIcon = "./images/icon-cart.svg"
  const profPhoto = "./images/image-avatar.png"
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"]
  const mobileNavRef = useRef(null)
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const navLinkElements = navLinks.map((item) => {
    return (
      <li className="nav-list-item">
        <button
          onClick={() => hide(cartInfo.setOpenMenu)}
          className="nav__button"
        >
          {item}
        </button>
      </li>
    )
  })
  function hide() {
    cartInfo.setOpenMenu(false)
  }

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
      cartInfo.setCart(false)
    }, 2000)
  }
  const cartEls = (
    <div
      className="cart"
      ref={ref}
      style={{ display: `${isComponentVisible ? "block" : "none"}` }}
    >
      <h4>Cart</h4>
      <hr />
      {cartInfo.cart ? (
        <div className="full-cart">
          <img
            className="full-cart__thumbnail"
            src={shoeImage}
            alt="product-img1"
          />
          <div className="full-cart__about-item">
            <p className="full-cart-item-title">autumn limited edition...</p>
            <p>
              {formatter.format(cartInfo.discountPrice)} x{" "}
              {cartInfo.currentCart.count}{" "}
              <span className="full-cart__total">
                {formatter.format(cartInfo.currentCart.total)}
              </span>
            </p>
          </div>
          <img
            src="./images/icon-delete.svg"
            alt="bin-icon"
            onClick={cartInfo.removeFromCart}
          />
          <button
            onClick={checkOut}
            className={cartInfo.cart ? "addToCart-checkout" : "dp-none"}
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

  return (
    <nav className="nav" role={"navigation"}>
      <div className="nav-cont">
        <button
          className={cartInfo.openMenu ? "burger-menu change" : "burger-menu"}
          onClick={() => {
            cartInfo.toggleMenu()
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
        <img className="logo" src={logo} alt="logo" tabIndex={0} />
        <ul
          className={cartInfo.openMenu ? "nav__ul nav__ul-mobile" : "nav__ul"}
          tabIndex={0}
          ref={mobileNavRef}
          onBlur={hide}
        >
          {navLinkElements}
        </ul>
        <div
          className="notification-cart"
          tabIndex={0}
          onClick={() => {
            setIsComponentVisible((prev) => !prev)
          }}
        >
          <img className="nav__cart-icon" src={cartIcon} alt="cart-icon" />
          {cartInfo.notify && <small>{cartInfo.clickedCart}</small>}
        </div>

        <img
          className="prof-pic"
          src={profPhoto}
          alt="prof-pic"
          tabIndex={0}
          onClick={() => {
            setIsComponentVisible((prev) => !prev)
          }}
        />
        {cartEls}
      </div>
    </nav>
  )
}
