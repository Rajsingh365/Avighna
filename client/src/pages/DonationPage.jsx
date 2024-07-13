import React, { useState } from 'react'
import Loader1 from '../components/Loader1'
import { useSelector } from 'react-redux'

function DonationPage() {
  const { currentUser, loading, error } = useSelector(state => state.user)
  const [amount, setAmount] = useState(0)
  const handleSubmit = async (e) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/avighna/api/payment/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount
        })
      })
      const data = await res.json();
      console.log(data)

      handlePaymentVerify(data.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handlePaymentVerify = async (data) => {
    console.log("working")
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: currentUser.username,
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response)
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/avighna/api/payment/verify/${currentUser._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amountDonated: data.amount
            }),
            credentials: 'include'
          })

          const verifyData = await res.json();
          console.log(verifyData)
          if (verifyData.message) {
            alert("Successful")
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }
  return (
    <>
      <div className='flex flex-col items-center mt-1 mb-12'>
        <div
          className="relative object-fit w-full overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
          style={{
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/avighna-43cc8.appspot.com/o/BackGroundImages%2FDonation%20Page.jpg?alt=media&token=eb3d733a-ba3e-4c18-87d8-da1d6c16bdd9)',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex mt-48 h-full items-center justify-center">
              <div className="text-white flex flex-col items-center justify-center">
                <h2 className="w-[90%] md:w-2/3 mb-4 text-xl md:text-4xl font-semibold">Offer your kindness to Ganpati Bappa, for in giving, we honor the divine spirit within us all.</h2>
                <input type="number" id="username" className="rounded-lg bg-gray-50 border text-gray-900  block flex-1 min-w-0  text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-6" placeholder="Enter Amount to Donate" onChange={(e) => setAmount(e.target.value)} />
                <button onClick={handleSubmit}
                  type="button"
                  className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:text-black hover:bg-white"
                >
                  Donate
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DonationPage
