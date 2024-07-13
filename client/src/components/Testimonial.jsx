import React, { useEffect } from 'react'
function Testimonial({name,post,link,message}) {
  return (
    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-10 md:px-6">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={link} alt={`${name}'s image`} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 my-4">{post}</span>
        <p className="mb-3 text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: message }}/>
      </div>
    </div>
  )
}

export default Testimonial