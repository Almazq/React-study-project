let initalState ={
  users:[
    {id:1,name:"Arsen",folow:false, location:{city:"Astana",country:"Kazahstan"}, img:"https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg"},
    {id:2,name:"Rose" ,folow:false,location:{city:"New York",country:"USA"}, img:"https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg"},
    {id:3,name:"Danial" ,folow:false,location:{city:"Almaty",country:"Kazahstan"}, img:"https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg"},
    {id:4,name:"Jisoo" ,folow:true,location:{city:"Seoul",country:"Korea"}, img:"https://thumbs.dreamstime.com/b/crazy-cat-tongue-hanging-out-40087599.jpg"}
  ]
}

const usersReducer = (state = initalState , action) =>{
	switch(action.type){
    case "Follow":
      return{
        ...state,
        users:state.users.map(u =>{
          if(u.id === action.userId){
            
            return {...u, folow:true}
          }
          return u;
        })
      }
      case "UnFollow":
         return{
          ...state,
          users:state.users.map(u =>{
            if(u.id === action.userId){
              return {...u, folow:false}
            }
            return u;
          })
        }
      case "SetUsers":
        return{
          ...state,
          users:[...state.users, ...action.users]
        }

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