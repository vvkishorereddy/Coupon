import React, { Component } from 'react'

export class Modal extends Component {
  render() {
    return (
        <div className="coupon_modal modal fade couponModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="ti-close" /></span> </button>
            <div className="coupon_modal_content">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1 text-center">
                  <h2>Save 30% off New Domains Names</h2>
                  <p>Not applicable to ICANN fees, taxes, transfers,or gift cards. Cannot be used in conjunction with any other offer, sale, discount or promotion. After the initial purchase term.</p>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <h5 className="text-center text-uppercase m-t-20 text-muted">Click below to get your coupon code</h5>
                  </div>
                  <div className="col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3"> <a href="index.html#" target="_blank" className="coupon_code alert alert-info"><span className="coupon_icon"><i className="ti-cut hidden-xs" /></span>  DAZ50-8715 
                    </a> 
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="report">Did this coupon work? <span className="yes vote-link" data-src="#">Yes</span> <span className="no vote-link" data-src="#">No</span> </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end: Coupon modal content */}
          </div>
          <div className="newsletter-modal">
            <div className="newsletter-form">
              <h4><i className="ti-email" />Sign up for our weekly email newsletter with the best money-saving coupons.</h4>
              <div className="input-group">
                <input className="form-control input-lg" placeholder="Email" type="text" /> <span className="input-group-btn">
                  <button className="btn btn-danger btn-lg" type="button">
                    Subscribe
                  </button>
                </span> 
              </div>
              <p><small>We’ll never share your email address with a third-party.</small> </p>
            </div>
          </div>
          <ul className="nav nav-pills nav-justified">
            <li role="presentation" className="active"><a href="index.html#" data-toggle="tooltip" data-placement="top" title data-original-title="It worked"><i className="ti-check color-green" /></a> </li>
            <li role="presentation"><a href="index.html#" data-toggle="tooltip" data-placement="top" title data-original-title="I love it"><i className="ti-heart color-primary" /></a> </li>
            <li role="presentation"><a href="index.html#" data-toggle="tooltip" data-placement="top" title data-original-title="It didn't work"><i className="ti-close" /></a> </li>
          </ul>
        </div>
      </div>
     
    )
  }
}

export default Modal
