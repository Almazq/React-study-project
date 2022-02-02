import React from "react";
import {authMeThunkCreator} from ".././redux/auth-reducer.js";


let initalState ={
  initializ:false,
}

const authReducer = (state = initalState , action) =>{
	switch(action.type){
    case "SET-INITIALIZ":
      return{
        ...state,
        initializ:true,
      }
    default:
    	return state;
  }
}

export const appAC = {
  initializesSuccess(){
    return {
      type:"SET-INITIALIZ"
    }
  }
}

export const initializApp = ()=>{
  return (dispatch)=>{
    let promise = dispatch(authMeThunkCreator());
    promise.then(()=>{
      dispatch(appAC.initializesSuccess())
    })
  }
}

export default authReducer;
