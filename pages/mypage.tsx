import ItemCard3Cols from '@components/card/ItemCard3Cols'
import MenuTitle from '@components/MenuTitle'
import ToolBar from '@components/ToolBar'
import useUser from '@libs/client/useUser'
import Link from 'next/link'
import React from 'react'

const itemSelling = [
  {
    itemId: 89387032,
    itemImageSrc: undefined,
    itemPrice: '30,000',
    itemTitle: 'LG ノートパソコン SSS',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 550287792,
    itemImageSrc: undefined,
    itemPrice: '23,9000',
    itemTitle: 'Airpods Pro 第２世代',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
  {
    itemId: 13287532,
    itemImageSrc: undefined,
    itemPrice: '8,000',
    itemTitle: 'Google Home',
    itemLocation: '東京都品川区',
    itemUploadAt: '11分前',
  },
  {
    itemId: 29287732,
    itemImageSrc: undefined,
    itemPrice: '150,000',
    itemTitle: 'Macbook pro 2022 M1 Pro',
    itemLocation: '東京都板橋区',
    itemUploadAt: '1日前',
  },
  {
    itemId: 89387132,
    itemImageSrc: undefined,
    itemPrice: '30,000',
    itemTitle: 'LG ノートパソコン SSS',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 560287792,
    itemImageSrc: undefined,
    itemPrice: '23,9000',
    itemTitle: 'Airpods Pro 第２世代',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
  {
    itemId: 13287832,
    itemImageSrc: undefined,
    itemPrice: '8,000',
    itemTitle: 'Google Home',
    itemLocation: '東京都品川区',
    itemUploadAt: '11分前',
  },
  {
    itemId: 29287792,
    itemImageSrc: undefined,
    itemPrice: '150,000',
    itemTitle: 'Macbook pro 2022 M1 Pro',
    itemLocation: '東京都板橋区',
    itemUploadAt: '1日前',
  },
]

const itemSelled = [
  {
    itemId: 560287792,
    itemImageSrc: undefined,
    itemPrice: '23,9000',
    itemTitle: 'Airpods Pro 第２世代',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
  {
    itemId: 13287832,
    itemImageSrc: undefined,
    itemPrice: '8,000',
    itemTitle: 'Google Home',
    itemLocation: '東京都品川区',
    itemUploadAt: '11分前',
  },
  {
    itemId: 29287792,
    itemImageSrc: undefined,
    itemPrice: '150,000',
    itemTitle: 'Macbook pro 2022 M1 Pro',
    itemLocation: '東京都板橋区',
    itemUploadAt: '1日前',
  },
]

const itemReserved = [
  {
    itemId: 89382032,
    itemImageSrc: undefined,
    itemPrice: '17,000',
    itemTitle: 'ノートパソコン',
  },
  {
    itemId: 89380032,
    itemImageSrc: undefined,
    itemPrice: '23,9000',
    itemTitle: 'Airpods 第1世代',
  },
]

function mypage() {
  const user = useUser()
  console.log(user)

  return (
    <>
      <MenuTitle title="マイページ" />
      <div className="space-y-2 px-4 py-20">
        <div className="flex h-24 w-full flex-row items-center justify-between rounded-xl bg-slate-200 px-5">
          <div className="flex flex-row">
            <div className="h-14 w-14 rounded-full bg-slate-500"></div>
            <div className="mt-1 pl-4">
              <p className="text-md font-semibold">{user.user?.name}</p>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <p className="text-sm text-slate-400">オンライン</p>
              </div>
            </div>
          </div>
          <Link href="../users/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-slate-600"
            >
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="pt-5">
          <h1 className="pb-3 text-xl font-semibold text-slate-800">取引中</h1>
          <div className="grid grid-cols-3 gap-1">
            {itemReserved.map((res) => (
              <ItemCard3Cols
                key={res.itemId}
                itemId={res.itemId}
                itemImageSrc={res?.itemImageSrc}
                itemPrice={res.itemPrice}
                itemTitle={res.itemTitle}
              />
            ))}
          </div>
        </div>
        <div className="pt-5">
          <h1 className="pb-3 text-xl font-semibold text-slate-800">販売中</h1>
          <div className="grid grid-cols-3 gap-1">
            {itemSelling.map((res) => (
              <ItemCard3Cols
                key={res.itemId}
                itemId={res.itemId}
                itemImageSrc={res?.itemImageSrc}
                itemPrice={res.itemPrice}
                itemTitle={res.itemTitle}
                itemLocation={res?.itemLocation}
                itemUploadAt={res?.itemUploadAt}
              />
            ))}
          </div>
        </div>
        <div className="pt-5">
          <h1 className="pb-3 text-xl font-semibold text-slate-800">
            取引完了
          </h1>
          <div className="grid grid-cols-3 gap-1">
            {itemSelled.map((res) => (
              <ItemCard3Cols
                itemId={res.itemId}
                key={res.itemId}
                itemImageSrc={res?.itemImageSrc}
                itemPrice={res.itemPrice}
                itemTitle={res.itemTitle}
                itemLocation={res?.itemLocation}
                itemUploadAt={res?.itemUploadAt}
              />
            ))}
          </div>
        </div>
      </div>
      <ToolBar />
    </>
  )
}

export default mypage
