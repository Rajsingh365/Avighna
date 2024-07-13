import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }, 
  password: {
    type: String, 
    required: true
  },
  profilePicture: {
    type: String, 
    default: "https://cdn.vectorstock.com/i/750p/53/42/user-member-avatar-face-profile-icon-vector-22965342.avif"
  },
  donationAmount: {
    type: Number,
    default: 0
  }
}, {timestamps: true})

const User= mongoose.model('User', userSchema)
export default User