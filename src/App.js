import React from 'react';
import './App.css';
import ProfileConteiner from './component/ProfileConteiner.jsx';
import Header from './component/Header.jsx';
import Sidebar from './component/Sidebar.jsx';
import DialogsConteiner from './component/DialogsConteiner.jsx';
import UsersConteiner from './component/UsersConteiner.jsx';
import {Route , Routes} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">      
      <Header />
      <Sidebar />
      <div className="content-box">
      <Routes>
        <Route path="/Profile" element={<ProfileConteiner />}/>
        <Route path="/Dialogs" element={<DialogsConteiner />}/>
        <Route path="/Users" element={<UsersConteiner />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
