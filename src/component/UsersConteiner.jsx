import React from 'react';
import {usersAC} from ".././redux/users-reducer";
import Users from "./Users"
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
  return{
    users: state.Usersjsx.users,
    page: state.Usersjsx.page,
    count: state.Usersjsx.count
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    FollowAC: (usersId)=>{
      dispatch(usersAC.FollowAC(usersId));
    },
    UnFollowAC: (usersId)=>{
        dispatch(usersAC.UnFolowAC(usersId));
    },
    SetUsers: (users)=>{
    	dispatch(usersAC.SetUsersAC(users))
    },
    nextGetUsersAC: (page)=>{
      dispatch(usersAC.nextGetUsersAC(page))
    },
    addGetUsersAC: (count)=>{
      dispatch(usersAC.addGetUsersAC(count))
    }
  }
}

const UsersConteiner = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersConteiner;