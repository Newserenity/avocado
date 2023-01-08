import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function BackButton() {
  const router = useRouter()
  const onClick = () => {
    router.back()
  }
  return (
    <>
      <button onClick={onClick} className="h-5 w-5">
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </>
  )
}

export default BackButton
