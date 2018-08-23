import React, { Component } from 'react'

export class PopularCategoriesWidget extends Component {
  render() {
    return (


        <div className="widget categories b-b-0">
        {/* /widget heading */}
        <div className="widget-heading">
          <h3 className="widget-title text-dark">
            Popular categories
          </h3>
          <div className="clearfix" />
        </div>
        <div className="widget-body">
          {/* Sidebar navigation */}
          <ul className="nav sidebar-nav">
            <li className="dropdown">
              <a className="ripple-effect dropdown-toggle" href="index.html#" data-toggle="dropdown"> <i className="ti-shine">
                </i> Travel <span className="sidebar-badge">
                  12
                </span> <b className="caret">
                </b> </a>
              <ul className="dropdown-menu">
                <li> <a href="index.html#" tabIndex={-1}>
                    Europe
                    <span className="sidebar-badge">
                      12
                    </span>
                  </a> 
                </li>
              </ul>
            </li>
            <li>
              <a href="index.html#"> <i className="ti-gift">
                </i> Gifts <span className="sidebar-badge">
                  3
                </span> </a>
            </li>
            <li>
              <a href="index.html#"> <i className="ti-bag">
                </i> Vacations <span className="sidebar-badge">
                  3
                </span> </a>
            </li>
            <li>
              <a href="index.html#"> <i className="ti-ticket">
                </i> Tickets <span className="sidebar-badge badge-circle">
                  12
                </span> </a>
            </li>
            <li>
              <a href="index.html#"> <i className="ti-pulse">
                </i> Health <span className="sidebar-badge badge-circle">
                  45
                </span> </a>
            </li>
            <li>
              <a href="index.html#"> <i className="ti-direction-alt">
                </i> Things To Do <span className="sidebar-badge badge-circle">
                  117
                </span> </a>
            </li>
            <li>
              <a href="index.html#"> <i className="ti-harddrives">
                </i> Electronics <span className="sidebar-badge badge-circle">
                  117
                </span> </a>
            </li>
            <li>
              <a href="index.html#"> <i className="ti-harddrives">
                </i> Electronics <span className="sidebar-badge badge-circle">
                  117
                </span> </a>
            </li>
          </ul>
          {/* Sidebar divider */}
        </div>
      </div>
)
  }
}

export default PopularCategoriesWidget
