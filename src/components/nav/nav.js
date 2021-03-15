import React from 'react';
import  '../nav/nav.css';


function nav(props) {
  const Navbars = ['Home', 'About', 'Contact', 'Portfolio','Resume'];
  return (
    <div className="hero-image">
    <ul className="navbar">
      {Navbars.map(Navbar => (
        <li className="nav-item" key={Navbar}>
          <a
            href={'#' + Navbar.toLowerCase()}
            onClick={() => props.handlePageChange(Navbar)}
            className={
              props.currentPage === Navbar ? 'nav-link active' : 'nav-link'
            }
          >
            {Navbar}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default nav;