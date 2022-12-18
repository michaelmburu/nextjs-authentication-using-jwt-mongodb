import { MongoClient } from 'mongodb'

const MONGODB_URL = process.env.REACT_APP_MONGODB_URL

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(MONGODB_URL)

  return client
}
