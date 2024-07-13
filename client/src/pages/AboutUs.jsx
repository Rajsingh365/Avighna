import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'

function AboutUs() {
  return (
    <div className='h-auto bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)]'>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col gap-3 ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
              About Us
            </h1>
          </div>
          <div className="bg-white py-8 px-12 rounded-md">
            <h3 className='text-2xl text-gray-900 font-bold'>Our Mission: </h3>
            At <span className='text-blue-600'>Avighna</span>, our mission is simple: to make a positive impact on the lives of devotees. Devotees may help us by donating some amount.
          </div>

          <div className="bg-white py-8 px-12 rounded-md">
            <h3 className='text-2xl text-gray-900 font-bold'>Our Story: </h3>
            In 2016, a spark ignited within the hearts of small children who eagerly welcomed “Bappa” (Lord Ganesha). We faced challenges, but our unwavering commitment led us to where we are today. We’ve grown, learned, and adapted during this whole Journey.
          </div>

          <div className="bg-white py-8 px-12 rounded-md">
            <h3 className='text-2xl text-gray-900 font-bold'>Guided by Devotion: </h3>
            Our journey is not just about physical spaces or rituals; it’s about the devotion that binds us. Every step we take is guided by the love we hold for “Bappa” and the desire to create a positive impact.

            Join us in this sacred journey. Together, we can continue to make a difference.

            <Link to={"/donation"} className="text-purple-500"> 🌟 Donate Now 🌟</Link>
          </div>

          <div className="bg-white py-8 px-12 rounded-md">
            {/* <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2> */}
            <h3 className='text-2xl text-gray-900 font-bold'>Meet Our Team </h3>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sejal Sahani</li>
              <li>Neha Singh</li>
              <li>Sneha Singh</li>
              <li>Raj Singh</li>
              <li>Bhumi Gupta</li>
              <li>Archana Sahani</li>
              <li>Aman Gupta</li>
              <li>Shiva Sahani</li>
            </ul>
            <Link to={"/donation"} className="text-purple-500"> 🌟 Donate Now 🌟</Link>
          </div>

          <div className="bg-white py-8 px-12 rounded-md">
            <h3 className='text-2xl text-gray-900 font-bold'>Transparency Matters: </h3>
            Your donations directly support Avighna in making Ganesh Chaturthi more special. These funds are used for various activities such as pooja, bhandara, visarjan, and other related expenses. Our financials are open for scrutiny, and we’re committed to using funds efficiently.
          </div>

          <div className="bg-white py-8 px-4 md:px-12 rounded-md">
            <h3 className="text-2xl text-gray-900 font-bold">Testimonials: </h3>
            <Testimonials />
          </div>

          <div className="bg-white py-8 px-12 rounded-md">
            <h3 className="text-2xl text-gray-900 font-bold">Join Us in Making a Difference
              : </h3>
              “Every donation counts. Join us in our mission to make Ganesh Chaturthi more special each year. Together, we can create lasting change and celebrate the spirit of Lord Ganesha🙏.”

            <Link to={"/donation"} className="text-purple-500"> 🌟 Donate Now 🌟</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs