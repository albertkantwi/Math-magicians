import React from 'react';
import './index.css';
import { Link, Routes, Route } from 'react-router-dom';
import Calculation from './components/Calculation';
import Quote from './components/Quote';
import Home from './components/Home';

const App = () => (
  <>
    <header className="navbar">
      <h1 className="page-header">Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/calculator" className="nav-link">Calculator</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/quote" className="nav-link">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Routes className="main">
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculation />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
