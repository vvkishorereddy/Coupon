import React, { Component } from 'react'
import Logo from './Logo';
import Nav from './Nav';


export class Header extends Component {

  render() {
    return (
      <header className="header">
      <div className="top-nav  navbar m-b-0 b-0">
        <div className="container">
          <div className="row">
            <Logo />
            <div className="menu-extras col-sm-9 col-xs-8">
              <div className="menu-item">
                {/* Mobile menu toggle*/}
                <a className="navbar-toggle">
                  <div className="lines"> <span /> <span /> <span /> </div>
                </a>
                {/* End mobile menu toggle*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </header>
      )
  }
}

export default Header
