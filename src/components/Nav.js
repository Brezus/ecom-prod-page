import React from "react"
import Cart from "./Cart"

export default function Nav({ cartInfo }) {
  const logo = "./images/logo.svg"
  const cartIcon = "./images/icon-cart.svg"
  const profPhoto = (
    <img
      className="prof-pic"
      src="./images/image-avatar.png"
      alt="prof-pic"
      onClick={cartInfo.toggleCart}
    />
  )

  return (
    <nav className="nav">
      <div
        className={cartInfo.openMenu ? "burger-menu change" : "burger-menu"}
        onClick={cartInfo.toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <img className="logo" src={logo} alt="logo" />
      <ul className="nav__ul">
        <li className="nav-list-item">
          <button className="nav__button">Collections</button>
        </li>
        <li className="nav-list-item">
          <button className="nav__button">Men</button>
        </li>
        <li className="nav-list-item">
          <button className="nav__button">Women</button>
        </li>
        <li className="nav-list-item">
          <button className="nav__button">About</button>
        </li>
        <li className="nav-list-item">
          <button className="nav__button">Contact</button>
        </li>
      </ul>
      <img className="nav__cart-icon" src={cartIcon} alt="cart-icon" />
      <div className="nav__profile-photo">{profPhoto}</div>
      {cartInfo.openCart && <Cart cartDetails={cartInfo} />}
    </nav>
  )
}
