// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

async function test(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}

export default withHandler('GET', test)
