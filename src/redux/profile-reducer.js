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
  status:"",
}

const profileReducer = (state = initalState , action) =>{
	switch(action.type){
    case "ADD-POST":
      let newtext ={
        id:state.posts.length + 1,
        posts:action.newPost
      };
      return{
        ...state,
        posts:[...state.posts , newtext]
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
        case "DELETE-POST":
            return{
              ...state,
              posts: state.posts.filter(post => post.id !== action.postId)
            }
    default:
    	return state;
  }
}
export const profileActionCreat = {
  addPostActionCreat(newPost){
      return {
      type:"ADD-POST",
      newPost:newPost
    }
  },
  deletePostActionCreat(postId){
      return {
      type:"DELETE-POST",
      postId:postId
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
  return async (dispatch)=>{
    let response = await authMe();
    let responseProfileinfo = await profileInfo(response.data.id);
    
    if(response.resultCode === 0){
      profileStatus(response.data.id).then(responseStatus =>{
      dispatch(profileActionCreat.setProfileStatus(responseStatus))
    })

    dispatch(profileActionCreat.setProfileFullname(responseProfileinfo.fullName));
    if (responseProfileinfo.photos.small === null) {
      dispatch(profileActionCreat.setProfilePhotos("https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-72.jpg"))
    }
    }
}}

export const newSetProfileStatus = (status)=>{
  return (dispatch)=>{
    newProfileStatus(status);
  }
}
export default profileReducer
