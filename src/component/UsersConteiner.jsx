import React from 'react';
import {usersAC} from ".././redux/users-reducer";
import Users from "./Users"
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
  return{
    users: state.Usersjsx.users
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
    }
  }
  debugger;

}

const UsersConteiner = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersConteiner;