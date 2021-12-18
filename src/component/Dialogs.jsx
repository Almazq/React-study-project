import React from 'react';
import './css/Dialogs.css';
import {NavLink} from 'react-router-dom';

function Dialogs(props){
	let NameMap =
		props.listname.map(name => <div className="dialogs__list__name" key="name.id"><div className="dialogs__ava"><img src={name.src}className="dialogs__ava__img" /></div><NavLink to={"/Dialogs/" + name.id}>{name.name}</NavLink></div>)
	let Dialogsmap =
		props.massege.map( masseg => <div className="dialogs__chats__massege__me" key="masseg.id">{masseg.massegeMe}</div>);

	let massegChange = (e)=>{
		let text = e.target.value;
		props.upDateNewMassegeActionCreat(text)
	}
	let massegAdd = ()=>{
		props.addMassegeActionCreat();
	}
	return(
		<div>
			<div className="dialogs__list">
				{NameMap}				
			</div>
			<div className="dialogs__chats">
				{Dialogsmap}
				<div className="dialogs__chats__input"><input type="text"  value={props.massegeValue} onChange={massegChange}/>
				<button onClick={massegAdd}>></button></div>
			</div>
		</div>
		)
}

export default Dialogs;