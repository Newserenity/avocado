// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'

async function enter(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const bcrypt = require('bcrypt')
  const saltRounds = 5

  let findUser = await client.user.findUnique({
    where: {
      email: email,
    },
  })

  const hashedPassword = findUser?.password
  const check = await bcrypt.compare(password, hashedPassword)

  if (check) {
    res.status(200).send({ data: { email: email } })
    console.log(findUser)
  } else {
    res.status(401).end()
  }
}

export default withHandler('POST', enter)
