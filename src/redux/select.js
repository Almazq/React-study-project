import React from 'react';

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
