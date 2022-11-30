import Link from 'next/link'
import React from 'react'

interface IItemCard {
  itemImageSrc?: string
  itemPrice: string
  itemId: number
  itemTitle: string
  itemLocation?: string
  itemUploadAt?: string
}

function ItemCard3Cols({
  itemImageSrc,
  itemPrice,
  itemTitle,
  itemId,
}: IItemCard) {
  return (
    <Link href={`/product/${itemId}`}>
      <div className="aspect-square rounded-lg bg-slate-200"></div>
      <div className="mb-4 pt-1">
        <p className="text-sm font-semibold text-slate-900">￥{itemPrice}</p>
        <p className="text-xs font-normal text-slate-500">{itemTitle}</p>
      </div>
    </Link>
  )
}

export default ItemCard3Cols
