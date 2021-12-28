let initalState ={
  users:[]
}

const usersReducer = (state = initalState , action) =>{
	switch(action.type){
    case "Follow":
      return{
        ...state,
        users:state.users.map(u =>{
          if(u.id === action.userId){
            
            return {...u, followed:true}
          }
          return u;
        })
      }
      case "UnFollow":
         return{
          ...state,
          users:state.users.map(u =>{
            if(u.id === action.userId){
              return {...u, followed:false}
            }
            return u;
          })
        }
      case "SetUsers":
       return { ...state, users: [...action.users] }

    default:
    	return state;
  }
}
export const usersAC ={
  FollowAC(userId){
    return {type:"Follow",userId}
  },
  UnFolowAC(userId){
    return{type:"UnFollow",userId}
  },
  SetUsersAC(users){
    return{type:"SetUsers",users}
  }
}

export default usersReducer;