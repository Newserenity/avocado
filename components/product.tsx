import Link from 'next/link'
import React from 'react'

interface ItemCard {
  itemImageSrc?: string
  itemId: number
  itemPrice: number
  itemKind: string
  itemLocation?: string
  itemUploadAt?: string
}

function Product({
  itemImageSrc,
  itemId,
  itemPrice,
  itemKind,
  itemLocation,
  itemUploadAt,
}: ItemCard) {
  return (
    <Link href={`/product/${itemId}`}>
      <div className="mt-2 aspect-square rounded-lg bg-gray-100"></div>
      <div className="pt-1">
        <p className=" rounded-md px-1 text-xs font-semibold text-gray-800">
          {itemKind}
        </p>
        <p className="text-sm font-bold text-slate-900">￥{itemPrice}</p>
        {itemLocation ? (
          <p className="text-xs font-semibold text-gray-500">{itemLocation}</p>
        ) : (
          <></>
        )}
      </div>
    </Link>
  )
}

export default Product
