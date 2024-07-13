import React from 'react'
import Testimonial from './Testimonial'

function Testimonials() {
  const testimonial_list = [
    {
      id: 1,
      name: "Neha Singh",
      post: "Economist",
      link: "https://firebasestorage.googleapis.com/v0/b/image-and-text-set-and-get.appspot.com/o/Imgs%2Fpic2.png?alt=media&token=1c37735e-712d-499d-8fc2-0ddb4b3922f2",
      message: "Our experience with <b>Avighna</b> was truly exceptional. The Ganesh Chaturthi celebrations were beautifully organized, and the attention to detail was evident in every aspect. We felt deeply connected and spiritually fulfilled."
    },
    {
      id: 2,
      name: "Prashant Singh",
      post: "BCA Student",
      link: "https://firebasestorage.googleapis.com/v0/b/image-and-text-set-and-get.appspot.com/o/Imgs%2Fpic1.png?alt=media&token=1984e742-df73-4a95-80fe-c943db4fdd20",
      message: "I’ve seen firsthand the difference <b>Avighna</b> makes. Their dedication inspires me to contribute."
    },
    {
      id: 3,
      name: "Sneha Singh",
      post: "Psychologist | Teacher",
      link: "https://firebasestorage.googleapis.com/v0/b/image-and-text-set-and-get.appspot.com/o/Imgs%2Fpic3.png?alt=media&token=f5fe2e59-18f1-4c38-90dd-e89857f11c72",
      message: "The dedication and passion of the <b>Avighna</b> team made last year's Ganesh Chaturthi unforgettable. The pooja and visarjan were conducted with utmost devotion, and the community bhandara brought everyone together in a joyous celebration."
    },
  ]
  return (<div className='my-8 md:my-12 grid grid-rows-1 gap-y-4 md:grid-cols-3 md:gap-x-4 md:items-center md:justify-center text-center'>
    {testimonial_list.map((item) => <Testimonial key={item.name} name={item.name} post={item.post} link={item.link}
    message={item.message} />)}
  </div>
  )
}

export default Testimonials