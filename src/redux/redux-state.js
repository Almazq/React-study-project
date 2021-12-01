import {createStore} from "redux";
import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


let reducers = combineReducers({
	Profilejsx: profileReducer,
	Dialogjsx: dialogReducer
})

let store = createStore(reducers);


export default store;