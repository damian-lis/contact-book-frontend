import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Contact from '../models/contact.models.js';

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, address, selectedImage } = req.body;

  const newContact = new Contact({
    user: req.user._id,
    name,
    email,
    phoneNumber,
    address,
    selectedImage,
  });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Contact created!', newContact });
  } catch (error) {
    res
      .status(409)
      .json({ message: 'Something went wrong with creating contact' });
  }
});

const fetchContacts = asyncHandler(async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({ message: 'Contacts fetched!', contacts });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong with fetching contacts' });
  }
});

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Incorrect ID' });
  }
  try {
    await Contact.findByIdAndRemove(id);
    res.json({ message: 'Contact deleted!' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong with delete contact' });
  }
});

const deleteContacts = asyncHandler(async (req, res) => {
  if (req.body.length > 0) {
    try {
      await Contact.deleteMany({
        _id: {
          $in: req.body,
        },
      });
      res.json({ message: 'Contacts deleted!' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Something went wrong with delete contacts' });
    }
  } else {
    res.status(400).json({ message: 'No Ids found' });
  }
});

const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phoneNumber, address, selectedImage } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No contact with id: ${id}` });

  try {
    const existContact = await Contact.findById(id);
    existContact.name = name || existContact.name;
    existContact.email = email || existContact.email;
    existContact.phoneNumber = phoneNumber || existContact.phoneNumber;

    existContact.address = address || existContact.address;
    existContact.selectedImage = selectedImage || existContact.selectedImage;

    const updatedContact = await existContact.save();

    res.json({ message: 'Contact updated!', updatedContact });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong with update contact' });
  }
});

export {
  createContact,
  fetchContacts as getContacts,
  deleteContact,
  deleteContacts,
  updateContact,
};
