import ItemCard from '@components/card/ItemCard'
import MenuTitle from '@components/MenuTitle'
import ToolBar from '@components/ToolBar'
import Category from '@components/Category'

const itemRecomends = [
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

export default function Home() {
  return (
    <>
      <MenuTitle title="🥑 AVOCADO" />
      <div className="flex flex-col space-y-2 px-4 py-20">
        <div>
          <div className="h-40 w-full rounded-xl bg-slate-400">
            <p className="pt-3 pl-5 text-slate-600">広告</p>
          </div>
        </div>
        <Category />
        <div className=" text-xl font-bold">
          <h1>出品さればかりの</h1>
          <h1>オススメ商品</h1>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {itemRecomends.map((result) => (
            <ItemCard
              key={result.itemId}
              itemId={result.itemId}
              itemImageSrc={result?.itemImageSrc}
              itemPrice={result.itemPrice}
              itemTitle={result.itemTitle}
              itemLocation={result?.itemLocation}
              itemUploadAt={result?.itemUploadAt}
            />
          ))}
        </div>
      </div>
      <ToolBar />
    </>
  )
}
