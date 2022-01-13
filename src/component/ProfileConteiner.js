import React from 'react';
import {profileActionCreat} from ".././redux/profile-reducer";
import Profile from "./Profile"
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
  return{
    postValue: state.Profilejsx.postValue,
    posts: state.Profilejsx.posts
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    upDateNewPostActionCreat: (text)=>{
      dispatch(profileActionCreat.upDateNewPostActionCreat(text));
    },
    addPostActionCreat: ()=>{
        dispatch(profileActionCreat.addPostActionCreat());
    }
  }

}

const ProfileConteiner = connect(mapStateToProps,mapDispatchToProps)(Profile);
export default ProfileConteiner;