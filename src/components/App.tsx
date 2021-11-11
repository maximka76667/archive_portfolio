import React from 'react';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
