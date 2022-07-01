import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

export default function DisplayShoe() {
  const nextIcon = <img src="./images/icon-next.svg" alt="next img" />
  const backIcon = <img src="./images/icon-previous.svg" alt="prev img" />
  const imagesArray = [
    <img src="./images/image-product-1.jpg" alt="product-img1" />,
    <img src="./images/image-product-2.jpg" alt="product-img2" />,
    <img src="./images/image-product-3.jpg" alt="product-img3" />,
    <img src="./images/image-product-4.jpg" alt="product-img4" />,
  ]
  const imagesHtml = imagesArray.map((img, i) => <Slide index={i}>{img}</Slide>)
  return (
    <section className="dp-section">
      <CarouselProvider
        className="main-dp"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={imagesArray.length}
        interval={3000}
        isPlaying={true}
      >
        <Slider>{imagesHtml}</Slider>
        <ButtonBack className="carousel-buttons" id="prev-carousel">
          {backIcon}
        </ButtonBack>
        <ButtonNext className="carousel-buttons" id="next-carousel">
          {nextIcon}
        </ButtonNext>
      </CarouselProvider>
    </section>
  )
}
/* <div className="secondary-dp">
      <img src="./images/image-product-1-thumbnail.jpg" alt="product-img1" />
      <img src="./images/image-product-2-thumbnail.jpg" alt="product-img2" />
      <img src="./images/image-product-3-thumbnail.jpg" alt="product-img3" />
      <img src="./images/image-product-4-thumbnail.jpg" alt="product-img4" />
    </div> */
