import useUser from '@libs/client/swr/useUserSwr'
import LoginFail from '@components/modal/loginFail'
import ServerError from '@components/modal/serverError'
import SwitchToggle from '@components/input/switchToggle'
import BottomBar from '@components/bottomBar'
import Product from '@components/product'
import ProductsGroup from '@components/productsGroup'
import Image from 'next/image'
import Category from '@components/Category'

const itemRecomends = [
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

export default function Home() {
  return (
    <>
      <div className="relative h-52 w-full">
        <Image
          src="https://picsum.photos/id/10/2500/1667"
          alt={''}
          className="bg-slate-300 object-cover"
          layout="fill"
          quality={100}
        />
      </div>
      <Category />
      <ProductsGroup productlist={itemRecomends} />
      <ProductsGroup productlist={itemRecomends} />
      <ProductsGroup productlist={itemRecomends} />
      <BottomBar />
    </>
  )
}
