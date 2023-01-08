import Link from 'next/link'
import React from 'react'

interface SearchHistoryProps {
  keyword: string
}

function SearchHistory({ keyword }: SearchHistoryProps) {
  return (
    <Link
      className="flex flex-row items-center justify-between rounded-md border p-2 text-center "
      href={`/search/${keyword}`}
    >
      <p className="pl-3 text-sm">{keyword}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Link>
  )
}

export default SearchHistory
