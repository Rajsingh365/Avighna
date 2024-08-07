import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body
  const hashedPassword = bcryptjs.hashSync(password, 10)
  const newUser = new User({ username, email, password: hashedPassword })

  try {
    await newUser.save()
    res.status(201).json({ msg: "User created succcessfully" })
  }
  catch (err) {
    next(err)
  }
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const validUser = await User.findOne({ email })
    if (!validUser) return next(errorHandler(404, "User not Found"))
    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"))
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    const { password: hashedPassword, ...user } = validUser._doc    //remove password before sending the response
    res.status(200).json({
      user,
      token
    })
  }
  catch (err) {
    next(err)
  }
}

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...userData } = user._doc;
      res.json({
        user: userData,
        token
      });
    } else {
      // Handle case where user doesn't exist in the database
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8); // Generate 16-digit password
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        username: req.body.name.split(' ').join("").toLowerCase() + Math.floor(Math.random() * 10000).toString(),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...userData } = newUser._doc;

      res.status(200).json({userData, token});
    }
  } catch (err) {
    next(err);
  }
};


export const signout = async (req, res, next) => {
  res.json({ msg: 'SignOut Success' })
}