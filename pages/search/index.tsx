import BackButton from '@components/button/BackButton'
import SearchHistoryCard from '@components/card/SearchHistoryCard'
import SearchBar from '@components/SearchBar'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const searchHistory = [
  {
    id: 10,
    keyword: 'iPhone 14 pro',
  },
  {
    id: 19,
    keyword: 'Macbook',
  },
  {
    id: 115,
    keyword: 'PS5',
  },
]

function Search() {
  return (
    <>
      {/* <MenuTitle title="検索" /> */}
      <div className="space-y-2 px-4 py-3">
        <SearchBar />
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-slate-800">検索履歴</h1>
          <div className="space-y-2 pt-3">
            {searchHistory.map((result) => (
              <SearchHistoryCard key={result.id} keyword={result.keyword} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
