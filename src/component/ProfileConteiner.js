import React from 'react';
import {profileActionCreat} from ".././redux/profile-reducer";
import {profileThunkCreator} from ".././redux/profile-reducer";
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

let composeCont = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthNagivate
)(ProfileConteiner)

export default composeCont;
