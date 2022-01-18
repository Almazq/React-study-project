import React from "react";

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
  addPostActionCreat(userId,login,email){
    return {
    type:"SET-USER-AUTH",
    data:{userId,login,email}
  }
  }
}
export default authReducer;