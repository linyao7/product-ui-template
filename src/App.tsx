import React, { useEffect, useState } from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, ProductElaboration, Header } from './containers';
import { Brand, CTA, Navbar } from './components';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const positionToShowTop = 900;

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > positionToShowTop) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {showButton && (
        <BsFillArrowUpCircleFill
          className="scrollToTopButton"
          fill="var(--color-primary-btn)"
          size={50}
          onClick={() => window.scrollTo(0, 0)}
        />
      )}
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <ProductElaboration />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
