import React from 'react';
import AppHeaderAuth from '../AppHeaderAuth/AppHeaderAuth';

import logo from '../../images/microsoft_small.png';

import './AppHeader.css';

export default function AppHeader() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg nav-bar-search">
        <a className="navbar-brand" href="/">
          <img src={logo} className="navbar-logo navbar-brand-image" alt="Microsoft" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://azure.microsoft.com/services/search/">Learn more</a>
            </li>
          </ul>
        </div>

        <AppHeaderAuth />
      </nav>
      
    </header>
  );
};
