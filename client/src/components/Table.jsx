import React from 'react'

function Table({className, head_list, data_list}) {
  return (
    <div className={`${className}`}>
      <table className=" text-center text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {head_list.map((name,index)=><th scope="col" key={index} className="px-2 py-3 sm:px-6 sm:py-3">{name}</th>)}
          </tr>
        </thead>
        <tbody>
          {data_list.map(data => <TableRows key={data._id} data={data}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table

function TableRows({data}){
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-2 py-3 sm:px-6 sm:py-3">
              <img src={data.profilePicture} alt="" className='w-10 h-10 rounded-full'/>
            </td>
            <td className="px-2 py-3 sm:px-6 sm:py-3">
              {data.username}
            </td>
            <th scope="row" className="px-2 py-3 sm:px-6 sm:py-3font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {data.donationAmount}
            </th>
    </tr>
  )
}