import express from 'express'
import {
  createContact,
  getContacts,
  deleteContact,
  deleteContacts,
  updateContact,
} from '../controllers/contact.controllers.js'

const router = express.Router()

router.route('/').post(createContact)
router.route('/').get(getContacts)
router.route('/:id').delete(deleteContact).put(updateContact)
router.route('/delete').post(deleteContacts)

export default router
