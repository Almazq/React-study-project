import React from "react";
import {authMe} from ".././Api/Api.js";
import {profileInfo} from ".././Api/Api.js";
import {profileStatus} from ".././Api/Api.js";
import {newProfileStatus} from ".././Api/Api.js";

let initalState ={
  fullname: null,
  photosSmall: null,
  isAuth:false,
  posts:[
    {id:1,posts:"Hi"},
    {id:2,posts:"My first post"},
    {id:3,posts:"I live"},
    {id:4,posts:"How are you?"},
    {id:5,posts:"Yes, Yes i good"}
  ],
  postValue:"",
  status:"",
}

const profileReducer = (state = initalState , action) =>{
	switch(action.type){
    case "ADD-POST":
      let newtext ={
        id:state.posts.length + 1,
        posts:state.postValue
      };
      return{
        ...state,
        postValue: "",
        posts:[...state.posts , newtext]
      }

     case "UPDATE-NEW-POST":
        return{
          ...state,
          postValue:action.newText
        }
      case "SET-FULLNAME":
        return{
          ...state,
          fullname:action.fullname,
          isAuth:true
        }
        case "SET-PROFILE-PHOTOS":
        return{
          ...state,
          photosSmall:action.photosSmall
        }
        case "SET-PROFILE-STATUS":
          return{
            ...state,
            status:action.status
          }
        case "UPDATE-NEW-STATUS":
          return{
            ...state,
            status:action.newStatus
          }
    default:
    	return state;
  }
}
export const profileActionCreat = {
  addPostActionCreat(){
      return {
      type:"ADD-POST"
    }
  },
  upDateNewPostActionCreat(text){
    return {
      type:"UPDATE-NEW-POST",
      newText: text
    }
  },
  setProfileFullname(name){
    return {
      type:"SET-FULLNAME",
      fullname: name
    }
  },
  setProfilePhotos(imgUrl){
    return {
      type:"SET-PROFILE-PHOTOS",
      photosSmall: imgUrl
    }
  },
  setProfileStatus(status){
    return {
      type:"SET-PROFILE-STATUS",
      status: status
    }
  },
  updateNewStatus(status){
    return {
      type:"UPDATE-NEW-STATUS",
      newStatus: status
    }
  }
}

export const profileThunkCreator = ()=>{
  return (dispath)=>{
  authMe().then(data =>{
    if(data.resultCode === 0){
      profileStatus(data.data.id).then(responseStatus =>{
        dispath(profileActionCreat.setProfileStatus(responseStatus))
      })
      profileInfo(data.data.id).then(datainfo =>{
        dispath(profileActionCreat.setProfileFullname(datainfo.fullName));
        if (datainfo.photos.small === null) {
          dispath(profileActionCreat.setProfilePhotos("https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-72.jpg"))
        }
      })
    }
  })
}}

export const newSetProfileStatus = (status)=>{
  return (dispath)=>{
    newProfileStatus(status);
  }
}
export default profileReducer
