import Link from 'next/link'
import React from 'react'

interface ISearchHistoryCardProps {
  keyword: string
}

function SearchHistoryCard({ keyword }: ISearchHistoryCardProps) {
  return (
    <Link
      className="flex flex-row justify-between rounded-md border p-2"
      href={`/search/${keyword}`}
    >
      <p className="pl-3">{keyword}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
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

export default SearchHistoryCard
