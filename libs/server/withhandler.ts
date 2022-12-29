import { NextApiRequest, NextApiResponse } from 'next'

interface ConfigType {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT'
  handler: (req: NextApiRequest, res: NextApiResponse) => void
  isPrivate: boolean
}

export default function withHandler({
  method,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      res.status(405).end()
    }
    if (isPrivate && !req.session.user) {
      return res.status(405).json({ ok: false, error: 'no authorization' })
    }
    try {
      await handler(req, res)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  }
}
