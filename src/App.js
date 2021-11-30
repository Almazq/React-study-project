import React from 'react';
import './App.css';
import Profile from './component/Profile.jsx';
import Header from './component/Header.jsx';
import Sidebar from './component/Sidebar.jsx';
import Dialogs from './component/Dialogs.jsx';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Header />
      <Sidebar />
      <div className="content-box">
      <Routes>
        <Route path="/Profile" element={<Profile 
          postValue={props.state.Profilejsx.postValue} posts = {props.state.Profilejsx.posts} 
          dispatch = {props.dispatch}/>}/>
        <Route path="/Dialogs" element={<Dialogs
          listname = {props.state.Dialogjsx.listname} massege = {props.state.Dialogjsx.massege} 
          ava = {props.state.Dialogjsx.ava} dispatch = {props.dispatch} 
          massegeValue={props.state.Dialogjsx.massegeValue}/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
