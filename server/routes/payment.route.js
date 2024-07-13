import express from 'express'
import { order, verify } from '../controllers/payent.controller.js'

const router = express.Router()


router.get('/', (req,res,next)=>{
  res.send("Working")
})
router.post('/order', order)
router.post('/verify/:id', verify)

export default router