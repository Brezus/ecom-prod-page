import React, { useState } from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { nanoid } from "nanoid"
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import thumbImage1 from "../images/image-product-1.jpg"
import thumbImage2 from "../images/image-product-2.jpg"
import thumbImage3 from "../images/image-product-3.jpg"
import thumbImage4 from "../images/image-product-4.jpg"
import nIcon from "../images/icon-next.svg"
import bIcon from "../images/icon-previous.svg"

const imagesArray = [
  <img src={image1} alt="product-img1" />,
  <img src={image2} alt="product-img2" />,
  <img src={image3} alt="product-img3" />,
  <img src={image4} alt="product-img4" />,
]

export default function DisplayShoe() {
  const thumbnailImagesArray = [
    <img
      key={nanoid()}
      id={0}
      onClick={clickToChangeMainImage}
      className="thumbnail"
      src={thumbImage1}
      alt="product-img1"
    />,
    <img
      key={nanoid()}
      id={1}
      onClick={clickToChangeMainImage}
      className="thumbnail"
      src={thumbImage2}
      alt="product-img2"
    />,
    <img
      key={nanoid()}
      id={2}
      onClick={clickToChangeMainImage}
      className="thumbnail"
      src={thumbImage3}
      alt="product-img3"
    />,
    <img
      key={nanoid()}
      id={3}
      onClick={clickToChangeMainImage}
      className="thumbnail"
      src={thumbImage4}
      alt="product-img4"
    />,
  ]
  const [mainImg, setMainImg] = useState(imagesArray[0])
  const nextIcon = <img src={nIcon} alt="next img" />
  const backIcon = <img src={bIcon} alt="prev img" />
  const imagesHtml = imagesArray.map((img, i) => (
    <Slide key={nanoid()} index={i}>
      {img}
    </Slide>
  ))
  function clickToChangeMainImage(e) {
    setMainImg(imagesArray[e.target.id])
  }

  return (
    <>
      <section className="dp-section">
        {/* this carousel dissapears using media query  */}
        <CarouselProvider
          className="main-dp pure-carousel"
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={imagesArray.length}
          interval={3000}
          isPlaying={false}
        >
          <Slider>{imagesHtml}</Slider>
          <ButtonBack className="carousel-buttons" id="prev-carousel">
            {backIcon}
          </ButtonBack>
          <ButtonNext className="carousel-buttons" id="next-carousel">
            {nextIcon}
          </ButtonNext>
        </CarouselProvider>
        <div className="main-dp my-carousel">{mainImg}</div>
        <div className="secondary-dp">{thumbnailImagesArray}</div>
      </section>
    </>
  )
}
