const profileReducer = (state , action) =>{
	if(action.type === "ADD-POST"){
      let newtext ={
        id:state.posts.length + 1,
        posts:state.postValue
      };
      state.posts.push(newtext);
      state.postValue = "";
    }else if(action.type === "UPDATE-NEW-POST"){
      state.postValue = action.newText;
    }
	return state;
}
export default profileReducer;