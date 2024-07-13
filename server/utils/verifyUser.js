import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'
export const verifyToken = (req,res,next)=>{
  // console.log("verify")
  console.log(req.cookies)
  console.log("Headers",req.headers)
  const token = req.headers.bearer
  console.log(token)
  if(!token){
    return next(errorHandler(401, "You are not authenticated"))
  }
  jwt.verify(token, process.env.JWT_SECRET, (err,user)=>{
    if(err)   return next(errorHandler(403, "Token is not Valid"))
      console.log(user)
      req.user=user
      next()
  })
}