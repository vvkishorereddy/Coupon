import React, { Component } from 'react'

export class Slider extends Component {
  render() {
    return (
        <div className="row" style={{display:'none'}}>
        <div className="col-sm-12">
          {/* Main component for a primary marketing message or call to action */}
          <div className="slide-wrap shadow">
            <div className="main-slider">
              <a href="index.html#" className="item" data-hash="one"> <img src={`${process.env.PUBLIC_URL}assets/images/slide-02.jpg`} alt="" /> </a>
              <div className="item" data-hash="two"> <img src={`${process.env.PUBLIC_URL}assets/images/slide-01.jpg`} alt="" /> </div>
              <div className="item" data-hash="three"> <img src={`${process.env.PUBLIC_URL}assets/images/slide-03.jpg`} alt="" /> </div>
            </div>
            {/* /.carosuel */}
            <div className="carousel-tabs clearfix">
              <a className="col-sm-4 tab url" href="index.html#one">
                <div className="media">
                  <div className="media-left media-middle"> <img src={`${process.env.PUBLIC_URL}assets/images/thumb10.png`} alt="" /> </div>
                  <div className="media-body">
                    <h4 className="media-heading">Upto 30% Rewards</h4>
                    <p>Up to 70% off on Clothing ...</p>
                  </div>
                </div>
              </a>
              <a className="col-sm-4 tab url" href="index.html#two">
                <div className="media">
                  <div className="media-left media-middle"> <img src={`${process.env.PUBLIC_URL}assets/images/amazon-logo-small.jpg`} alt="" /> </div>
                  <div className="media-body">
                    <h4 className="media-heading">Upto 70% Rewards</h4>
                    <p>Up to 70% off on Clothing ...</p>
                  </div>
                </div>
              </a>
              <a className="col-sm-4 tab url" href="index.html#three">
                <div className="media">
                  <div className="media-left media-middle"> <img src={`${process.env.PUBLIC_URL}assets/images/thumb8.png`} alt="" /> </div>
                  <div className="media-body">
                    <h4 className="media-heading">Upto 50% Rewards</h4>
                    <p>Up to 70% off on Clothing ...</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/*/slide wrap */}
        </div>
        {/* /col 12 */}
      </div>

    )
  }
}

export default Slider
