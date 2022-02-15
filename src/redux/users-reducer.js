import {getUsers,followed} from "../Api/Api.js";

let initalState = {
  users:[],
  page:1,
  count:10,
  textAddGetUsers: "Загрузить еще",
  isLoading:false,
  followed:false,
  loadClickValue:[],
}
const usersReducer = (state = initalState , action) => {
	switch(action.type){
    case "FOLLOW":
      return{
        ...state,
        users:state.users.map(u =>{
          if(u.id === action.userId){
            return {...u, followed:true}
          }
          return u;
        })

      }
      case "UNFOLLOW":
         return{
          ...state,
          users:state.users.map(u =>{
            if(u.id === action.userId){
              return {...u, followed:false}
            }
            return u;
          })
        }
      case "SET-USERS":
       return { ...state, users: action.users}

      case "NEXT-GET-USERS":
        {return {...state, page : action.page + 1,count:10}}
      case "ADD-GET-USERS":
        {return {...state, count : action.count + 5}}
      case "TEXT-ADD-GET-USERS":
        {return {...state, textAddGetUsers : "Следующая страница"}}
      case "IS-LOADING":
        {return {...state, isLoading : action.isLoading}}
      case "LOAD-CLICK":
        {return {...state,
          loadClickValue:action.loadClickValue
          ? [...state.loadClickValue, action.userid]
          : state.loadClickValue.filter(id => id !== action.userid)
        }}
    default:
    	return state;
  }
}
export const usersAC = {
  FollowAC(userId){
    return {type:"FOLLOW",userId}
  },
  UnFollowAC(userId){
    return{type:"UNFOLLOW",userId}
  },
  SetUsersAC(users){
    return{type:"SET-USERS",users}
  },
  nextGetUsersAC(page){
    return{type:"NEXT-GET-USERS",page}
  },
  addGetUsersAC(count){
    return{type:"ADD-GET-USERS",count}
  },
  textAddGetUsersAC(){
    return{type:"TEXT-ADD-GET-USERS"}
  },
  isLoading(isLoading){
    return{type:"IS-LOADING", isLoading}
  },
  loadClick(loadClickValue,userid){
    return{type:"LOAD-CLICK", loadClickValue,userid}
  }
}

export const getUsersThunkCreator = (page,count)=>{
  return async (dispatch)=>{
    let data = await getUsers(page, count)
    dispatch(usersAC.SetUsersAC([...data.items]));
  }
}
export const nextGetUsersThunkCreator = (page,count)=>{
  return (dispatch)=>{
    dispatch(usersAC.nextGetUsersAC(page));
    dispatch(getUsersThunkCreator(page,count))
  }
}
export const addGetUsersThunkCreator = (page,count)=>{
  return async (dispatch)=>{
    let data = await getUsers(page, count);
    if(count === 100){
      dispatch(usersAC.textAddGetUsersAC());
      dispatch(nextGetUsersThunkCreator(page,count));
    }else{
      dispatch(usersAC.isLoading(true));
      dispatch(usersAC.addGetUsersAC(count));
      dispatch(usersAC.isLoading(false))
      dispatch(usersAC.SetUsersAC([...data.items]));
    }
  }
}
//follow || Unfollow

const followUnfollowFlow = async (dispatch,user,actionCreat,isFollowedApi)=>{
  dispatch(usersAC.loadClick(true,user.id))
  let data = await followed(user.id, isFollowedApi);
  if(data.resultCode === 0){
    dispatch(actionCreat(user.id))
  }
  dispatch(usersAC.loadClick(false,user.id));
}
export const updatesFollowThunkCreator = (isFollowed,user)=>{
  return (dispatch)=>{
     if (isFollowed === "Follow"){
       followUnfollowFlow(dispatch,user,usersAC.FollowAC,"follow")
      }else{
        followUnfollowFlow(dispatch,user,usersAC.UnFollowAC,"unfollow")
      }
    }
}
export default usersReducer;
