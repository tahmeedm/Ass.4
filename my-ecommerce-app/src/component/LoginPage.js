import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import Footer from './Footer';


const LoginPage = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
