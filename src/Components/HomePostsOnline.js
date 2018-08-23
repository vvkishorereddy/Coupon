import React, { Component } from 'react'

export class HomePostsOnline extends Component {
  render() {
    return (
        <div id="online" className="tab-pane counties-pane animated fadeIn">
        <div className="coupon-wrapper row featured">
          <div className="coupon-data col-sm-2 text-center">
            <div className="savings text-center">
              <div>
                <div className="large">25%</div>
                <div className="small">off</div>
                <div className="type">Coupon</div>
              </div>
            </div>
            {/* end:Savings */}
          </div>
          {/* end:Coupon data */}
          <div className="coupon-contain col-sm-7">
            <ul className="list-inline list-unstyled">
              <li className="sale label label-pink">Sale</li>
              <li className="popular label label-success">100% success</li>
              <li><span className="verified  text-success"><i className="ti-face-smile" />Verified</span> </li>
              <li><span className="used-count">78 used</span> </li>
            </ul>
            <h4 className="coupon-title"><a href="index.html#">Up To 70% Off | Shopname Promo Codes &amp; Coupons</a></h4>
            <p data-toggle="collapse" data-target={3}>Shop these Shopname deals of the day to save as much...</p>
            <p id={3} className="collapse">Don't miss out on all the coupon savings.Get you coupon now and save big</p>
            <ul className="coupon-details list-inline">
              <li className="list-inline-item">
                <div className="btn-group" role="group" aria-label="...">
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="left" title data-original-title="It worked"><i className="ti-thumb-up" /> </button>
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" title data-original-title="It didn't work"><i className="ti-thumb-down" /> </button>
                </div>
                {/* end:Btn group */}
              </li>
              <li className="list-inline-item">30% of 54 recommend</li>
              <li className="list-inline-item"><a href="index.html#">Share</a> </li>
            </ul>
            {/* end:Coupon details */}
          </div>
          {/* end:Coupon cont */}
          <div className="button-contain col-sm-3 text-center">
            <p className="btn-code" data-toggle="modal" data-target=".couponModal"> <span className="partial-code">BTSBAGS</span> <span className="btn-hover">Get Code</span> </p>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default btn-xs"><i className="ti-star" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-email" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-mobile" /> </button>
            </div>
          </div>
        </div>
        {/* end: coupon wrap */}
        <div className="coupon-wrapper row">
          <div className="coupon-data col-sm-2 text-center">
            <div className="savings text-center">
              <div>
                <div className="large">15%</div>
                <div className="small">off</div>
                <div className="type">Coupon</div>
              </div>
            </div>
            {/* end:Savings */}
          </div>
          {/* end:Coupon data */}
          <div className="coupon-contain col-sm-7">
            <ul className="list-inline list-unstyled">
              <li className="promo label label-pink">Promo code</li>
              <li className="sale label label-warning">Ending</li>
              <li><span className="used-count">51 used</span> </li>
            </ul>
            <h4 className="coupon-title"><a href="index.html#">20% Off With In-Store Pick-Up</a></h4>
            <p data-toggle="collapse" data-target={4}>Buy online and pick-up in-store to save 15% or 20%...</p>
            <p id={4} className="collapse">Don't miss out on all the coupon savings.Get you coupon now and save big</p>
            <ul className="coupon-details list-inline">
              <li className="list-inline-item">
                <div className="btn-group" role="group" aria-label="...">
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="left" title data-original-title="It worked"><i className="ti-thumb-up" /> </button>
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" title data-original-title="It didn't work"><i className="ti-thumb-down" /> </button>
                </div>
                {/* end:Btn group */}
              </li>
              <li className="list-inline-item">30% of 54 recommend</li>
              <li className="list-inline-item"><a href="index.html#">Share</a> </li>
            </ul>
            {/* end:Coupon details */}
          </div>
          {/* end:Coupon cont */}
          <div className="button-contain col-sm-3 text-center">
            <p className="btn-code" data-toggle="modal" data-target=".couponModal"> <span className="partial-code">BTSBAGS</span> <span className="btn-hover">Get Code</span> </p>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default btn-xs"><i className="ti-star" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-email" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-mobile" /> </button>
            </div>
          </div>
        </div>
        {/* end: coupon wrap */}
        <div className="coupon-wrapper row">
          <div className="coupon-data col-sm-2 text-center">
            <div className="savings text-center">
              <div>
                <div className="large">72%</div>
                <div className="small">off</div>
                <div className="type">Deal</div>
              </div>
            </div>
            {/* end:Savings */}
          </div>
          {/* end:Coupon data */}
          <div className="coupon-contain col-sm-7">
            <ul className="list-inline list-unstyled">
              <li className="sale label label-pink">Sale</li>
              <li><span className="used-count">27 used</span> </li>
            </ul>
            <h4 className="coupon-title"><a href="index.html#">Extra 10% Off Select Luggage + Up To $150 Back In Points For Members + Free Shipping</a></h4>
            <p data-toggle="collapse" data-target={5}>Shop these Shopname deals of the day to save as much...</p>
            <p id={5} className="collapse">Don't miss out on all the coupon savings.Get you coupon now and save big</p>
            <ul className="coupon-details list-inline">
              <li className="list-inline-item">
                <div className="btn-group" role="group" aria-label="...">
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="left" title data-original-title="It worked"><i className="ti-thumb-up" /> </button>
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" title data-original-title="It didn't work"><i className="ti-thumb-down" /> </button>
                </div>
                {/* end:Btn group */}
              </li>
              <li className="list-inline-item">30% of 54 recommend</li>
              <li className="list-inline-item"><a href="index.html#">Share</a> </li>
            </ul>
            {/* end:Coupon details */}
          </div>
          {/* end:Coupon cont */}
          <div className="button-contain col-sm-3 text-center">
            <p className="btn-code" data-toggle="modal" data-target=".couponModal"> <span className="partial-code">BTSBAGS</span> <span className="btn-hover">Get Code</span> </p>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default btn-xs"><i className="ti-star" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-email" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-mobile" /> </button>
            </div>
          </div>
        </div>
        {/* end: coupon wrap */}
        <div className="coupon-wrapper row">
          <div className="coupon-data col-sm-2 text-center">
            <div className="savings text-center">
              <div>
                <div className="large">50%</div>
                <div className="small">off</div>
                <div className="type">Coupon</div>
              </div>
            </div>
            {/* end:Savings */}
          </div>
          {/* end:Coupon data */}
          <div className="coupon-contain col-sm-7">
            <ul className="list-inline list-unstyled">
              <li className="promo label label-pink">Promo code</li>
              <li className="sale label label-warning">Ending</li>
              <li><span className="used-count">51 used</span> </li>
            </ul>
            <h4 className="coupon-title"><a href="index.html#">Jack Black Men's Pit Boss Antiperspirant &amp; Deodorant</a></h4>
            <p data-toggle="collapse" data-target="#more-3">Buy online and pick-up in-store to save 15% or 20%...</p>
            <p id="more-3" className="collapse">Don't miss out on all the coupon savings.Get you coupon now and save big</p>
            <ul className="coupon-details list-inline">
              <li className="list-inline-item">
                <div className="btn-group" role="group" aria-label="...">
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="left" title data-original-title="It worked"><i className="ti-thumb-up" /> </button>
                  <button type="button" className="btn btn-default btn-xs" data-toggle="tooltip" data-placement="top" title data-original-title="It didn't work"><i className="ti-thumb-down" /> </button>
                </div>
                {/* end:Btn group */}
              </li>
              <li className="list-inline-item">30% of 54 recommend</li>
              <li className="list-inline-item"><a href="index.html#">Share</a> </li>
            </ul>
            {/* end:Coupon details */}
          </div>
          {/* end:Coupon cont */}
          <div className="button-contain col-sm-3 text-center">
            <p className="btn-code" data-toggle="modal" data-target=".couponModal"> <span className="partial-code">BTSBAGS</span> <span className="btn-hover">Get Code</span> </p>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default btn-xs"><i className="ti-star" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-email" /> </button>
              <button type="button" className="btn btn-default btn-xs"><i className="ti-mobile" /> </button>
            </div>
          </div>
        </div>
        {/* end: coupon wrap */}
      </div>

    )
  }
}

export default HomePostsOnline
