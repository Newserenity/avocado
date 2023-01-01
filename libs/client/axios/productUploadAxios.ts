import axios from 'axios'

interface productForm {
  title: string
  price: number
  description: string
  image?: string[]
}

export async function productUpload(payload: productForm) {
  return await axios.post('/api/product', JSON.stringify(payload), {
    headers: {
      'Content-Type': `application/json`,
    },
  })
}
