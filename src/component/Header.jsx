import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props){
	return(
		<header>
			<img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png"/>
		    <div className="header__auth">
			    {props.isAuth ? <NavLink to="/Profile/me">{props.login}</NavLink> : <NavLink to="login">Sign in</NavLink>}
		    </div>
		    <div className="header__auth__btn">
					{props.isAuth ? <button onClick={props.logout}>Logout</button> : null}
				</div>
		</header>
	);
}
export default Header;
