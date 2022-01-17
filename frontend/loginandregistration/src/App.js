import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import Login from './login';
import Regist from './regis';

function App() {
  return (

    <div className='main'>
      <div className='btn-class'>
        <NavLink to="/login"><button className='btn1'>Login</button></NavLink>
        <NavLink to="/registration"><button className='btn2'>Resgistration</button></NavLink>
      </div>
     

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Regist />} />

      </Routes>


    </div>
  );
}

export default App;