import SearchBar from '@components/SearchBar'
import BottomBar from '@components/bottomBar'
import ProductsGroup from '@components/productsGroup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'

const searchResult = [
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
  const router = useRouter()
  const pid = router.query.keyword

  return (
    <>
      {/* <MenuTitle title="検索" /> */}
      <div className="space-y-2 py-3">
        <SearchBar />
        <div className="flex space-x-2 overflow-auto px-3 pt-3 scrollbar-hide">
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
        <div className="flex flex-col p-2">
          <div className="text-xl font-bold text-gray-900">
            <h1>{pid} の検索結果</h1>
          </div>

          <Link href={`/products`} className="my-1">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div className="relative h-20 w-20  rounded-md">
                  <Image
                    src={'https://picsum.photos/id/27/1280/774'}
                    layout="fill"
                    objectFit="cover"
                    alt={''}
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col pt-2">
                  <h3 className="text-sm font-medium text-gray-900">title</h3>
                  <span className="mt-1 font-medium text-gray-900">$price</span>
                </div>
              </div>
              <div className="flex items-end justify-end space-x-2">
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
                  <span>hearts</span>
                </div>
              </div>
            </div>
          </Link>

          <button
            type="button"
            className="mt-5 justify-center rounded-lg border border-gray-200 px-10 py-2 text-sm font-medium text-gray-900"
          >
            More
          </button>
        </div>
      </div>
      <BottomBar />
    </>
  )
}

export default SearchResult
