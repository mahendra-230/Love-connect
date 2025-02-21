import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUP from './components/SignUP';
import DashBoard from './components/DashBoard';
import About from './components/About';
import Contact from './components/Contact';
import Settings from './components/Settings';
// import Message from './components/Message';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='message' element={<Message />}/> */}
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='settings' element={<Settings />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUP />} />
        <Route path='dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
