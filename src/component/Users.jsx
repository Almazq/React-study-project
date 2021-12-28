import React from 'react';
import './css/Users.css'
import * as axios from "axios";

let Users = (props)=>{
	if(props.users.length === 0){
		axios.get("https://social-network.samuraijs.com/api/1.0/users?page=10").then(response =>{
			props.SetUsers([...response.data.items]);
			console.log(response.data)
		})
	}
	let defvalimg = "https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg";
	return <div>
		{
			props.users.map(user => <div className="user" key = {user.id}>
    	<div className="user-img-box"><img src={user.photos.large === null ? defvalimg : user.photos.large} className="user-img"/>
    	<div className="user-follow-button">
	    	{user.followed 
	    		? <button onClick={ ()=>{props.UnFollowAC(user.id)}}>UnFollow</button> 
	    		: <button onClick={ ()=>{props.FollowAC(user.id)}}>Follow</button>}</div></div>
    	<div className="user-name">{user.name}</div>
    	<div className="user-location">
    	<p className="user-location-country">{user.status}</p><p className="user-location-city">{user.status}</p></div>
    	</div>)	
		}
	</div>
}

export default Users;