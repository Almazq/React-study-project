const profileReducer = (state , action) =>{
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
export default profileReducer