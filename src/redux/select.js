import React from 'react';
//users
export const getUsersSelect = (state)=>{
  return state.Usersjsx.users
}
export const usersPageSelect = (state)=>{
  return state.Usersjsx.page
}
export const usersCountSelect = (state)=>{
  return state.Usersjsx.count
}
export const textAddGetUsersSelect = (state)=>{
  return state.Usersjsx.textAddGetUsers
}
export const loadClickSelect = (state)=>{
  return state.Usersjsx.loadClickValue
}
export const isLoadingSelect = (state)=>{
  return state.Usersjsx.isLoading
}
//profile
export const postValueSelect = (state)=>{
  return state.Profilejsx.postValue
}
export const getPostseSelect = (state)=>{
  return state.Profilejsx.posts
}
export const fullnameSelect = (state)=>{
  return state.Profilejsx.fullname
}
export const photosSmallSelect = (state)=>{
  return state.Profilejsx.photosSmall
}
export const profileStatusSelect = (state)=>{
  return state.Profilejsx.status
}

//dialogs
export const listnameSelect = (state)=>{
  return state.Dialogjsx.listname
}
export const avaSelect = (state)=>{
  return state.Dialogjsx.ava
}
export const massegeValueSelect = (state)=>{
  return state.Dialogjsx.massegeValue
}
export const massegeSelect = (state)=>{
  return state.Dialogjsx.massege
}
