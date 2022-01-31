import React from 'react';
import './css/Dialogs.css';
import {NavLink} from 'react-router-dom';
import {useFormik} from 'formik';


function Dialogs(props){
	const formik = useFormik({
		initialValues:{
			masseg:""
		},
		onSubmit:(values)=>{
			props.addMassegeActionCreat(values.masseg);
		}
	})
	let NameMap =
		props.listname.map(name => <div className="dialogs__list__name" key="name.id">
				<div className="dialogs__ava"><img src={name.src}className="dialogs__ava__img" /></div>
				<NavLink to={"/Dialogs/" + name.id}>{name.name}</NavLink>
			</div>)
	let Dialogsmap =
		props.massege.map( masseg => <div className="dialogs__chats__massege__me" key="masseg.id">{masseg.massegeMe}</div>);

	return(
		<form onSubmit={formik.handleSubmit}>
			<div>
				<div className="dialogs__list">
					{NameMap}
				</div>
				<div className="dialogs__chats">
					{Dialogsmap}
					<div className="dialogs__chats__input">
						<input type="text" name="masseg" value={formik.values.masseg} onChange={formik.handleChange}/>
						<button type="submit">></button>
					</div>
				</div>
			</div>
		</form>
		)
}

export default Dialogs;
