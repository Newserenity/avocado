export default function hashing(plaintextPassword: string) {
  const bcrypt = require('bcrypt')
  let saltRounds = parseInt(process.env.SALT_ROUNDS!)

  const hashedPassword = bcrypt.hashSync(plaintextPassword, saltRounds)

  return hashedPassword
}
