import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ItemCard {
  itemImageSrc?: string
  itemId: number
  itemPrice: number
  itemKind: string
  itemTitle: string
  itemLocation?: string
  itemUploadAt?: string
}

function SearchProduct({
  itemImageSrc,
  itemId,
  itemPrice,
  itemKind,
  itemTitle,
  itemLocation,
  itemUploadAt,
}: ItemCard) {
  return (
    <>
      <Link
        href={`/product/${itemId}`}
        className="my-2 flex flex-row justify-between space-x-3"
      >
        <div className="relative h-24 w-24 flex-none rounded-md">
          <Image
            src={`${itemImageSrc}`}
            layout="fill"
            objectFit="cover"
            alt={''}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <p className="text-md mr-3 truncate text-sm font-medium text-gray-900">
            {itemTitle}
          </p>
          <div className="text-xs font-semibold text-slate-400">
            <p>{itemKind}</p>
            <div className="flex flex-row space-x-1 text-xs font-semibold text-slate-400">
              <p>{itemLocation}</p>
              <p>·</p>
              <p>{itemUploadAt}</p>
            </div>
          </div>
          <span className="font-medium text-gray-900">￥{itemPrice}</span>
          <div className="mr-3 flex items-end justify-end">
            <div className="flex items-center space-x-0.5 text-sm  text-gray-600">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              3
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SearchProduct
