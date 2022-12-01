import timer from '@libs/client/timer'
import axios from 'axios'
import { Console } from 'console'

export async function testApi() {
  return await axios.post('/api/test')
}
