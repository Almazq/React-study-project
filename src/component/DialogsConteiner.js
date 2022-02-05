import React from 'react';
import {NavLink} from 'react-router-dom';
import {dialogActionCreat} from ".././redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {withAuthNagivate} from ".././HOC/authNavigate";
import {connect} from "react-redux"
import {compose } from 'redux'
import {listnameSelect,avaSelect,massegeValueSelect,massegeSelect} from ".././redux/select";


let mapStateToProps = (state) =>{
	return{
		listname: listnameSelect(state),
		ava: avaSelect(state),
		massegeValue: massegeValueSelect(state),
		massege: massegeSelect(state),
	}
}
let mapDispatchToProps = (dispatch) =>{
	return{
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
