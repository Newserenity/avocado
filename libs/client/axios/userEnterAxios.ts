import timer from '@libs/client/timer'
import axios from 'axios'
import { Console } from 'console'

interface IUserForm {
  email: string
  name: string
  password: string
}

export async function userEnter(payload: IUserForm) {
  return await axios.post('/api/users/enter', JSON.stringify(payload), {
    headers: {
      'Content-Type': `application/json`,
    },
  })
}
