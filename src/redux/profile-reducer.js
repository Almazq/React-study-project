import React from "react";
import {authMe} from ".././Api/Api.js";
import {profileInfo} from ".././Api/Api.js";

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
  postValue:""
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
  }
}

export const profileThunkCreator = ()=>{
  return (dispath)=>{
  authMe().then(data =>{
    if(data.resultCode === 0){
          profileInfo(data.data.id).then(datainfo =>{
            dispath(profileActionCreat.setProfileFullname(datainfo.fullName));
            if (datainfo.photos.small === null) {
              dispath(profileActionCreat.setProfilePhotos("https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-72.jpg"))
            }
            // datainfo.data.photos.small === null 
            // ? dispath(profileActionCreat.setProfilePhotos("https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-72.jpg"))
            // dispath(profileActionCreat.setProfilePhotos(datainfo.photos.small))
          })
    }
  })
}}
export default profileReducer