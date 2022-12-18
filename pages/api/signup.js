import { connectToDatabase } from '../../helpers/db'
import { hashPassword } from '../../helpers/auth'
export const handler = async (req, res) => {
  const data = req.body

  const { email, password } = data

  //validate
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should alsobe atleast 7 characters long.',
    })
    return
  }

  const client = await connectToDatabase()

  const db = client.db()

  const hashedPasssword = hashPassword(password)

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPasssword,
  })

  res.status(201).json({ message: 'Created user!' })
}

export default handler
