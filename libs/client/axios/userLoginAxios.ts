import timer from '@libs/client/timer'
import axios from 'axios'
import { Console } from 'console'

interface IUserForm {
  email: string
  password: string
}

export async function userLogin(payload: IUserForm) {
  return await axios.post('/api/users/login', JSON.stringify(payload), {
    headers: {
      'Content-Type': `application/json`,
    },
  })
}
