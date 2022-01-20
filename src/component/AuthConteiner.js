import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {authAC} from ".././redux/auth-reducer";
import {connect} from "react-redux";
import {authMe} from "../Api/Api.js"

class authConteiner extends React.Component{
	componentDidMount(){
		authMe().then(data =>{
	    	if(data.resultCode === 0){
	    		let {id,login,email} = data.data;
	    		this.props.addPostActionCreat(id,login,email)
	    	}
	    })
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
    isAuth:state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    addPostActionCreat: (login,email,id)=>{
      dispatch(authAC.addPostActionCreat(login,email,id));
    }
  }
}

let connectAuthConteiner = connect(mapStateToProps,mapDispatchToProps)(authConteiner);
export default connectAuthConteiner;