
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
    case "ADD-POST":{
      let newtext ={
        id:state.posts.length + 1,
        posts:state.postValue
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newtext);
      stateCopy.postValue = "";
      return stateCopy;
    }
     case "UPDATE-NEW-POST":
     let stateCopy = {...state};
     
      stateCopy.postValue = action.newText;
      return stateCopy;
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