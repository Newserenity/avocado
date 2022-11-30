import Link from 'next/link'
import React from 'react'

interface IItemCard {
  itemImageSrc?: string
  itemId: number
  itemPrice: string
  itemTitle: string
  itemLocation?: string
  itemUploadAt?: string
}

function ItemCard({
  itemImageSrc,
  itemId,
  itemPrice,
  itemTitle,
  itemLocation,
  itemUploadAt,
}: IItemCard) {
  return (
    <Link href={`/product/${itemId}`}>
      <div className="aspect-square rounded-lg bg-slate-200"></div>
      <div className="pt-1">
        <p className="text-lg font-semibold text-slate-900">￥{itemPrice}</p>
        <p className="text-sm font-normal text-slate-700">{itemTitle}</p>
        {itemLocation || itemUploadAt ? (
          <div className="flex flex-row pt-1 text-xs font-semibold text-slate-400">
            <p>{itemLocation}</p>
            <p className="px-1">·</p>
            <p>{itemUploadAt}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Link>
  )
}

export default ItemCard
