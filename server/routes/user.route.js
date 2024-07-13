import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { deleteUser, updateUser,fetchAccToDonation } from '../controllers/user.controller.js'
const router = express.Router()

router.post("/update/:id", verifyToken, updateUser)
router.delete("/delete/:id",verifyToken, deleteUser)
router.get("/top-contributors",fetchAccToDonation)
export default router