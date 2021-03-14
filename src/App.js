import React from 'react';
//import logo from './logo.svg';
import About from './components/about';
import Nav from './components/nav';
import './App.css';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
