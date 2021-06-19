import { PORT } from '../env.js'
import express from 'express'
import connectDB from './config/db.js'

connectDB()

const app = express()

app.listen(
  process.env.PORT || PORT,
  console.log(`Server is running on ${PORT}`)
)
