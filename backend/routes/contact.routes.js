import express from 'express'
import {
  createContact,
  getContacts,
} from '../controllers/contact.controllers.js'

const router = express.Router()

router.route('/').post(createContact)
router.route('/').get(getContacts)

export default router
