import BackButton from '@components/button/BackButton'
import ItemCard3Cols from '@components/card/ItemCard3Cols'
import SearchBar from '@components/SearchBar'
import ToolBar from '@components/ToolBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

const searchResult = [
  {
    itemId: 89382082,
    itemImageSrc: undefined,
    itemPrice: '17,000',
    itemTitle: 'ノートパソコン',
  },
  {
    itemId: 83380032,
    itemImageSrc: undefined,
    itemPrice: '23,9000',
    itemTitle: 'Airpods 第1世代',
  },
  {
    itemId: 89232042,
    itemImageSrc: undefined,
    itemPrice: '17,000',
    itemTitle: 'ノートパソコン',
  },
  {
    itemId: 89383432,
    itemImageSrc: undefined,
    itemPrice: '23,9000',
    itemTitle: 'Airpods 第1世代',
  },
  {
    itemId: 89389032,
    itemImageSrc: undefined,
    itemPrice: '17,000',
    itemTitle: 'ノートパソコン',
  },
  {
    itemId: 81231032,
    itemImageSrc: undefined,
    itemPrice: '23,9000',
    itemTitle: 'Airpods 第1世代',
  },
]

const searchRelativeKeyword = [
  {
    keywordId: 11221032,
    keyword: 'iPhone13',
  },
  {
    keywordId: 23237432,
    keyword: 'mini',
  },
  {
    keywordId: 61237432,
    keyword: 'Pro13',
  },
  {
    keywordId: 31237432,
    keyword: 'Pro14',
  },
  {
    keywordId: 81299432,
    keyword: 'iPad',
  },
]

function SearchResult() {
  return (
    <>
      {/* <MenuTitle title="検索" /> */}
      <div className="space-y-2 px-4 py-3">
        <SearchBar />
        <div className="flex space-x-2 overflow-auto pt-3 scrollbar-hide ">
          {searchRelativeKeyword.map((result) => (
            <Link href={`/search/${result.keyword}`} key={result.keywordId}>
              <div className="rounded-full bg-lime-100 px-2 text-center">
                <p className="p-2 font-medium text-lime-700">
                  {result.keyword}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="pt-3">
          <h1 className="pb-3 text-xl font-semibold text-slate-800">
            検索結果
          </h1>
          <div className="grid grid-cols-3 gap-1">
            {searchResult.map((res) => (
              <ItemCard3Cols
                itemId={res.itemId}
                key={res.itemId}
                itemImageSrc={res?.itemImageSrc}
                itemPrice={res.itemPrice}
                itemTitle={res.itemTitle}
              />
            ))}
          </div>
        </div>
      </div>
      <ToolBar />
    </>
  )
}

export default SearchResult
