import React, { useState } from 'react';
import Nav from './nav/nav';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume';
import Portfolio from './pages/workPortfolio/workPortfolio';


function Navbar() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {

    switch (currentPage) {

      case 'About': return (
        <About />
      )
      case 'Portfolio': return (
        <Portfolio />
      )
      case 'Resume': return (
        <Resume />
      )
      case 'Contact': return (
        <Contact />
      )
      default:
        return (<Home />)

    }
  };


  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {

          renderPage()

        }
      </div>
    </div>
  );


}


export default Navbar;