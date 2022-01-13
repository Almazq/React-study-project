import React from 'react';
import {usersAC} from ".././redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users.jsx"

class UsersApiComponent extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(response =>{
      this.props.SetUsers([...response.data.items]);
    })
  }
  nextGetUsers = ()=>{
    this.props.nextGetUsersAC(this.props.page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(response =>{
      this.props.SetUsers([...response.data.items]);
    })
  }
  addGetUsers = ()=>{
    if(this.props.count === 100){
      this.props.textAddGetUsersAC();
      this.nextGetUsers()
    }else{
      this.props.addGetUsersAC(this.props.count);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(response =>{
        this.props.SetUsers([...response.data.items]);
      })
    }
  }
  render(){
    return (
    <div>
      <Users users ={this.props.users}
      UnFollowAC ={this.props.UnFollowAC}
      FollowAC ={this.props.FollowAC}
      textAddGetUsers ={this.props.textAddGetUsers}
      addGetUsers ={this.addGetUsers}
      users ={this.props.users}
      />
    </div>
    )
  }
}
let mapStateToProps = (state) =>{
  return{
    users: state.Usersjsx.users,
    page: state.Usersjsx.page,
    count: state.Usersjsx.count,
    textAddGetUsers: state.Usersjsx.textAddGetUsers
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
    }
  }
}

const UsersConteiner = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent);

export default UsersConteiner;