import { withIronSessionApiRoute } from 'iron-session/next'

const cookieOption = {
  cookieName: 'loginSession',
  password: process.env.IRON_SESSION_PASSWORD!,
}

export function withIronSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOption)
}
