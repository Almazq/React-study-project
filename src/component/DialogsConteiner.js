import React from 'react';
import {NavLink} from 'react-router-dom';
import {dialogActionCreat} from ".././redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {withAuthNagivate} from ".././HOC/authNavigate";
import {connect} from "react-redux"
import {compose } from 'redux'

let mapStateToProps = (state) =>{
	return{
		listname: state.Dialogjsx.listname,
		ava: state.Dialogjsx.ava,
		massegeValue: state.Dialogjsx.massegeValue,
		massege: state.Dialogjsx.massege,
	}
}
let mapDispatchToProps = (dispatch) =>{
	return{
		// upDateNewMassegeActionCreat:(text)=> {
		// 	dispatch(dialogActionCreat.upDateNewMassegeActionCreat(text))
		// },
		addMassegeActionCreat: (newMassege)=>{
			dispatch(dialogActionCreat.addMassegeActionCreat(newMassege));
		}
	}
}
let composeCont = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthNagivate
)(Dialogs)

export default composeCont;
