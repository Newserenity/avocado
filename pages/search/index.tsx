import SearchBar from '@components/component/SearchBar'
import BottomBar from '@components/component/bottomBar'
import SearchHistory from '@components/input/SearchHistory'
import Legal from '@components/component/legal'

import React, { useState } from 'react'

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
      <div className="space-y-2 py-3">
        <SearchBar />
        <div className="px-3 pt-5">
          <h1 className="text-2xl font-bold text-gray-900">検索履歴</h1>
          <div className="space-y-2 pt-3">
            {searchHistory.map((result) => (
              <SearchHistory key={result.id} keyword={result.keyword} />
            ))}
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  )
}

export default Search
