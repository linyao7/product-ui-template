import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="productX__blog section__padding" id="blog">
    <div className="productX__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="productX__blog-container">
      <div className="productX__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="Product-X and its the future. What impact does it have on us?"
        />
      </div>
      <div className="productX__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="A realistic view on our current climate." />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="We need to start taking initiative for advancement." />
        <Article
          imgUrl={blog04}
          date="Sep 26, 2021"
          text="Product-X and its the future. What impact does it have on us?"
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="Product-X and its the future. What impact does it have on us?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
