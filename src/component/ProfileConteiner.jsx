 import React from 'react';
 import {profileActionCreat} from ".././redux/profile-reducer";
 import Profile from "./Profile"
 import {connect} from "react-redux";


// let ProfileConteiner = (props) => {
//   return(
//     <StoreContext.Consumer>
//       {(store)=>{

//         let state =store.getState();
//         let postalert = ()=>{
//           store.dispatch(profileActionCreat.addPostActionCreat());
//         }
//         let onChangePost = (text)=>{
//           store.dispatch(profileActionCreat.upDateNewPostActionCreat(text));
//         }
//         return(<Profile addPostActionCreat = {postalert} upDateNewPostActionCreat = {onChangePost} 
//         postValue={state.Profilejsx.postValue} posts = {state.Profilejsx.posts} />)
//       }
//     }
//     </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) =>{
  return{
    postValue: state.Profilejsx.postValue,
    posts: state.Profilejsx.posts
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    upDateNewPostActionCreat: (text)=>{
      dispatch(profileActionCreat.upDateNewPostActionCreat(text));
    },
    addPostActionCreat: ()=>{
        dispatch(profileActionCreat.addPostActionCreat());
    }
  }

}

const ProfileConteiner = connect(mapStateToProps,mapDispatchToProps)(Profile);
export default ProfileConteiner;