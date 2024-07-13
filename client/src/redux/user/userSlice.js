import { createSlice, current } from "@reduxjs/toolkit";

const initialState ={
  currentUser: null,
  loading: false,
  error: false,
  token: null
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) =>{
      state.loading=true
    },
    signInSuccess: (state, action)=>{
      state.currentUser=action.payload.user
      state.token=action.payload.token
      state.loading=false
      state.error=false
    },
    signInFailure: (state,action)=>{
      state.loading=false
      state.error=action.payload
    },
    updateUserStart: (state)=>{
      state.loading=true
    },
    updateUserSuccess: (state, action)=>{
      state.currentUser=action.payload
      state.loading=false
      state.error=false
    },
    updateUserFailure: (state, action)=>{
      state.loading=false
      state.error=action.payload
    },
    deleteUserStart: (state)=>{
      state.loading=true
    },
    deleteUserSuccess: (state, action)=>{
      state.currentUser=null
      state.loading=false
      state.error=false
      state.token=null
    },
    deleteUserFailure: (state, action)=>{
      state.loading=false
      state.error=action.payload
    },
    signOut: (state)=>{
      state.currentUser=null
      state.loading=false
      state.error=false
      state.token=null
    }
  }
})

export const {signInStart, signInSuccess, signInFailure, updateUserFailure, updateUserStart, updateUserSuccess, deleteUserFailure,deleteUserStart,deleteUserSuccess, signOut} = userSlice.actions

export default userSlice.reducer