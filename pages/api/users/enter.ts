// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client'
import hashing from '@libs/server/hashing'
import withHandler from '@libs/server/withhandler'
import type { NextApiRequest, NextApiResponse } from 'next'

async function enter(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, name } = req.body

  const hashedPassword = hashing(password)

  let emailUnique = await client.user.findUnique({
    where: {
      email: email,
    },
  })

  let nameUnique = await client.user.findUnique({
    where: {
      name: name,
    },
  })

  if (emailUnique) {
    res.status(409).json({ error: 'duplicated email' })
  } else if (nameUnique) {
    res.status(409).json({ error: 'duplicated name' })
  } else {
    await client.user.create({
      data: { name: name, email: email, password: hashedPassword },
    })
    res.status(200).json({ ok: true })
  }
}

export default withHandler('POST', enter)
