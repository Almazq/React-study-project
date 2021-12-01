
let initalState ={
      posts:[
        {id:1,posts:"Hi"},
        {id:2,posts:"My first post"},
        {id:3,posts:"I live"},
        {id:4,posts:"How are you?"},
        {id:5,posts:"Yes, Yes i good"}
      ],
    postValue:""
}

const profileReducer = (state = initalState , action) =>{
	switch(action.type){
    case "ADD-POST":
      let newtext ={
        id:state.posts.length + 1,
        posts:state.postValue
      };
      state.posts.push(newtext);
      state.postValue = "";
      return state;
     case "UPDATE-NEW-POST":
      state.postValue = action.newText;
      return state;
    default:
    	return state;
  }
}
export const profileActionCreat = {
  addPostActionCreat(){
    return {
    type:"ADD-POST"
  }
  },
  upDateNewPostActionCreat(text){
    return {
    type:"UPDATE-NEW-POST",
    newText: text
  }
  }
}
export default profileReducer