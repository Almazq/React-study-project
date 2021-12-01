const dialogReducer = (state , action) =>{
	switch(action.type){
      case "ADD-MASSEGE":
      let newtext ={
        id:state.massege.length + 1,
        massegeMe:state.massegeValue
      };
      state.massege.push(newtext);
      state.massegeValue = "";
      return state;
      case "UPDATE-NEW-MASSEGE":
      state.massegeValue = action.newText;
      default:return state;
	}
}
export default dialogReducer;