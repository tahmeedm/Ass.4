import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <img src="/images/logo.png" alt="Company Logo" style={{ height: '50px' }} />
        <div>Company Name</div>
      </div>
      <nav style={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
