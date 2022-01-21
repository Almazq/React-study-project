import {createStore,combineReducers,applyMiddleware} from "redux";
// import {} from "redux";
import thunkMiddleware from 'redux-thunk'
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

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;