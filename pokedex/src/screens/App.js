import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      
      <Header />

      <Outlet/>

      <Footer />
    </div>
  );
}

export default App;
