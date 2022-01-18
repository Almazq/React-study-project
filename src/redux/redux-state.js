import {createStore} from "redux";
import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
	Profilejsx: profileReducer,
	Dialogjsx: dialogReducer,
	Usersjsx: usersReducer,
	auth: authReducer
})

let store = createStore(reducers);


export default store;