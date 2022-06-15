import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import React, { useState } from "react";

export default function App() {
  const oGPrice = 250;
  const discountPrice = 250 / 2;
  const [originalPrice, setOriginalPrice] = useState(oGPrice);
  const [shoePrice, setShoePrice] = useState(discountPrice);
  const [itemCount, setItemCount] = useState(1);
  const [discount, setDiscount] = useState(true);
  const [cart, setCart] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  function toggleCart() {
    setOpenCart((prev) => !prev);
  }

  function addToCart() {
    setCart(true);
  }
  function removeFromCart() {
    setCart(false);
  }

  function addItem() {
    setItemCount((prevCount) => prevCount + 1);
    setShoePrice((prevPrice) => prevPrice + discountPrice);
    setOriginalPrice((prevPrice) => prevPrice + oGPrice);
  }
  function minusItem() {
    setItemCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
    setShoePrice((prevPrice) =>
      prevPrice === 0 ? 0 : prevPrice - discountPrice
    );
    setOriginalPrice((prevPrice) =>
      prevPrice === 0 ? 0 : prevPrice - oGPrice
    );
  }
  return (
    <div>
      <Nav
        cartInfo={{
          cart,
          itemCount,
          shoePrice,
          originalPrice,
          discountPrice,
          openCart,
          toggleCart,
          removeFromCart,
        }}
      />
      <Main
        count={{
          itemCount,
          addItem,
          minusItem,
          shoePrice,
          originalPrice,
          discount,
          cart,
          addToCart,
          removeFromCart,
        }}
      />
    </div>
  );
}
