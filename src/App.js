import React from 'react';
import './App.css';
import ProfileConteiner from './component/ProfileConteiner.js';
import Header from './component/AuthConteiner';
import Sidebar from './component/Sidebar.jsx';
import DialogsConteiner from './component/DialogsConteiner.js';
import UsersConteiner from './component/UsersConteiner.js';
import Login from './component/login.jsx'
import loader from './common/loadingGif.jsx';
import {Route , Routes} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">      
      <Header />
      <Sidebar />
      <div className="content-box">
      <Routes>
        <Route path="/Profile/:userId" element={<ProfileConteiner />}/>
        <Route path='/Dialogs' element={<DialogsConteiner />}/>
        <Route path='/Users' element={<UsersConteiner />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
