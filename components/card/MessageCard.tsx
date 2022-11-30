import { cls } from '@libs/client/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface IMessageLoby {
  userImageSrc?: string
  userName: string
  lastMessage: string
  date: string
  isMuted: boolean
  unreadMessageCount?: number
  chatroom: number
}

function MessageCard({
  userImageSrc,
  userName,
  lastMessage,
  date,
  isMuted,
  unreadMessageCount,
  chatroom,
}: IMessageLoby) {
  return (
    <div className="mx-auto flex max-w-sm items-center justify-between border-slate-100 bg-white py-3">
      <div className="flex  space-x-4">
        <div className="shrink-0">
          <div className="h-12 w-12 rounded-full bg-slate-300" />
        </div>
        <Link
          href={`/chats/${chatroom}`}
          className="flex flex-col justify-between"
        >
          <p className="text-md font-normal text-black">{userName}</p>
          <div className="flex flex-row justify-center space-x-2 pb-1 text-center">
            <p
              className={cls(
                'text-sm',
                unreadMessageCount
                  ? 'font-bold text-slate-900'
                  : 'font-light text-slate-500',
              )}
            >
              {lastMessage}
            </p>
            <p className="text-sm font-light text-slate-500 ">{date}</p>
          </div>
        </Link>
      </div>
      <div className="flex shrink-0 flex-row justify-center space-x-4">
        {isMuted ? (
          <div className="flex flex-row justify-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3 text-red-500"
            >
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0118.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206z" />
              <path
                fillRule="evenodd"
                d="M5.25 9c0-.184.007-.366.022-.546l10.384 10.384a3.751 3.751 0 01-7.396-1.119 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <></>
        )}
        {unreadMessageCount ? (
          <div className="flex flex-row justify-center space-x-2">
            <div className="m-auto h-2 w-2 rounded-full bg-lime-600" />
            <p className="text-sm font-light text-lime-600 ">
              {unreadMessageCount}
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default MessageCard
