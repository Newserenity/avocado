export default async function decrypting(
  hashedPassword: string,
  plaintextPassword: string,
) {
  const bcrypt = require('bcrypt')
  const check = await bcrypt.compare(plaintextPassword, hashedPassword)

  return check
}
