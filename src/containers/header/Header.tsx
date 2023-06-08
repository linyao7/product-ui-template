import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="productX__header section__padding" id="home">
    <div className="productX__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with Product-X</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>

      <div className="productX__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="productX__header-content__people">
        <img src={people} alt="missing" />
        <p>3,789 people has used this product</p>
      </div>
    </div>

    <div className="productX__header-image">
      <img src={ai} alt="missing" />
    </div>
  </div>
);

export default Header;
