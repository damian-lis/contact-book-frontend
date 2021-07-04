import asyncHandler from 'express-async-handler';
import User from '../models/user.models.js';
import generateToken from '../utils/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(403).json({ message: 'User already exist' });
  } else {
    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (createdUser) {
      res.status(201).json({
        _id: createdUser._id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
        token: generateToken(createdUser._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

export { loginUser, registerUser };
