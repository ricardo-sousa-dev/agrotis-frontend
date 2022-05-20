import React from 'react';
import Form from '../components/Form';
import SimpleFooter from '../components/SimpleFooter';
import Navbar from '../components/Navbar';
import '../css/pages/formPage.css';

function FormPage() {
  return (
    <div className="page-form">
      <div className="body-form">
        <Navbar />
        <Form />
      </div>
      <SimpleFooter />
    </div>
  );
}

export default FormPage;
