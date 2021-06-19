import { PORT } from '../env.js'
import express from 'express'
import connectDB from './config/db.js'
import contactRoutes from './routes/contact.routes.js'

connectDB()

const app = express()

app.use('/contact', contactRoutes)

app.listen(
  process.env.PORT || PORT,
  console.log(`Server is running on ${PORT}`)
)
