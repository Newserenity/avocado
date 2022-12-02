// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number
      email: String
    }
  }
}

async function myInfo(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.session.user)

  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  })

  res.status(200).json({
    certified: true,
    encrypted: false,
    integrityVerificationToken: null,
    profile,
  })
}

export default withIronSessionApiRoute(withHandler('GET', myInfo), {
  cookieName: 'loginSession',
  password: process.env.IRON_SESSION_PASSWORD!,
})
