import react from "react";
import './css/Users.css';
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

let Users = (props)=>{
	let defvalimg = "https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg";
	return (
		<div>
			<div>{props.users.map(user => <div className="user" key = {user.id}>
				
				<div className="user-img-box"><NavLink to={'/Profile/' + user.id}><img src={user.photos.large === null ? defvalimg : user.photos.large} className="user-img"/>
			    </NavLink><div className="user-follow-button">
				    {user.followed 
				    	? <button onClick={ ()=>{
				    		props.updatesFollowed("unFollow",user)
				    		// props.UnFollowAC(user.id)
				    		// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
					     //        withCredentials:true,
					     //        headers:{
					     //        	"API-KEY":"8509dfbd-0ef6-4f57-99cf-ee0432eeab38"
					     //        }
				      //       }).then(response=>{
				      //       	if(response.data.resultCode == 0){
				      //       		props.UnFollowAC(user.id)
				      //       	}
				      //       })
				    	}}>UnFollow</button> 
				    	: <button onClick={ ()=>{
				    		props.updatesFollowed("Follow",user)
					    		// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{
						     //        withCredentials:true,
						     //         headers:{
						     //        	"API-KEY":"8509dfbd-0ef6-4f57-99cf-ee0432eeab38"
						     //        }
					      //       }).then(response=>{
				       //      	if(response.data.resultCode == 0){
				       //      		props.FollowAC(user.id)
				       //      	}
				       //      })
				    	}}>Follow</button>}</div></div>
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