import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {authAC} from ".././redux/auth-reducer";
import {connect} from "react-redux";

class authConteiner extends React.Component{
	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
			withCredentials:true
		}).then(response =>{
	    	if(response.data.resultCode === 0){
	    		let {id,login,email} = response.data.data;
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