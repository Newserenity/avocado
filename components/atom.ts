import { atom } from 'recoil'

export const serverErrorModalstate = atom({
  key: `serverErrorModalstate`,
  default: false,
})

export const loginErrorModalstate = atom({
  key: `loginErrorModalstate`,
  default: false,
})

export const unsupportedModalstate = atom({
  key: `loginErrorModalunsupportedModalstatestate`,
  default: false,
})
