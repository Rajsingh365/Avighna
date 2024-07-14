import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import GlassMorphism from '../components/GlassMorphism'

function TopContributors() {
  const head_list = ['Profile Image', 'Username', 'Contribution Amount']
  const [data_list, setDataList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  console.log("Reached",import.meta.env.VITE_API_URL)

  const fetchUserData = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/avighna/api/user/top-contributors`,
        {
        // credentials: 'includes'
      })
      if (!res.ok) {
        console.log(res)
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      
      const data = await res.json()
      const modifiedData = data.map(user => ({
        _id: user._id,
        username: user.username,
        profilePicture: user.profilePicture,
        donationAmount: user.donationAmount
      }))
      setDataList(modifiedData)
      // setDataList(data)
    } catch (error) {
      console.error("Error fetching data:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className='h-screen bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)] flex flex-col justify-center items-center'>
      <div className="mx-3 w-full max-w-4xl">
        <p className='text-3xl text-center text-white mb-6'>Top Contributors</p>
        <GlassMorphism className="w-[85%] sm:w-full py-8 px-3 md:py-10 my-1 mx-auto">
          {isLoading ? (
            <p className="text-center text-white">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : data_list.length > 0 ? (
            <Table head_list={head_list} data_list={data_list} className="w-[] sm:w-[95%] flex flex-col justify-center items-center" />
          ) : (
            <p className="text-center text-white">No data available</p>
          )}
        </GlassMorphism>
      </div>
    </div>
  )
}

export default TopContributors