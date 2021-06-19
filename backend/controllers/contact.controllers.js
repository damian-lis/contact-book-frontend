import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import Contact from '../models/contact.models.js'

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phoneNo1, phoneNo2, address, selectedImage } = req.body

  const newContact = new Contact({
    name,
    email,
    phoneNo1,
    phoneNo2,
    address,
    selectedImage,
  })

  try {
    await newContact.save()
    res.status(201).json(newContact)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find()
  res.json(contacts)
})

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Incorrect ID')
  }
  await Contact.findByIdAndRemove(id)
  res.json({ message: 'Contact deleted successfully.' })
})

const deleteContacts = asyncHandler(async (req, res) => {
  if (req.body.length > 0) {
    await Contact.deleteMany({
      _id: {
        $in: req.body,
      },
    })
    res.json({ message: 'Contacts are deleted successfully.' })
  } else {
    res.status(400).json({ message: 'No Ids found' })
  }
})

export { createContact, getContacts, deleteContact, deleteContacts }
