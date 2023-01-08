import { unsupportedModalstate } from '@components/atom'
import BottomBar from '@components/component/bottomBar'
import Unsupported from '@components/modal/unsupported'
import Product from '@components/component/product'
import SearchProduct from '@components/component/searchProduct'
import React from 'react'
import { useRecoilState } from 'recoil'

interface ProductsGroup {
  productlist: {
    itemId: number
    itemPrice: number
    itemKind: string
    itemTitle: string
    itemImageSrc?: string
    itemLocation?: string
    itemUploadAt?: string
  }[]
}

function SearchProductsGroup({ productlist }: ProductsGroup) {
  return (
    <>
      <div className="flex flex-col pt-2">
        {productlist.map((res) => (
          <SearchProduct
            key={res.itemId}
            itemId={res.itemId}
            itemPrice={res.itemPrice}
            itemKind={res.itemKind}
            itemImageSrc={res.itemImageSrc}
            itemLocation={res.itemLocation}
            itemUploadAt={res.itemUploadAt}
            itemTitle={res.itemTitle}
          />
        ))}
      </div>
    </>
  )
}

export default SearchProductsGroup
