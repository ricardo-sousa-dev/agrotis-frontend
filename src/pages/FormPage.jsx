import React from 'react';
import Form from '../components/Form.jsx';
import SimpleFooter from '../components/FooterSimple.jsx';
import Navbar from '../components/NavbarSimple.jsx';
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
