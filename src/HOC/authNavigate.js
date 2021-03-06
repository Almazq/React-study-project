import React from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
  return{
    isAuth: state.auth.isAuth
  }
}
export const withAuthNagivate = (Component) =>{
	class NavigateComponent extends React.Component {
		render(){
			if(!this.props.isAuth) {
			    return <Navigate to="/Login" />
			}
			return <Component {...this.props}/>
		}
	}
	let AuthNagivate = connect(mapStateToProps)(NavigateComponent);
	return AuthNagivate;
}
