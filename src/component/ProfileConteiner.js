import React, {useState, useEffect} from 'react';
import {profileActionCreat} from ".././redux/profile-reducer";
import {profileThunkCreator} from ".././redux/profile-reducer";
import {newSetProfileStatus} from ".././redux/profile-reducer";
import {withAuthNagivate} from ".././HOC/authNavigate";
import {postValueSelect,getPostseSelect,fullnameSelect,photosSmallSelect,profileStatusSelect} from ".././redux/select";
import Profile from "./Profile"
import {connect} from "react-redux";
import {compose } from 'redux'

const ProfileConteiner = (props) =>{
  useEffect(()=>{
    props.profileThunk()
  },[])
  return <Profile {...props}/>
}

let mapStateToProps = (state) =>{
  return{
    postValue: postValueSelect(state),
    posts: getPostseSelect(state),
    fullname: fullnameSelect(state),
    photosSmall: photosSmallSelect(state),
    profileStatus: profileStatusSelect(state),
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    addPostActionCreat: (newPost)=>{
      dispatch(profileActionCreat.addPostActionCreat(newPost));
    },
    profileThunk:()=>{
      dispatch(profileThunkCreator());
    },
    updateNewStatus:(status)=>{
      dispatch(profileActionCreat.updateNewStatus(status));
    },
    newSetProfileStatus:(status)=>{
      dispatch(newSetProfileStatus(status));
    }
  }
}

let composeCont = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthNagivate
)(ProfileConteiner)

export default composeCont;
