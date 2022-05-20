import React from 'react';
import Form from '../pages/FormPage';
import SimpleFooter from '../components/SimpleFooter';
import Navbar from '../components/Navbar';

function FormPage() {
  return (
    <div className="tasks-page">
      <div className="tasks-body">
        <Navbar />
        <Form />
      </div>
      <SimpleFooter />
    </div>
  );
}

export default FormPage;
