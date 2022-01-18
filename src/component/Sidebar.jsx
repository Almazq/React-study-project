import React from 'react';
import {NavLink} from 'react-router-dom'
function SideBar(){
	return(
		<div className="side-bar">
	        <ul>
		        <li><NavLink to='/Profile/me'>Profile</NavLink></li>
		        <li><NavLink to="Dialogs">Massega</NavLink></li>
		        <li><NavLink to="Users">Users</NavLink></li>
		        <li><a href="#">News</a></li>
		        <li><a href="#">Music</a></li>
	        </ul>
		</div>)
}
export default SideBar;