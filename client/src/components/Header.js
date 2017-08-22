import React, { Component } from 'react';
import Logo from '../assets/logobrand.png'

class Header extends Component {
  render = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <navbar-brand>
          <img src={Logo} width="40px" alt="" />
        </navbar-brand>
        <a className="navbar-brand" href="#">WeatherCute</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default Header;
