import React from 'react';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Header />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
