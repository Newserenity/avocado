import { unsupportedModalstate } from '@components/atom'
import BottomBar from '@components/component/bottomBar'
import Unsupported from '@components/modal/unsupported'
import Product from '@components/component/product'
import React from 'react'
import { useRecoilState } from 'recoil'

interface ProductsGroupProps {
  title: string
  subTitle?: string
  productlist: {
    itemId: number
    itemPrice: number
    itemKind: string
    itemImageSrc?: string
    itemLocation?: string
    itemUploadAt?: string
  }[]
}

function ProductsGroup({ title, subTitle, productlist }: ProductsGroupProps) {
  const [open, setOpen] = useRecoilState(unsupportedModalstate)
  return (
    <>
      <Unsupported />
      <div className="flex flex-col px-3">
        <div className="text-xl font-bold text-gray-900">
          <h1>{title}</h1>
          <h1>{subTitle}</h1>
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
          className="mt-3 justify-center rounded-lg border border-gray-200 px-10 py-2 text-sm font-medium text-gray-900"
        >
          More
        </button>
      </div>
    </>
  )
}

export default ProductsGroup
