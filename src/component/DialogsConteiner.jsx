import React from 'react';
import {NavLink} from 'react-router-dom';
import {dialogActionCreat} from ".././redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"

// function DialogsConteiner(props){
// 	return(
// 		<StoreContext.Consumer>
// 		{(store)=>{
        
// 	        let state = store.getState();
// 			let massegChange = (text)=>{
// 				store.dispatch(dialogActionCreat.upDateNewMassegeActionCreat(text));
// 			}
// 			let massegAdd = ()=>{
// 				store.dispatch(dialogActionCreat.addMassegeActionCreat());
// 			}
// 			return(<Dialogs upDateNewMassegeActionCreat = {massegChange} addMassegeActionCreat = {massegAdd} 
// 			listname = {state.Dialogjsx.listname} massege = {state.Dialogjsx.massege} 
// 	        ava = {state.Dialogjsx.ava} massegeValue={state.Dialogjsx.massegeValue}/>)
// 		   }
// 		}
// 	    </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) =>{
	return{
		listname: state.Dialogjsx.listname,
		ava: state.Dialogjsx.ava,
		massegeValue: state.Dialogjsx.massegeValue,
		massege: state.Dialogjsx.massege
	}
}
let mapDispatchToProps = (dispatch) =>{
	return{
		upDateNewMassegeActionCreat:(text)=> {
			dispatch(dialogActionCreat.upDateNewMassegeActionCreat(text))
		},
		addMassegeActionCreat: ()=>{
			dispatch(dialogActionCreat.addMassegeActionCreat());
		}
	}

}
const DialogsConteiner = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsConteiner;