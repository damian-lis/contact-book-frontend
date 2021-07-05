import express from 'express';
import {
  createContact,
  getContacts,
  deleteContact,
  deleteContacts,
  updateContact,
} from '../controllers/contacts.controllers.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.route('/').post(protect, createContact);
router.route('/').get(protect, getContacts);
router.route('/:id').delete(protect, deleteContact).put(protect, updateContact);
router.route('/delete').post(protect, deleteContacts);

export default router;
