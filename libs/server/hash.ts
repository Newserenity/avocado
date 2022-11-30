export default function hashing(myPlaintextPassword: string) {
  const bcrypt = require('bcrypt')
  const saltRounds = 10

  return bcrypt.genSalt(saltRounds, function () {
    bcrypt.hash(myPlaintextPassword, function (err: any, hash: string) {
      return hash
    })
  })
}
