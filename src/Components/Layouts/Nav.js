import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <div className="navbar-custom shadow">
        <div className="container">
          <div id="navigation">
            {/* Navigation Menu*/}
            <ul className="navigation-menu">
              <li className="active"> <a href="index.html"><i className="ti-home" /> <span> Home </span> </a> </li>
              <li className="has-submenu">
                <a href="index.html#"><i className="ti-cut" /> <span> Coupons </span> </a>
              </li>
              <li className="has-submenu">
                <a href="index.html#"><i className="ti-announcement" /> <span> Stores </span> </a>
              </li>
              <li className="has-submenu">
                <a href="index.html#"><i className="ti-layout-list-thumb" /> <span> Pages </span> </a>
              </li>
            </ul>
            {/* End navigation menu  */}
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
