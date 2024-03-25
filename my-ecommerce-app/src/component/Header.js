import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <img src="/images/logo.png" alt="Company Logo" style={{ height: '50px' }} />
        <div>Company Name</div>
      </div>
      <nav style={{ marginTop: '20px', width: '195%', display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to="/" activeclassname="active">Home</Link>
        <Link to="/Productpage" activeclassname="active">Products</Link>
        <Link to="/login" activeclassname="active">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
