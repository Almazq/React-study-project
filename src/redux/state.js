import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
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
    this._state.Profilejsx = profileReducer(this._state.Profilejsx , action);
    this._state.Dialogjsx = dialogReducer(this._state.Dialogjsx , action);
    this._render(this.state);
  }

}


export default store;