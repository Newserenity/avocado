// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSession } from '@libs/server/withSession'

async function me(req: NextApiRequest, res: NextApiResponse) {
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

export default withIronSession(
  withHandler({ method: 'GET', handler: me, isPrivate: true }),
)
