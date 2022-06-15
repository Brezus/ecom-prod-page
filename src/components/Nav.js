import React from "react";

export default function Nav() {
  const logo = <img src="./images/logo.svg" alt="logo" />;
  const cartIcon = <img src="./images/icon-cart.svg" alt="cart-icon" />;
  const profPhoto = <img src="./images/image-avatar.png" alt="prof-photo" />;

  return (
    <nav>
      <a href="#">{logo}</a>
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
      </div>
    </nav>
  );
}
