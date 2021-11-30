let store  = {
  _state:{
    Dialogjsx:{
      massege:[
        { id: 1, massegeMe:"Hi"},
        { id: 2, massegeMe:"How are you ?"},
        { id: 3, massegeMe:"How you like that"},
        { id: 4, massegeMe:"How you like that"},
        { id: 5, massegeMe:"How you like that"},
        ],
      massegeValue:"",
      listname:[
        {id:1,name:"Sofia",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYorZ4x7ZeAD-lZzQKRVJR_-yQlO7Tqu20ag&usqp=CAU"},
        {id:2,name:"Rose",src:"https://pbs.twimg.com/profile_images/1156680540923342848/VYksBl_m.jpg"},
        {id:3,name:"Arsen",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUTqbq_7zY-zEb9tgZRM3zpMi--9hjQiifQ&usqp=CAU"},
        {id:4,name:"Danial",src:"https://www.meme-arsenal.com/memes/4b2297da1fcfec945b860771127d876c.jpg"},
        {id:5,name:"Jisoo Kim",src:"https://i.pinimg.com/736x/e4/55/0c/e4550c67e244a14282cb3ff711c1ac99.jpg"},
        {id:6,name:"Almaz",src:"https://www.meme-arsenal.com/memes/0c73cae537b8fa8ea5fe0286483cf032.jpg"}],
      
    },
    Profilejsx:{
      posts:[
        {id:1,posts:"Hi"},
        {id:2,posts:"My first post"},
        {id:3,posts:"I live"},
        {id:4,posts:"How are you?"},
        {id:5,posts:"Yes, Yes i good"}
      ],
    postValue:""
    }
  },
  _render(state){
    console.log("State changed");
  },
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._render = observer;
  },
  dispatch(action){
    if(action.type === "ADD-POST"){
      let newtext ={
        id:this._state.Profilejsx.posts.length + 1,
        posts:this._state.Profilejsx.postValue
      };
      this._state.Profilejsx.posts.push(newtext);
      this._state.Profilejsx.postValue = "";
      this._render(this._state);
    }else if(action.type === "UPDATE-NEW-POST"){
      this._state.Profilejsx.postValue = action.newText;
      this._render(this._state);
    }else if(action.type === "ADD-MASSEGE"){
      let newtext ={
        id:this._state.Dialogjsx.massege.length + 1,
        massegeMe:this._state.Dialogjsx.massegeValue
      };
      this._state.Dialogjsx.massege.push(newtext);
      this._state.Dialogjsx.massegeValue = "";
      this._render(this._state);
    }else if(action.type === "UPDATE-NEW-MASSEGE"){
      this._state.Dialogjsx.massegeValue = action.newText;
      this._render(this._state);
    }
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
export const dialogActionCreat = {
  addMassegeActionCreat(){
    return {
    type:"ADD-MASSEGE"
  }
  },
  upDateNewMassegeActionCreat(text){
    return {
    type:"UPDATE-NEW-MASSEGE",
    newText: text
  }
  }
}

export default store;