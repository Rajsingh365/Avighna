import Razorpay from 'razorpay'
import crypto from 'crypto'
import dotenv from 'dotenv'
import Payment from '../models/payment.model.js'
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js'
dotenv.config()

// console.log("KEY_ID", process.env.RAZORPAY_KEY_ID)
// console.log("RAZORPAY_KEY_SECRET", process.env.RAZORPAY_KEY_SECRET)

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
export const order = (req, res, next) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    }

    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        // console.log(error);
        return next(errorHandler(500, "Something Went Wrong!"))
      }
      res.status(200).json({ data: order });
      // console.log(order)
    });
  } catch (err) {
    next(err)
  }
}
export const verify = async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature,amountDonated } = req.body;
  console.log(razorpay_order_id)
  console.log(razorpay_payment_id)
  console.log(razorpay_signature)
  const id=req.params.id
  try {
    // Create Sign
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    console.log(process.env.RAZORPAY_KEY_SECRET)
    // Create ExpectedSign
    const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    // console.log(razorpay_signature === expectedSign);

    // Create isAuthentic
    const isAuthentic = expectedSign === razorpay_signature;

    // Condition 
    if (isAuthentic) {
      const payment = new Payment({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
      });
      console.log("Reached here")
      // Save Payment 
      await payment.save();
      if(isAuthentic){
        // console.log(amountDonated)
        await User.findByIdAndUpdate(id, {
          $inc: { donationAmount: amountDonated/100 }
        }, { new: true })
      }
      // Send Message 
      res.json({
        message: "Payment Successful"
      });
    }
  } catch (error) {
    console.log("Nhi chala")
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
}