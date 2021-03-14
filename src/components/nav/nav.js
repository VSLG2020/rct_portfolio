import React, { useEffect } from 'react';


function nav(props) {
  const tabs = ['Home', 'About', 'Contact', 'Portfolio','Resume'];
  return (
    <ul className="navbar">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default nav;