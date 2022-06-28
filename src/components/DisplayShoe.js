import React from "react"

export default function DisplayShoe() {
  return (
    <section className="dp-section">
      <div className="main-dp">
        <img src="./images/image-product-1.jpg" alt="product-img1" />
        <button className="carousel-buttons prev-carousel">
          <img src="./images/icon-previous.svg" alt="prev img" />
        </button>
        <button className="carousel-buttons next-carousel">
          <img src="./images/icon-next.svg" alt="next img" />
        </button>
      </div>
      <div className="secondary-dp">
        <img src="./images/image-product-1-thumbnail.jpg" alt="product-img1" />
        <img src="./images/image-product-2-thumbnail.jpg" alt="product-img2" />
        <img src="./images/image-product-3-thumbnail.jpg" alt="product-img3" />
        <img src="./images/image-product-4-thumbnail.jpg" alt="product-img4" />
      </div>
    </section>
  )
}
