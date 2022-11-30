// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import hash from '@libs/server/hash'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'

async function test(req: NextApiRequest, res: NextApiResponse) {
  const bcrypt = require('bcrypt')
  const saltRounds = 5

  const hash = bcrypt.hashSync('hello', saltRounds)

  res.status(200).json({ test: `${hash}` })
}

export default withHandler('GET', test)
