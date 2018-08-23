import React, { Component } from 'react'

export class BottomBanner extends Component {
  render() {
    return (
        <section className="call-to-action">
        <div className="container">
          <div className="row explain_group">
            <div className="col-md-4">
              <a className="item" rel="nofollow" href="index.html#">
                <div className="box-icon"> <i className="bg-danger ti-search" /> </div>
                <div className="box-info">
                  <h3>Search coupons</h3>
                  <h4>Find best money-saving coupons.</h4>
                  <div className="point"><i className="ti-check" /><span>Find fresh coupons</span> </div>
                  <div className="point"><i className="ti-check" /><span>Top Coupons &amp; Offers</span> </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="item" rel="nofollow" href="index.html#">
                <div className="box-icon"> <i className="bg-info ti-shopping-cart-full" /> </div>
                <div className="box-info">
                  <h3>Save your money</h3>
                  <h4>Find best money-saving coupons.</h4>
                  <div className="point"><i className="ti-check" /><span>Find fresh coupons</span> </div>
                  <div className="point"><i className="ti-check" /><span>Top Coupons &amp; Offers</span> </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a className="item" rel="nofollow" href="index.html#">
                <div className="box-icon"> <i className="bg-purple ti-gift" /> </div>
                <div className="box-info">
                  <h3>Earn your gifts</h3>
                  <h4>Find best money-saving coupons.</h4>
                  <div className="point"><i className="ti-check" /><span>Find fresh coupons</span> </div>
                  <div className="point"><i className="ti-check" /><span>Top Coupons &amp; Offers</span> </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  
    )
  }
}

export default BottomBanner
