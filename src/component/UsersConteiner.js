import React, {useState, useEffect} from 'react';
import {compose } from 'redux';
import {getUsersThunkCreator} from ".././redux/users-reducer";
import {nextGetUsersThunkCreator} from ".././redux/users-reducer";
import {addGetUsersThunkCreator} from ".././redux/users-reducer";
import {updatesFollowThunkCreator} from ".././redux/users-reducer";
import {getUsersSelect,usersPageSelect,usersCountSelect,textAddGetUsersSelect,loadClickSelect,isLoadingSelect} from ".././redux/select";
import {withAuthNagivate} from ".././HOC/authNavigate";
import {connect} from "react-redux";
import Users from "./Users.jsx"
import load from ".././img/loader.gif"


const UsersApiComponent = (props)=>{
  useEffect(()=>{
    props.getUsersThunk(props.page,props.count)
  },[])
  // Next page
  const nextGetUsers = ()=>{
    props.nextGetUsersThunk(props.page,props.count)
  }
  // Add count users
  const addGetUsers = ()=>{
    props.addGetUsersThunk(props.page,props.count)
  }
  // Follow||unFollow
  const updatesFollowed = (isFollowed,user)=>{
    props.updateFollowThunk(isFollowed,user)
  }
  return <>
        <Users users ={props.users}
        textAddGetUsers ={props.load ? <img src={load} className="loading-gif"/> : props.textAddGetUsers}
        addGetUsers ={addGetUsers}
        users ={props.users}
        updatesFollowed = {updatesFollowed}
        loadClickValue = {props.loadClickValue}
        />
      </>
}

let mapStateToProps = (state) =>{
  return{
    users: getUsersSelect(state),
    page: usersPageSelect(state),
    count: usersCountSelect(state),
    textAddGetUsers: textAddGetUsersSelect(state),
    loadClickValue : loadClickSelect(state),
    load : isLoadingSelect(state),
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    getUsersThunk: (page,count)=>{
      dispatch(getUsersThunkCreator(page,count))
    },
    nextGetUsersThunk: (page,count)=>{
      dispatch(nextGetUsersThunkCreator(page,count))
    },
    addGetUsersThunk: (page,count)=>{
      dispatch(addGetUsersThunkCreator(page,count))
    },
    updateFollowThunk: (isFollowed,user)=>{
      dispatch(updatesFollowThunkCreator(isFollowed,user))
    },
  }
}

let composeCont = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthNagivate
)(UsersApiComponent)
export default composeCont;
