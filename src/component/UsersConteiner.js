import React from 'react';
import {usersAC} from ".././redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users.jsx"
import load from "../img/loader.gif"

class UsersApiComponent extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`,{
      withCredentials:true
    }).then(response =>{
      this.props.SetUsers([...response.data.items]);
    })
  }
  nextGetUsers = ()=>{
    this.props.nextGetUsersAC(this.props.page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`,{
      withCredentials:true
    }).then(response =>{
      this.props.SetUsers([...response.data.items]);
    })
  }
  addGetUsers = ()=>{
    if(this.props.count === 100){
      this.props.textAddGetUsersAC();
      this.nextGetUsers()
    }else{
      this.props.isLoading(true);
      this.props.addGetUsersAC(this.props.count);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`,{
      withCredentials:true
    }).then(response =>{
        this.props.isLoading(false)
        this.props.SetUsers([...response.data.items]);
      })
    }
  }
  updatesFollowed = (isFollowed,user)=>{
    if (isFollowed == "Follow"){
      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{
        withCredentials:true,
        headers:{
          "API-KEY":"8509dfbd-0ef6-4f57-99cf-ee0432eeab38"
        }}).then(response=>{
          if(response.data.resultCode == 0){
           this.props.FollowAC(user.id)
          }
      })
    }else{
      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
        withCredentials:true,
        headers:{
          "API-KEY":"8509dfbd-0ef6-4f57-99cf-ee0432eeab38"
        }}).then(response=>{
          if(response.data.resultCode == 0){
            this.props.UnFollowAC(user.id)
          }
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
    load: state.Usersjsx.isLoading
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
    }
  }
}

const UsersConteiner = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent);

export default UsersConteiner;