import axios from 'axios'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

// const fetcher = (url: string) => fetch(url).then((res) => res.json())

const fetcher = (url: string) => axios(url).then((res) => res.data)

export default function useUser() {
  const { data, error } = useSWR('/api/users/me', fetcher)

  // const [user, setUser] = useState()
  //   const router = useRouter()
  //   useEffect(() => {
  //     // axios.get('/api/users/me').then((res) => console.log(res.data))
  //     fetch('/api/users/me')
  //       .then((res) => res.json())
  //       .then((json) => {
  //         if (!json.ok) {
  //           return router.replace('/users/login')
  //         }
  //         setUser(json.profile)
  //       })
  //   }, [router])

  return data
}
