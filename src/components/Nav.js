import React from "react";
import Cart from "./Cart";

export default function Nav({ cartInfo }) {
  const logo = <img src="./images/logo.svg" alt="logo" />;
  const cartIcon = <img src="./images/icon-cart.svg" alt="cart-icon" />;
  const profPhoto = (
    <img
      src="./images/image-avatar.png"
      alt="prof-pic"
      onClick={cartInfo.toggleCart}
    />
  );

  return (
    <nav>
      {logo}
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        {cartIcon}
        <div className="profile-photo">{profPhoto}</div>
        {cartInfo.openCart && <Cart cartDetails={cartInfo} />}
      </div>
    </nav>
  );
}
