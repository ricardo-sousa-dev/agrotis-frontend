import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import FormPage from './pages/FormPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
