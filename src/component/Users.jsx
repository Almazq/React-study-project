import React from 'react';
import './css/Users.css'

let Users = (props)=>{
	return <div>
		{
			props.users.map(user => <div className="user" key = {user.id}>
    	<div className="user-img-box"><img src={user.img} className="user-img"/>
    	<div className="user-follow-button">
	    	{user.folow 
	    		? <button onClick={ ()=>{props.UnFollowAC(user.id)}}>UnFollow</button> 
	    		: <button onClick={ ()=>{props.FollowAC(user.id)}}>Follow</button>}</div></div>
    	<div className="user-name">{user.name}</div>
    	<div className="user-location">
    	<p className="user-location-country">{user.location.country}</p><p className="user-location-city">{user.location.city}</p></div>
    	</div>)	
		}
	</div>
}

export default Users;