import {createStore,combineReducers,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";


let reducers = combineReducers({
	Profilejsx: profileReducer,
	Dialogjsx: dialogReducer,
	Usersjsx: usersReducer,
	auth: authReducer,
	app: appReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
