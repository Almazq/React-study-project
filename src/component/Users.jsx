import React from 'react';
import './css/Users.css'
import * as axios from "axios";


class Users extends React.Component{
	constructor(props){
		super(props);
		axios.get("https://social-network.samuraijs.com/api/1.0/users?page=77").then(response =>{
			this.props.SetUsers([...response.data.items]);
		})
	}
	render(){
		let defvalimg = "https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg";
		return <div>
		{
				this.props.users.map(user => <div className="user" key = {user.id}>
	    	<div className="user-img-box"><img src={user.photos.large === null ? defvalimg : user.photos.large} className="user-img"/>
	    	<div className="user-follow-button">
		    	{user.followed 
		    		? <button onClick={ ()=>{this.props.UnFollowAC(user.id)}}>UnFollow</button> 
		    		: <button onClick={ ()=>{this.props.FollowAC(user.id)}}>Follow</button>}</div></div>
	    	<div className="user-name">{user.name}</div>
	    	<div className="user-location">
	    	<p className="user-location-country">{user.status}</p><p className="user-location-city">{user.status}</p></div>
	    	</div>)	
			}
		</div>
	}
}

export default Users;