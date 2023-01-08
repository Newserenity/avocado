import SearchBar from '@components/component/SearchBar'
import BottomBar from '@components/component/bottomBar'
import ProductsGroup from '@components/productsGroup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import SearchProduct from '@components/component/searchProduct'
import SearchProductsGroup from '@components/searchProductsGroup'

const searchResult = [
  {
    itemId: 89387032,
    itemImageSrc: 'https://picsum.photos/id/64/1280/774',
    itemPrice: 3000000,
    itemTitle:
      '値下げ交渉不可 モニター未使用未使用未使用未使用未使用未使用未使用',
    itemKind: 'Panasonic',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 89007032,
    itemImageSrc: 'https://picsum.photos/id/67/1280/774',
    itemPrice: 3790000,
    itemTitle: 'モニター未使用',
    itemKind: 'Panasonic',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '4時間前',
  },
  {
    itemId: 550287792,
    itemImageSrc: 'https://picsum.photos/id/95/1280/774',
    itemPrice: 500000,
    itemTitle: '当日発送可能 アップル airpods 2',
    itemKind: 'Airpods Pro 2',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
  {
    itemId: 13287532,
    itemImageSrc: 'https://picsum.photos/id/111/1280/774',
    itemPrice: 303000,
    itemTitle: '2週間使用 保証書あり Googleホーム',
    itemKind: 'Google Home',
    itemLocation: '東京都品川区',
    itemUploadAt: '11分前',
  },
  {
    itemId: 29287732,
    itemImageSrc: 'https://picsum.photos/id/19/1280/774',
    itemPrice: 380000,
    itemTitle: '2週間使用 マックブック',
    itemKind: 'MB Pro 22 M1 MAX',
    itemLocation: '東京都板橋区',
    itemUploadAt: '1日前',
  },
  {
    itemId: 89387132,
    itemImageSrc: 'https://picsum.photos/id/90/1280/774',
    itemPrice: 9800,
    itemTitle: '27インチモニター 動作確認済み',
    itemKind: 'DELL',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 560287792,
    itemImageSrc: 'https://picsum.photos/id/23/1280/774',
    itemPrice: 1500000,
    itemTitle: '値下げ可能 airpod pro 2',
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
                <p className="p-2 text-sm font-medium text-lime-700">
                  {result.keyword}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col p-2 pb-16">
          <div className="text-xl font-bold text-gray-900">
            <h1>{pid} の検索結果</h1>
          </div>
          {searchResult ? (
            <SearchProductsGroup productlist={searchResult} />
          ) : null}
        </div>
      </div>
      <BottomBar />
    </>
  )
}

export default SearchResult
