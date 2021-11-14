import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/about">about</Route>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
