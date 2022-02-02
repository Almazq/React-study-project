import React from "react";
import {authMe} from ".././Api/Api.js"
import {authLogin} from ".././Api/Api.js"
import {authLogout} from ".././Api/Api.js"

let initalState ={
    login:null,
    email:null,
    id:null,
    isAuth:false,
    loginStatus:true,
}

const authReducer = (state = initalState , action) =>{
	switch(action.type){
    case "SET-USER-AUTH":
      return{
        ...state,
        ...action.data
      }
    case "ERR-LOGIN":
      return{
        ...state,
        loginStatus:action.loginStatus,
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
  },
  errLogin(loginStatus){
    return{
      type:"ERR-LOGIN",
      loginStatus:loginStatus,
    }
  }
}

export const authMeThunkCreator = ()=>{
  return (dispatch)=>{
    return authMe().then(data =>{
      if(data.resultCode === 0){
        let {id,login,email} = data.data;
        dispatch(authAC.AuthMeAction(id,login,email,true));
      }
    })
  }
}
export const authLoginThunkCreator = (email,password,rememberMe)=>{
  return (dispatch)=>{
    authLogin(email,password,rememberMe).then(response =>{
      if(response.resultCode === 0){
        dispatch(authMeThunkCreator());
        dispatch(authAC.errLogin(true))
      }else{
        dispatch(authAC.errLogin(false));
      }
    })
  }
}
export const authLogoutThunkCreator = ()=>{
  return (dispatch)=>{
    authLogout().then(response =>{
      if(response.resultCode === 0){
        dispatch(authAC.AuthMeAction(null,null,null,false));
      }
    })
  }
}

export default authReducer;
