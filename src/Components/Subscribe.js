import React, { Component } from 'react'

export class Subscribe extends Component {
  render() {
    return (
        <section className="newsletter-alert">
        <div className="container text-center">
          <div className="col-sm-12">
            <div className="newsletter-form">
              <h4><i className="ti-email" />Sign up for our weekly email newsletter with the best money-saving coupons.</h4>
              <div className="input-group">
                <input type="text" className="form-control input-lg" placeholder="Email" /> <span className="input-group-btn">
                  <button className="btn btn-danger btn-lg" type="button">
                    Subscribe
                  </button>
                </span> 
              </div>
              <p><small>We’ll never share your email address with a third-party.</small> </p>
            </div>
          </div>
        </div>
      </section>   
       )
  }
}

export default Subscribe
