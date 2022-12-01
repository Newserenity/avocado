import { atom } from 'recoil'

export const serverErrorModalstate = atom({
  key: `serverErrorModalstate`,
  default: false,
})

export const searchQuery = atom({
  key: `searchQuery`,
})

export const submittingModalstate = atom({
  key: `submittingModalstate`,
  default: false,
})

export const duplicateModalstate = atom({
  key: `duplicateModalstate`,
  default: false,
})

export const unexpectedModalstate = atom({
  key: `unexpectedModalstate`,
  default: false,
})

export const loginFailModalstate = atom({
  key: `loginFailModalstate`,
  default: false,
})

export const ReqSuccess = atom({
  key: `ReqSuccess`,
  default: false,
})
