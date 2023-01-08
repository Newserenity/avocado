import { unsupportedModalstate } from '@components/atom'
import BottomBar from '@components/bottomBar'
import Unsupported from '@components/modal/unsupported'
import Product from '@components/product'
import React from 'react'
import { useRecoilState } from 'recoil'

interface ProductsGroup {
  productlist: {
    itemId: number
    itemPrice: number
    itemKind: string
    itemImageSrc?: string
    itemLocation?: string
    itemUploadAt?: string
  }[]
}

function ProductsGroup({ productlist }: ProductsGroup) {
  const [open, setOpen] = useRecoilState(unsupportedModalstate)
  return (
    <>
      {open ? <Unsupported /> : null}
      <div className="flex flex-col p-3">
        <div className="text-xl font-extrabold text-gray-900">
          <h1>あなたにぴったりの</h1>
          <h1>Apple Product</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2">
          {productlist.map((res) => (
            <Product
              key={res.itemId}
              itemId={res.itemId}
              itemImageSrc={res?.itemImageSrc}
              itemPrice={res.itemPrice}
              itemKind={res.itemKind}
              itemLocation={res?.itemLocation}
              itemUploadAt={res?.itemUploadAt}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-5 justify-center rounded-lg border border-gray-200 px-10 py-2 text-sm font-medium text-gray-900"
        >
          More
        </button>
      </div>
    </>
  )
}

export default ProductsGroup
