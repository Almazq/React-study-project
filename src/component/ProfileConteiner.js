import React from 'react';
import {profileActionCreat} from ".././redux/profile-reducer";
import {profileThunkCreator} from ".././redux/profile-reducer";
import {newSetProfileStatus} from ".././redux/profile-reducer";
import {withAuthNagivate} from ".././HOC/authNavigate";
import Profile from "./Profile"
import {connect} from "react-redux";
import {compose } from 'redux'


class ProfileConteiner extends React.Component{
  componentDidMount(){
    this.props.profileThunk()
  }
  render(){
    return <Profile {...this.props}/>
  }
}
let mapStateToProps = (state) =>{
  return{
    postValue: state.Profilejsx.postValue,
    posts: state.Profilejsx.posts,
    fullname: state.Profilejsx.fullname,
    photosSmall: state.Profilejsx.photosSmall,
    profileStatus: state.Profilejsx.status,
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
