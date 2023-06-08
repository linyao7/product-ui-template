import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="productX__brand section__padding">
    <div>
      <img src={google} alt="sometext" />
    </div>
    <div>
      <img src={slack} alt="sometext" />
    </div>
    <div>
      <img src={atlassian} alt="sometext" />
    </div>
    <div>
      <img src={dropbox} alt="sometext" />
    </div>
    <div>
      <img src={shopify} alt="sometext" />
    </div>
  </div>
);

export default Brand;
