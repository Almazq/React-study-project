import React from 'react';
import {getUsersThunkCreator} from ".././redux/users-reducer";
import {nextGetUsersThunkCreator} from ".././redux/users-reducer";
import {addGetUsersThunkCreator} from ".././redux/users-reducer";
import {updatesFollowThunkCreator} from ".././redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users.jsx"
import load from "../img/loader.gif"

class UsersApiComponent extends React.Component{
  componentDidMount(){
    this.props.getUsersThunk(this.props.page,this.props.count)
  }
  // Next page
  nextGetUsers = ()=>{
    this.props.nextGetUsersThunk(this.props.page,this.props.count)
  }
  // Add count users
  addGetUsers = ()=>{
    this.props.addGetUsersThunk(this.props.page,this.props.count)
  }
  // Follow||unFollow
  updatesFollowed = (isFollowed,user)=>{
    this.props.updateFollowThunk(isFollowed,user)
  }
  render(){
    return <>
      <Users users ={this.props.users}
      textAddGetUsers ={this.props.load ? <img src={load} className="loading-gif"/> : this.props.textAddGetUsers}
      addGetUsers ={this.addGetUsers}
      users ={this.props.users}
      updatesFollowed = {this.updatesFollowed}
      loadClickValue = {this.props.loadClickValue}
      />
    </>
  }
}
//
let mapStateToProps = (state) =>{
  return{
    users: state.Usersjsx.users,
    page: state.Usersjsx.page,
    count: state.Usersjsx.count,
    textAddGetUsers: state.Usersjsx.textAddGetUsers,
    loadClickValue :state.Usersjsx.loadClickValue
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

const UsersConteiner = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent);

export default UsersConteiner;