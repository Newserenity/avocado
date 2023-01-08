import React, { SetStateAction, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Image from 'next/image'

interface MainPageImageProps {
  imageSrc: string
}
;[]

function ImageSlider(mainPageImage: MainPageImageProps) {
  // const [currentIndex, setCurrentIndex] = useState(0)

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0
  //   const newIndex = isFirstSlide ? mainPageImage.length - 1 : currentIndex - 1
  //   setCurrentIndex(newIndex)
  // }

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === mainPageImage.length - 1
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1
  //   setCurrentIndex(newIndex)
  // }

  // const goToSlide = (slideIndex: SetStateAction<number>) => {
  //   setCurrentIndex(slideIndex)
  // }
  return <></>
}

export default ImageSlider
