 import React from 'react';
 import {profileActionCreat} from ".././redux/profile-reducer";
 import Profile from "./Profile"
 import StoreContext from ".././StoreContext";

let ProfileConteiner = (props) => {
  return(
    <StoreContext.Consumer>
      {(store)=>{

        let state =store.getState();
        let postalert = ()=>{
          store.dispatch(profileActionCreat.addPostActionCreat());
        }
        let onChangePost = (text)=>{
          store.dispatch(profileActionCreat.upDateNewPostActionCreat(text));
        }
        return(<Profile addPostActionCreat = {postalert} upDateNewPostActionCreat = {onChangePost} 
        postValue={state.Profilejsx.postValue} posts = {state.Profilejsx.posts} />)
      }
    }
    </StoreContext.Consumer>
    );
}
export default ProfileConteiner;