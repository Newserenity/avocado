export default function hashing(myPlaintextPassword: string) {
  const bcrypt = require('bcrypt')
  let saltRounds = parseInt(process.env.SALT_ROUNDS!)

  const hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds)

  return hashedPassword
}
