import React from 'react';
import {NavLink} from 'react-router-dom';
import {dialogActionCreat} from ".././redux/dialog-reducer";
import Dialogs from "./Dialogs";
 import StoreContext from ".././StoreContext";

function DialogsConteiner(props){
	return(
		<StoreContext.Consumer>
		{(store)=>{
        
	        let state = store.getState();
			let massegChange = (text)=>{
				store.dispatch(dialogActionCreat.upDateNewMassegeActionCreat(text));
			}
			let massegAdd = ()=>{
				store.dispatch(dialogActionCreat.addMassegeActionCreat());
			}
			return(<Dialogs upDateNewMassegeActionCreat = {massegChange} addMassegeActionCreat = {massegAdd} 
			listname = {state.Dialogjsx.listname} massege = {state.Dialogjsx.massege} 
	        ava = {state.Dialogjsx.ava} massegeValue={state.Dialogjsx.massegeValue}/>)
		   }
		}
	    </StoreContext.Consumer>
    );
}

export default DialogsConteiner;