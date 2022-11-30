import { cls } from '@libs/client/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ToolBar() {
  const router = useRouter()
  return (
    <nav className="fixed bottom-0 flex w-full justify-between rounded-t-2xl border-t bg-white px-9 py-3 text-xs text-gray-700">
      <Link
        href="/"
        className={cls(
          'flex flex-col items-center space-y-1 ',
          router.pathname === '/'
            ? 'text-lime-600'
            : 'transition-colors hover:text-gray-500',
        )}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
        <span>ホーム</span>
      </Link>
      <Link
        href="/search"
        className={cls(
          'flex flex-col items-center space-y-1',
          router.pathname === '/search'
            ? 'text-lime-600'
            : 'transition-colors hover:text-gray-500',
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 23 23"
          strokeWidth="1.8"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <span>検索</span>
      </Link>
      <Link
        href="/upload"
        className={cls(
          'flex flex-col items-center space-y-1 ',
          router.pathname === '/upload'
            ? 'text-lime-600'
            : 'transition-colors hover:text-gray-500',
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span>出品</span>
      </Link>
      <Link
        href="/chats"
        className={cls(
          'flex flex-col items-center space-y-1',
          router.pathname === '/chats'
            ? 'text-lime-600'
            : 'transition-colors hover:text-gray-500',
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>

        <span>DM</span>
      </Link>
      <Link
        href="/mypage"
        className={cls(
          'flex flex-col items-center space-y-1',
          router.pathname === '/mypage'
            ? 'text-lime-600'
            : 'transition-colors hover:text-gray-500',
        )}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
        <span>MY</span>
      </Link>
    </nav>
  )
}

export default ToolBar
