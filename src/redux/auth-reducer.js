import React from "react";
import {authMe} from ".././Api/Api.js"

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
        ...action.data , isAuth:true
      }
    default:
    	return state;
  }
}

export const authAC = {
  AuthMeAction(userId,login,email){
    return {
    type:"SET-USER-AUTH",
    data:{userId,login,email}
  }
  }
}
export const authMeThunkCreator = ()=>{
  return (dispath)=>{
  authMe().then(data =>{
    if(data.resultCode === 0){
      let {id,login,email} = data.data;
      dispath(authAC.AuthMeAction(id,login,email));
    }
  })
  }}
export default authReducer;