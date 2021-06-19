import express from 'express'
import { createContact } from '../controllers/contact.controllers.js'

const router = express.Router()

router.route('/').post(createContact)

export default router
