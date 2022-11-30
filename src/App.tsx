import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/register/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/*' element={<Navigate to='/dashboard'/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
