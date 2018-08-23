import React, { Component } from 'react'

export class TrendingCouponWidget extends Component {
  render() {
    return (
        <div className="widget trending-coupons">
        {/* /widget heading */}
        <div className="widget-heading">
          <h3 className="widget-title text-dark">
            Trending Coupons
          </h3>
          <div className="clearfix" />
        </div>
        <div className="widget-body">
          <div className="media">
            <div className="media-left media-middle"> <img src={`${process.env.PUBLIC_URL}assets/images/thmbsm-5.png`} alt="" /> </div>
            <div className="media-body">
              <h4 className="media-heading">Upto 70% Rewards</h4>
              <p>Up to 70% off on Clothing ...</p>
            </div>
          </div>
          {/*/coupon media */}
          <div className="media">
            <div className="media-left media-middle"> <img src={`${process.env.PUBLIC_URL}assets/images/thmbsm-6.png`} alt="" /> </div>
            <div className="media-body">
              <h4 className="media-heading">Upto 70% Rewards</h4>
              <p>Up to 70% off on Clothing ...</p>
            </div>
          </div>
          {/*/coupon media */}
          <div className="media">
            <div className="media-left media-middle"> <img src={`${process.env.PUBLIC_URL}assets/images/thmbsm-4.png`} alt="" /> </div>
            <div className="media-body">
              <h4 className="media-heading">Up to 50% off Mens Summer Essentials at Clothing</h4>
              <p>Up to 70% off on Clothing ...</p>
            </div>
          </div>
        </div>
        {/* // widget body */}
      </div>
      )
  }
}

export default TrendingCouponWidget
