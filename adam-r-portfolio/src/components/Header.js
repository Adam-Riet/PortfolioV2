import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header-container">
      <h1>Adam Riet</h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      
      </div>
  );
}

export default Header;
