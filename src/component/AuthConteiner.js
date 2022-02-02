import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {authAC} from ".././redux/auth-reducer";
import {authMeThunkCreator} from ".././redux/auth-reducer";
import {authLogoutThunkCreator} from ".././redux/auth-reducer";
import {connect} from "react-redux";


class authConteiner extends React.Component{
	componentDidMount(){
		this.props.authMeThunk();
	}
	render(){
		return(
		<Header {...this.props}/>
		)
	}
}
let mapStateToProps = (state) =>{
  return{
    login:state.auth.login,
    isAuth:state.auth.isAuth,
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    authMeThunk: ()=>{
      dispatch(authMeThunkCreator());
    },
		logout:()=>{
			dispatch(authLogoutThunkCreator())
		}
  }
}

let connectAuthConteiner = connect(mapStateToProps,mapDispatchToProps)(authConteiner);
export default connectAuthConteiner;
