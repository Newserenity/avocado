import { withIronSessionApiRoute } from 'iron-session/next'

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number
      email: String
    }
  }
}

const cookieOption = {
  cookieName: 'loginSession',
  password: process.env.IRON_SESSION_PASSWORD!,
}

export function withIronSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOption)
}
