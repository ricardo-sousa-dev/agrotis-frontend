import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Form } from './pages';

function App() {
  return (
    <Routes >
      <Route path="/" element={< Form />} />
    </Routes >
  );
}

export default App;