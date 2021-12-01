const dialogReducer = (state , action) =>{
	if(action.type === "ADD-MASSEGE"){
      let newtext ={
        id:state.massege.length + 1,
        massegeMe:state.massegeValue
      };
      state.massege.push(newtext);
      state.massegeValue = "";
    }else if(action.type === "UPDATE-NEW-MASSEGE"){
      state.massegeValue = action.newText;
    }
	return state;
}
export default dialogReducer;