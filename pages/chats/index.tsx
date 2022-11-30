import ContentsBody from '@components/ContentsBody'
import MenuTitle from '@components/MenuTitle'
import MessageCard from '@components/card/MessageCard'
import ToolBar from '@components/ToolBar'
import React from 'react'

const messageLoby = [
  {
    userId: 1,
    profileImageSrc: null,
    userName: '怪しいミルク',
    lastMessage: 'まだ在庫ありますか？',
    date: '16:40',
    isMuted: false,
    unreadMessageCount: 4,
    chatroom: 12345567,
  },
  {
    userId: 2,
    profileImageSrc: null,
    userName: 'Jayden',
    lastMessage: 'メッセージ失礼します',
    date: '15:02',
    isMuted: false,
    unreadMessageCount: 5,
    chatroom: 94659029,
  },
  {
    userId: 3,
    profileImageSrc: null,
    userName: 'チョコビーチ',
    lastMessage: 'こんばんは',
    date: '09:14',
    isMuted: false,
    unreadMessageCount: 1,
    chatroom: 12312312,
  },
  {
    userId: 4,
    profileImageSrc: null,
    userName: 'POOGI0101',
    lastMessage: '本日中の発送はできますか？',
    date: '22.10.14',
    isMuted: false,
    chatroom: 98472364,
  },
  {
    userId: 5,
    profileImageSrc: null,
    userName: 'OneKiss',
    lastMessage: 'はい',
    date: '22.10.13',
    isMuted: true,
    chatroom: 10984672,
  },
  {
    userId: 6,

    profileImageSrc: null,
    userName: 'トキトキ',
    lastMessage: 'いいえ',
    date: '22.10.10',
    isMuted: false,
    chatroom: 11984672,
  },
  {
    userId: 7,
    profileImageSrc: null,
    userName: '萌える萌え',
    lastMessage: 'ありがとうございます',
    date: '22.10.09',
    isMuted: false,
    chatroom: 10984882,
  },
  {
    userId: 8,
    profileImageSrc: null,
    userName: 'アムニム',
    lastMessage: 'すみません',
    date: '22.10.08',
    isMuted: false,
    chatroom: 14484672,
  },
  {
    userId: 9,
    profileImageSrc: null,
    userName: '唐揚げどんどん',
    lastMessage: 'いかがでしょうか',
    date: '22.10.08',
    isMuted: true,
    chatroom: 10982349,
  },
]

function Chats() {
  return (
    <>
      <MenuTitle title="チャット" />

      <div className="space-y-2 px-6 py-20">
        <div className="space-y-2">
          {messageLoby.map((result) => (
            <MessageCard
              key={result.userId}
              userName={result.userName}
              lastMessage={result.lastMessage}
              date={result.date}
              isMuted={result.isMuted}
              unreadMessageCount={result?.unreadMessageCount}
              chatroom={result.chatroom}
            />
          ))}
        </div>
      </div>
      <ToolBar />
    </>
  )
}

export default Chats
