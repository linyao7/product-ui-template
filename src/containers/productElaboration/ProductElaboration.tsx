import React from 'react';
import Feature from '../../components/feature/Feature';
import './productElaboration.css';

const ProductElaboration = () => (
  <div className="productX__whatproductX section__margin" id="tellmemore">
    <div className="productX__whatproductX-feature">
      <Feature
        title="What is Product-X"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
    <div className="productX__whatproductX-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore Product-X</p>
    </div>
    <div className="productX__whatproductX-container">
      <Feature title="Quality Of Living" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Feature
        title="Technical Terms"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Feature
        title="Education"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  </div>
);

export default ProductElaboration;
