let initalState ={
  users:[],
  page:1,
  count:10,
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
       return { ...state, users: [...action.users]}

      case "nextGetUsers":
        {return {...state, page : action.page + 1}} 
      case "addGetUsers":
        {return {...state, count : action.count + 5}} 
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
  },
  nextGetUsersAC(page){
    return{type:"nextGetUsers",page}
  },
  addGetUsersAC(count){
    return{type:"addGetUsers",count}
  }
}

export default usersReducer;