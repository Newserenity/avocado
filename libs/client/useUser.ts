import axios from 'axios'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useUser() {
  const [user, setUser] = useState()
  const router = useRouter()
  useEffect(() => {
    // axios.get('/api/users/me').then((res) => console.log(res.data))
    fetch('/api/users/me')
      .then((res) => res.json())
      .then((json) => {
        if (!json.ok) {
          return router.replace('/users/login')
        }
        setUser(json.profile)
      })
  }, [router])

  return user
}
