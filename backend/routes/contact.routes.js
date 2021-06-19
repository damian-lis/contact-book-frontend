import express from 'express'
import {
  createContact,
  getContacts,
  deleteContact,
} from '../controllers/contact.controllers.js'

const router = express.Router()

router.route('/').post(createContact)
router.route('/').get(getContacts)
router.route('/:id').delete(deleteContact)

export default router
