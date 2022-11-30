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
