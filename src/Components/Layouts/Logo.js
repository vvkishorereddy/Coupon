import React, { Component } from 'react'

export class Logo extends Component {
  render() {
    return (
        <div className="topbar-left col-sm-3">
        <a href="index.html" className="logo">
         <img src={process.env.PUBLIC_URL+"assets/images/logo.png"} alt="" className="img-responsive" />
          </a>
      </div>
    )
  }
}

export default Logo
