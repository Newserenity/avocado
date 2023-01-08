import useUser from '@libs/client/swr/useUserSwr'
import LoginFail from '@components/modal/loginFail'
import ServerError from '@components/modal/serverError'
import SwitchToggle from '@components/input/switchToggle'
import BottomBar from '@components/component/bottomBar'
import Product from '@components/component/product'
import ProductsGroup from '@components/productsGroup'
import Image from 'next/image'
import Category from '@components/Category'
import Legal from '@components/component/legal'
import React, { SetStateAction, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import ImageSlider from '@components/component/imageSlider'

const itemRecomends = [
  {
    itemId: 89387032,
    itemImageSrc: 'https://picsum.photos/id/67/1280/774',
    itemPrice: 3000000,
    itemKind: 'Panasonic',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 550287792,
    itemImageSrc: 'https://picsum.photos/id/55/1280/774',
    itemPrice: 500000,
    itemKind: 'Airpods Pro 2',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
  {
    itemId: 13287532,
    itemImageSrc: 'https://picsum.photos/id/81/1280/774',
    itemPrice: 303000,
    itemKind: 'Google Home',
    itemLocation: '東京都品川区',
    itemUploadAt: '11分前',
  },
  {
    itemId: 29287732,
    itemImageSrc: 'https://picsum.photos/id/15/1280/774',
    itemPrice: 380000,
    itemKind: 'MB Pro 22 M1 MAX',
    itemLocation: '東京都板橋区',
    itemUploadAt: '1日前',
  },
  {
    itemId: 89387132,
    itemImageSrc: 'https://picsum.photos/id/60/1280/774',
    itemPrice: 9800,
    itemKind: 'DELL',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 560287792,
    itemImageSrc: 'https://picsum.photos/id/25/1280/774',
    itemPrice: 1500000,
    itemKind: 'Airpods Pro 2',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
]

const mofumofu = [
  {
    itemId: 891237032,
    itemImageSrc: 'https://picsum.photos/id/77/1280/774',
    itemPrice: 3000000,
    itemKind: 'サムスン',
    itemLocation: '埼玉県大宮',
    itemUploadAt: '3時間前',
  },
  {
    itemId: 599287792,
    itemImageSrc: 'https://picsum.photos/id/100/1280/774',
    itemPrice: 500000,
    itemKind: 'Airpods Pro',
    itemLocation: '札幌市白石区',
    itemUploadAt: '50分前',
  },
  {
    itemId: 13273532,
    itemImageSrc: 'https://picsum.photos/id/91/1280/774',
    itemPrice: 303000,
    itemKind: '有機EL',
    itemLocation: '小樽市',
    itemUploadAt: '19分前',
  },
  {
    itemId: 21207732,
    itemImageSrc: 'https://picsum.photos/id/85/1280/774',
    itemPrice: 380000,
    itemKind: 'MB Pro 21 M1 MAX',
    itemLocation: '旭川市',
    itemUploadAt: '2日前',
  },
  {
    itemId: 88887132,
    itemImageSrc: 'https://picsum.photos/id/61/1280/774',
    itemPrice: 9800,
    itemKind: 'LG',
    itemLocation: '沖縄県沖縄市',
    itemUploadAt: '5時間前',
  },
  {
    itemId: 569467792,
    itemImageSrc: 'https://picsum.photos/id/27/1280/774',
    itemPrice: 1500000,
    itemKind: 'MBA 22',
    itemLocation: '大阪府旭区',
    itemUploadAt: '10分前',
  },
]

const kudamono = [
  {
    itemId: 891237032,
    itemImageSrc: 'https://picsum.photos/id/127/1280/774',
    itemPrice: 3000000,
    itemKind: 'サムスン',
    itemLocation: '埼玉県大宮',
    itemUploadAt: '3時間前',
  },
  {
    itemId: 599287792,
    itemImageSrc: 'https://picsum.photos/id/130/1280/774',
    itemPrice: 500000,
    itemKind: 'Airpods Pro',
    itemLocation: '札幌市白石区',
    itemUploadAt: '50分前',
  },
  {
    itemId: 13273532,
    itemImageSrc: 'https://picsum.photos/id/31/1280/774',
    itemPrice: 303000,
    itemKind: '有機EL',
    itemLocation: '小樽市',
    itemUploadAt: '19分前',
  },
  {
    itemId: 21207732,
    itemImageSrc: 'https://picsum.photos/id/98/1280/774',
    itemPrice: 380000,
    itemKind: 'MB Pro 21 M1 MAX',
    itemLocation: '旭川市',
    itemUploadAt: '2日前',
  },
  {
    itemId: 88887132,
    itemImageSrc: 'https://picsum.photos/id/54/1280/774',
    itemPrice: 9800,
    itemKind: 'LG',
    itemLocation: '沖縄県沖縄市',
    itemUploadAt: '5時間前',
  },
  {
    itemId: 569467792,
    itemImageSrc: 'https://picsum.photos/id/66/1280/774',
    itemPrice: 1500000,
    itemKind: 'MBA 22',
    itemLocation: '大阪府旭区',
    itemUploadAt: '10分前',
  },
]

const mainPageImage = [
  {
    imageSrc: 'https://picsum.photos/id/42/1280/774',
  },
  {
    imageSrc: 'https://picsum.photos/id/77/1280/774',
  },
  {
    imageSrc: 'https://picsum.photos/id/41/1280/774',
  },
  {
    imageSrc: 'https://picsum.photos/id/66/1280/774',
  },
  {
    imageSrc: 'https://picsum.photos/id/33/1280/774',
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? mainPageImage.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === mainPageImage.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <>
      <div className="group relative h-52 w-full">
        <Image
          src={`${mainPageImage[currentIndex].imageSrc}`}
          alt={''}
          className="bg-cover bg-center object-cover duration-500"
          layout="fill"
          quality={100}
        />
        {/* Left Arrow */}
        <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactLeft onClick={prevSlide} size={15} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactRight onClick={nextSlide} size={15} />
        </div>
      </div>
      <div className="flex justify-center py-1">
        {mainPageImage.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            {currentIndex == slideIndex ? (
              <RxDotFilled className="text-gray-900" />
            ) : (
              <RxDotFilled className="text-gray-300" />
            )}
          </div>
        ))}
      </div>
      <Category />
      <div className="space-y-10">
        <ProductsGroup
          productlist={itemRecomends}
          title="東京23区の"
          subTitle="オススメ商品"
        />
        <ProductsGroup
          productlist={mofumofu}
          title="もふもふの"
          subTitle="お友達"
        />
        <ProductsGroup
          productlist={kudamono}
          title="ジューシーな"
          subTitle="果物"
        />
      </div>
      <Legal />
      <BottomBar />
    </>
  )
}
