import react from "react";
import './css/Users.css';
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

let Users = (props)=>{
	let defvalimg = "https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg";
	console.log(props.loadClickValue)
	return (
		<div>
			<div>{props.users.map(user => <div className="user" key = {user.id}>
				
				<div className="user-img-box"><NavLink to={'/Profile/' + user.id}><img src={user.photos.large === null ? defvalimg : user.photos.large} className="user-img"/>
			    </NavLink><div className="user-follow-button">
				    {user.followed 
				    	? <button
				    	disabled={props.loadClickValue.some(id=> id === user.id)}
				    	onClick={ ()=>{
				    		props.updatesFollowed("unFollow",user)
				    	}}>UnFollow</button> 
				    	: <button 
				    	disabled={props.loadClickValue.some(id=> id === user.id)}
				    	onClick={ ()=>{
				    		props.updatesFollowed("Follow",user)
				    	}}>Follow</button>
				    }
				    </div></div>
			    <div className="user-name">{user.name}</div>

			    <div className="user-location">
			    <p className="user-location-country">{user.status}</p><p className="user-location-city">{user.status}</p></div>
			    </div>
			    )
				}

			</div>
			<div>
				<div className="users__add-page" onClick={()=>{props.addGetUsers()}}>{props.textAddGetUsers}</div>
			</div>
			
		</div>
	)

}
export default Users;