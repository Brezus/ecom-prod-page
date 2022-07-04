import React, { useRef } from "react"
import Cart from "./Cart"

export default function Nav({ cartInfo }) {
  const logo = "./images/logo.svg"
  const cartIcon = "./images/icon-cart.svg"
  const profPhoto = "./images/image-avatar.png"
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"]
  const mobileNavRef = useRef(null)
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

  return (
    <nav className="nav" role={"navigation"}>
      <div className="nav-cont">
        <button
          className={cartInfo.openMenu ? "burger-menu change" : "burger-menu"}
          onClick={() => {
            cartInfo.toggleMenu()
            // mobileNavRef.current.focus()
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
        <div className="notification-cart" tabIndex={0}>
          <img
            onClick={cartInfo.toggleCart}
            className="nav__cart-icon"
            src={cartIcon}
            alt="cart-icon"
          />
          {cartInfo.notify && !cartInfo.openCart ? (
            <small>{cartInfo.clickedCart}</small>
          ) : null}
        </div>
        <img
          className="prof-pic"
          src={profPhoto}
          alt="prof-pic"
          tabIndex={0}
          onClick={cartInfo.toggleCart}
        />
        {cartInfo.openCart && <Cart cartDetails={cartInfo} />}
      </div>
    </nav>
  )
}

// ;<div className="cart" ref={cartRef}>
//   {cartInfo.openCart && <Cart cartDetails={cartInfo} />}
// </div>
