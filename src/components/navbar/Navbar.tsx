import React, { useState } from 'react';
import './navbar.css';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Links = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#tellmemore">Tell me more</a>
    </p>
    <p>
      <a href="#possibility">Possibilities</a>
    </p>
    <p>
      <a href="#features">Use Cases</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="productX__navbar">
      <div className="productX__navbar-links">
        <div className="productX__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h1>Product-X</h1>
        </div>
        <div className="productX__navbar-links_container">
          <Links />
        </div>
      </div>
      <div className="productX__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="productX__navbar-menu">
        {isMenuOpen ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setIsMenuOpen(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setIsMenuOpen(true)} />
        )}
        {isMenuOpen && (
          <div className="productX__navbar-menu_container scale-up-center">
            <div className="productX__navbar-menu_container-links">
              <Links />
              <div className="productX__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
