import useUser from '@libs/client/swr/useUserSwr'
import LoginFail from '@components/modal/loginFail'
import ServerError from '@components/modal/serverError'
import SwitchToggle from '@components/input/switchToggle'

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
      <LoginFail />
      {/* <ServerError /> */}
      <SwitchToggle />
    </>
  )
}
