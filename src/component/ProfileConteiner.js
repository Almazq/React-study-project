import React from 'react';
import {profileActionCreat} from ".././redux/profile-reducer";
import Profile from "./Profile"
import AuthPage from "./AuthPage"
import {connect} from "react-redux";
import * as axios from "axios";

class ProfileConteiner extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
      withCredentials:true
    }).then(response =>{
        if(response.data.resultCode === 0){
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`).then(datainfo =>{
            this.props.setProfileFullname(datainfo.data.fullName);
            datainfo.data.photos.small === null ? this.props.setProfilePhotos("https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-72.jpg")
            : this.props.setProfilePhotos(datainfo.data.photos.small)
          })
        }
      })
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
    setProfileFullname:(name)=>{
      dispatch(profileActionCreat.setProfileFullname(name));
    },
    setProfilePhotos:(imgUrl)=>{
      dispatch(profileActionCreat.setProfilePhotos(imgUrl));
    }
  }
}

const ProfileConnectConteiner = connect(mapStateToProps,mapDispatchToProps)(ProfileConteiner);
export default ProfileConnectConteiner;