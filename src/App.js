import "./App.css"
import Main from "./components/Main"
import Nav from "./components/Nav"
import React, { useState } from "react"

export default function App() {
  const oGPrice = 250
  const discountPrice = oGPrice / 2
  const [originalPrice, setOriginalPrice] = useState(oGPrice)
  const [shoePrice, setShoePrice] = useState(discountPrice)
  const [itemCount, setItemCount] = useState(1)
  const [discount, setDiscount] = useState(true)
  const [cart, setCart] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [currentCart, setCurrentCart] = useState({ total: 0, count: 0 })
  const [notify, setNotify] = useState(false)
  const [clickedCart, setClickedCart] = useState(0)

  function toggleCart() {
    setOpenCart((prev) => !prev)
    setNotify(false)
    setClickedCart(0)
  }
  function closeMenu() {
    setOpenMenu(false)
  }
  function toggleMenu() {
    setOpenMenu((prev) => !prev)
  }

  function addToCart() {
    if (itemCount === 0) return
    setCart(true)
    setNotify(true)
    setClickedCart((prev) => prev + 1)
    setCurrentCart((prev) => {
      return {
        total: prev.total + shoePrice,
        count: prev.count + itemCount,
      }
    })
  }
  function removeFromCart() {
    setCart(false)
    setClickedCart((prev) => prev - 1)
    setCurrentCart((prev) => {
      return {
        total: 0,
        count: 0,
      }
    })
  }

  function addItem() {
    setItemCount((prevCount) => prevCount + 1)
    setShoePrice((prevPrice) => prevPrice + discountPrice)
    setOriginalPrice((prevPrice) => prevPrice + oGPrice)
  }
  function minusItem() {
    setItemCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1))
    setShoePrice((prevPrice) =>
      prevPrice === 0 ? 0 : prevPrice - discountPrice
    )
    setOriginalPrice((prevPrice) => (prevPrice === 0 ? 0 : prevPrice - oGPrice))
  }

  return (
    <div>
      {openMenu && (
        <div
          onClick={() => {
            setOpenMenu(false)
          }}
          className={"dark-bg-close-nav"}
        ></div>
      )}
      {openCart && (
        <div
          onClick={() => {
            setOpenCart(false)
            console.log("clicked")
          }}
          className={"close-cart"}
        ></div>
      )}
      <Nav
        cartInfo={{
          cart,
          setCart,
          setOpenCart,
          setOpenMenu,
          itemCount,
          shoePrice,
          originalPrice,
          discountPrice,
          openCart,
          toggleCart,
          removeFromCart,
          currentCart,
          toggleMenu,
          openMenu,
          notify,
          closeMenu,
          clickedCart,
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
  )
}
