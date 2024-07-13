import express from 'express'
import mongoose  from 'mongoose'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import paymentRoutes from './routes/payment.route.js'
import cors from 'cors'
const PORT = process.env.PORT||3000

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log('Connected to Mongo')
})
.catch((err)=>{
  console.log(err)
})

const app=express()
app.use(cors({
  origin: true, 
  credentials: true
}));
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res,next)=>{
  res.json({msg: "Done"})
})

app.use('/avighna/api/auth', authRoutes)
app.use('/avighna/api/user', userRoutes)
app.use('/avighna/api/payment',paymentRoutes)

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500
  const message = err.message || "Internal Server Error"
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  })
})

app.listen(PORT, ()=>{
  console.log(`PORT is running on ${PORT}`)
})