import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase.js'
import { updateUserStart, updateUserFailure, updateUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, signOut } from '../redux/user/userSlice.js'
import Progress1 from '../components/Progress1.jsx'

function Profile() {
  const dispatch = useDispatch()
  const fileRef = useRef(null)
  const { currentUser, loading, error } = useSelector(state => state.user)
  const [image, setImage] = useState(undefined)
  const [imagePercent, setImagePercent] = useState(0)
  const [imageError, setImageError] = useState(null)
  const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)
  useEffect(() => {
    if (image) {
      handleFileUpload(image)
    }
  }, [image])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleFileUpload = async (image) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + image.name;   //must be unique otherwise firebase will give an error
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setImagePercent(Math.round(progress))
      },
      (error) => {
        setImageError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then
          ((downloadUrl) => {
            setFormData({ ...formData, profilePicture: downloadUrl })
          })
      }
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(currentUser._id)
    try {
      dispatch(updateUserStart())
      const res = await fetch(`${import.meta.env.VITE_API_URL}/avighna/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      })
      const data = await res.json()
      if (data.success == false) {
        dispatch(updateUserFailure(data))
        return
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
    }
    catch (err) {
      dispatch(updateUserFailure(err))
    }
  }

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart())
      const res = await fetch(`${import.meta.env.VITE_API_URL}/avighna/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
        credentials: 'include'  
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(deleteUserFailure(data))
        return
      }
      dispatch(deleteUserSuccess(data))
    }
    catch (err) {
      dispatch(deleteUserFailure(err))
    }
  }

  const handleSignOut = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/avighna/api/auth/signout`,{
        method: "POST", 
        headers: {
          'Content-Type': "application/json"
        }
      })
      console.log("Signout worked")
      dispatch(signOut())
    }
    catch (err) {
      console.log(err)
    }
  }

  return (<div className='h-max-screen bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)] flex flex-col justify-center items-center'>
    <div className='py-3 px-20 bg-white my-5 rounded-md'>
      <h1 className=' text-3xl font-bold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" name="" id="" ref={fileRef} accept='image/*' hidden onChange={(e) => setImage(e.target.files[0])} />
        <img onClick={() => fileRef.current.click()} src={formData.profilePicture || currentUser.profilePicture} alt="profile" className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2' />

        <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>Error Uploading image(file size must be less than 2MB)</span>
          ) : (imagePercent > 0 && imagePercent < 100 ?
            (<span className='text-slate-700'><Progress1 imagePercent={imagePercent} /> </span>) :
            imagePercent === 100 ?
              (<span className='text-green-700'>Image uploaded successfully</span>) : (''))
          }
        </p>

        <input type="text" id="username" placeholder='Username' className='bg-slate-100 rounded-lg p-3' defaultValue={currentUser.username} onChange={handleChange} />
        <input type="email" id="email" placeholder='Email' className='bg-slate-100 rounded-lg p-3' defaultValue={currentUser.email} onChange={handleChange} />
        <input type="password" id="password" placeholder='password' className='bg-slate-100 rounded-lg p-3' onChange={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'update'}</button>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDeleteAccount} className='text-red-700 cursor-pointer'>Delete Account</span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong'}</p>
      <p className='text-green-700 mt-5'>{updateSuccess && 'User is updated successfully'}</p>
    </div>
  </div>
  )
}

export default Profile