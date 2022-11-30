import BackButton from '@components/button/BackButton'
import ToolBar from '@components/ToolBar'
import Link from 'next/link'
import React from 'react'

const itemDetail = [
  {
    itemId: 89387032,
    itemImageSrc: undefined,
    itemPrice: '30,000',
    itemTitle: 'LG ノートパソコン SSS',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
    itemDetail: 'qwerqwerqwerqwer',
  },
]

interface IItemDetail {
  itemId: number
  itemImageSrc?: string
  itemPrice: string
  itemTitle: string
  itemLocation?: string
  itemUploadAt?: string
  itemDetail: string
}

function Product() {
  return (
    <>
      <div className="space-y-2 px-3 py-3">
        <div className="pt-5 pb-3 pl-3">
          <BackButton />
        </div>
        <div className="space-y-5">
          <div>
            <div className="overflow- flex flex-row">
              <div className="aspect-square w-full rounded-md bg-slate-200"></div>
            </div>
            <p className="pt-3 text-sm text-slate-500">3/12</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="text-3xl font-semibold text-slate-900">￥300,000</p>
          <p className="text-xl font-semibold text-slate-700">iPhone pro 13</p>

          <div className="flex flex-row text-sm font-medium text-slate-400">
            <p>東京都渋谷区</p>
            <p className="px-1">·</p>
            <p>1時間前</p>
          </div>
        </div>
        <div className="w-full pt-3">
          <p>
            qwerqwerqwerqwerqwerqwerqwe rqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerq werqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerqwe rqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerq werqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerqwe rqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerq werqwerqwerqwerqwerqwer
            werqwerqwerqwerqwerqwerqwe rqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerq werqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerqwe rqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerq werqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerqwe rqwerqwerqwerqwerqwer
            qwerqwerqwerqwerqwerqwerq werqwerqwerqwerqwerqwer
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full justify-between bg-white text-xs text-gray-700">
        <button className="text-md m-3 w-1/3 rounded-md border border-lime-600 p-3 text-center font-semibold text-lime-600">
          マイリスト
        </button>
        <button className="text-md my-3 mr-3 w-1/3 rounded-md border border-lime-600 bg-white p-3 font-semibold text-lime-600">
          DMで問い合わせ
        </button>
        <button className="text-md my-3 mr-3 w-1/3 rounded-md bg-lime-600 p-3 font-semibold text-white">
          購入確約
        </button>
      </div>
    </>
  )
}

export default Product
