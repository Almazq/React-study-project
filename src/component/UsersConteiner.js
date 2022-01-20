import React from 'react';
import {usersAC} from ".././redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users.jsx"
import {getUsers ,followed} from "../Api/Api.js"
import load from "../img/loader.gif"

class UsersApiComponent extends React.Component{
  componentDidMount(){
    getUsers(this.props.page, this.props.count).then(data =>{
      this.props.SetUsers([...data.items]);
    })
  }
  // Next page
  nextGetUsers = ()=>{
    this.props.nextGetUsersAC(this.props.page);
     getUsers(this.props.page, this.props.count).then(data =>{
      this.props.SetUsers([...data.items]);
    })
  }
  // Add count users
  addGetUsers = ()=>{
    if(this.props.count === 100){
      this.props.textAddGetUsersAC();
      this.nextGetUsers()
    }else{
      this.props.isLoading(true);
      this.props.addGetUsersAC(this.props.count);
      getUsers(this.props.page, this.props.count).then(data =>{
        this.props.isLoading(false)
        this.props.SetUsers([...data.items]);
      })
    }
  }
  // Follow||unFollow
  updatesFollowed = (isFollowed,user)=>{
    if (isFollowed == "Follow"){
      this.props.loadClick(true,user.id)
      followed(user.id, "follow").then(data=>{
          if(data.resultCode == 0){
            this.props.FollowAC(user.id)
          }
          this.props.loadClick(false,user.id);
      })
    }else{
      this.props.loadClick(true,user.id)
      followed(user.id, "unfollow").then(data=>{
          if(data.resultCode == 0){
            this.props.UnFollowAC(user.id)
          }
          this.props.loadClick(false,user.id);
      })
    }
  }
  render(){
    return <>
      <Users users ={this.props.users}
      UnFollowAC ={this.props.UnFollowAC}
      FollowAC ={this.props.FollowAC}
      textAddGetUsers ={this.props.load ? <img src={load} className="loading-gif"/> : this.props.textAddGetUsers}
      addGetUsers ={this.addGetUsers}
      users ={this.props.users}
      updatesFollowed = {this.updatesFollowed}
      loadClickValue = {this.props.loadClickValue}
      />
    </>
  }
}

let mapStateToProps = (state) =>{
  return{
    users: state.Usersjsx.users,
    page: state.Usersjsx.page,
    count: state.Usersjsx.count,
    textAddGetUsers: state.Usersjsx.textAddGetUsers,
    load: state.Usersjsx.isLoading,
    loadClickValue :state.Usersjsx.loadClickValue
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
    },
    textAddGetUsersAC: ()=>{
      dispatch(usersAC.textAddGetUsersAC())
    },
    isLoading: (isLoading)=>{
      dispatch(usersAC.isLoading(isLoading))
    },
    loadClick: (loadClickValue,userid)=>{
      dispatch(usersAC.loadClick(loadClickValue,userid))
    }
  }
}

const UsersConteiner = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent);

export default UsersConteiner;