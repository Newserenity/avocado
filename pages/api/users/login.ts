// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import internal from 'stream'
import { withIronSession } from '@libs/server/withSession'

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number
      email: String
    }
  }
}

async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const bcrypt = require('bcrypt')

  const findUser = await client.user.findUnique({
    where: {
      email: email,
    },
  })

  let hashedPassword = findUser ? findUser.password : null
  if (hashedPassword != null) {
    const check = await bcrypt.compare(password, hashedPassword)

    if (check && findUser) {
      req.session.user = {
        id: findUser.id,
        email: findUser.email,
      }
      await req.session.save()
      res.status(200).json({ ok: true })
    } else {
      res.status(401).end()
    }
  } else {
    res.status(401).end()
  }
}

export default withIronSession(withHandler('POST', login))
