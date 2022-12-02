// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import internal from 'stream'

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
  const saltRounds = 5

  const findUser = await client.user.findUnique({
    where: {
      email: email,
    },
  })

  const hashedPassword = findUser?.password
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
  console.log(req.session)
}

export default withIronSessionApiRoute(withHandler('POST', login), {
  cookieName: 'loginSession',
  password:
    'fbjkwqebf2i3bcibqwsdpengvjkvbjkkldsfnbklslgrt9bw349fbwenc9#&*fnweof',
})
