import React from 'react';
import {profileActionCreat} from ".././redux/profile-reducer";
import {profileThunkCreator} from ".././redux/profile-reducer";
import Profile from "./Profile"
import AuthPage from "./AuthPage"
import {connect} from "react-redux";
import * as axios from "axios";
// import {profileThunkCreator} from ".././redux/profile-reducer";


class ProfileConteiner extends React.Component{
  componentDidMount(){
    this.props.profileThunk()
  }
  render(){
    return this.props.isAuth ? <Profile {...this.props}/> : <AuthPage />
  }
}
let mapStateToProps = (state) =>{
  return{
    postValue: state.Profilejsx.postValue,
    posts: state.Profilejsx.posts,
    fullname: state.Profilejsx.fullname,
    photosSmall: state.Profilejsx.photosSmall,
    isAuth: state.Profilejsx.isAuth,
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    upDateNewPostActionCreat: (text)=>{
      dispatch(profileActionCreat.upDateNewPostActionCreat(text));
    },
    addPostActionCreat: ()=>{
      dispatch(profileActionCreat.addPostActionCreat());
    }, 
    profileThunk:()=>{
      dispatch(profileThunkCreator());
    }
  }
}

const ProfileConnectConteiner = connect(mapStateToProps,mapDispatchToProps)(ProfileConteiner);
export default ProfileConnectConteiner;