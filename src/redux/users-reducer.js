let initalState ={
  users:[
    {id:1,name:"Arsen" location{city:"Astana",country:"Kazahstan"}},
    {id:2,name:"Rose" location:{city:"Moscow",country:"Russia"}},
    {id:3,name:"Danial" location:{city:"Almaty",country:"Kazahstan"}},
    {id:4,name:"Jisoo" location:{city:"Seoul",country:"Korea"}}
  ]
}

const usersReducer = (state = initalState , action) =>{
	switch(action.type){

    default:
    	return state;
  }
}

export default usersReducer;