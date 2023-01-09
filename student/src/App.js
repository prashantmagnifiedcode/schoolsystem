import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Access from './pages/Access/';
import Login from './pages/Login/login'
import AddStudent from './pages/addstudent'
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/Access" element={<Access />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
