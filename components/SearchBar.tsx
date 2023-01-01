import { Console } from 'console'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo } from 'react'
import { set, useForm } from 'react-hook-form'
import BackButton from './button/BackButton'

interface ISearchForm {
  keyword: string
}

function SearchBar() {
  const route = useRouter()
  const keyword = route.query.keyword

  const { register, handleSubmit, setValue } = useForm<ISearchForm>({
    values: { keyword: route.query.keyword as string },
  })

  function onValid(data: ISearchForm) {
    route.push(`/search/${data.keyword}`)
  }

  // keyword ? setValue('keyword', `${keyword}`) : null

  return (
    <>
      <div className="flex flex-row items-center space-x-3">
        <BackButton />
        <form className="w-full" onSubmit={handleSubmit(onValid)}>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full rounded-full bg-slate-100 p-4 pl-10 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-lime-600"
              placeholder="商品名、ブランド名など..."
              {...register('keyword', {
                required: 'keyword 필드는 필수입니다',
              })}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchBar
