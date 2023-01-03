// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client'
import hashing from '@libs/server/hashing'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'

async function productUpload(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { title, price, description },
    session: { user },
  } = req

  let product = await client.product.create({
    data: {
      title: title,
      price: price,
      description: description,
      productImage: {
        create: [{ url: 'URL 1' }, { url: 'URL 2' }],
      },
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  })

  res.json({
    ok: true,
    product,
  })
  console.log(product)
}

export default withHandler({
  method: 'POST',
  handler: productUpload,
  isPrivate: true,
})
