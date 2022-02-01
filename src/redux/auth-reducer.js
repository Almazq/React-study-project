import React from "react";
import {authMe} from ".././Api/Api.js"
import {authLogin} from ".././Api/Api.js"
import {authLogout} from ".././Api/Api.js"

let initalState ={
    login:null,
    email:null,
    id:null,
    isAuth:false
}

const authReducer = (state = initalState , action) =>{
	switch(action.type){
    case "SET-USER-AUTH":
      return{
        ...state,
        ...action.data 
      }
    default:
    	return state;
  }
}

export const authAC = {
  AuthMeAction(userId,login,email,isAuth){
    return {
    type:"SET-USER-AUTH",
    data:{userId,login,email,isAuth}
  }
  }
}
export const authMeThunkCreator = ()=>{
  return (dispath)=>{
    authMe().then(data =>{
      if(data.resultCode === 0){
        let {id,login,email} = data.data;
        dispath(authAC.AuthMeAction(id,login,email,true));
      }
    })
  }
}
export const authLoginThunkCreator = (email,password,rememberMe)=>{
  return (dispath)=>{
    authLogin(email,password,rememberMe).then(response =>{
      if(response.resultCode === 0){
        dispath(authMeThunkCreator());
      }
    })
  }
}
export const authLogoutThunkCreator = ()=>{
  return (dispath)=>{
    authLogout().then(response =>{
      if(response.resultCode === 0){
        dispath(authAC.AuthMeAction(null,null,null,false));
      }
    })
  }
}

export default authReducer;
