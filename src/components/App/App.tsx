import React from 'react';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';

function App() {

  let navigate = useNavigate();

  function handleKeyDown(e: React.KeyboardEvent) {

    if (e.keyCode === 68 || e.keyCode === 65) {
      e.preventDefault();
    }

    switch (e.keyCode) {
      case 65:
        return navigate('/')

      case 68:
        return navigate('/about');

      default:
        break;
    }
  }

  return (
    <div className="app" tabIndex={0} onKeyDown={handleKeyDown}>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
