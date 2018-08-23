import React, { Component } from 'react'

export class TopStores extends Component {
  render() {
    return (
<div className="widget">
            {/* /widget heading */}
            <div className="widget-heading">
              <h3 className="widget-title text-dark">
                Top Stores  
              </h3>
              <div className="widget-widgets"> <a href="index.html#">View More Stores <span className="ti-angle-right" /></a> </div>
              <div className="clearfix" />
            </div>
            <div className="widget-body">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 thumb">
                  <div className="thumb-inside">
                    <a className="thumbnail" href="index.html#">
                     <img className="img-responsive" src={`${process.env.PUBLIC_URL}assets/images/thumb6.png`} alt="" />
                      </a> <span className="favorite"><a href="index.html#" data-toggle="tooltip" data-placement="left" title data-original-title="Save store"><i className="ti-heart" /></a></span> 
                  </div>
                  <div className="store_name text-center">
                    <h5>Wallshop</h5>
                  </div>
                </div>
                {/* /thumb */}
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 thumb">
                  <div className="thumb-inside">
                    <a className="thumbnail" href="index.html#">
                     <img className="img-responsive" src={`${process.env.PUBLIC_URL}assets/images/thumb1.png`} alt="" />
                      </a> <span className="favorite"><a href="index.html#" data-toggle="tooltip" data-placement="left" title data-original-title="Save store"><i className="ti-heart" /></a></span> 
                  </div>
                  <div className="store_name text-center">
                    <h5>Shopers</h5>
                  </div>
                </div>
                {/* /thumb */}
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 thumb">
                  <div className="thumb-inside">
                    <a className="thumbnail" href="index.html#">
                     <img className="img-responsive" src={`${process.env.PUBLIC_URL}assets/images/thumb2.png`} alt="" /> 
                     </a> <span className="favorite"><a href="index.html#" data-toggle="tooltip" data-placement="left" title data-original-title="Save store"><i className="ti-heart" /></a></span> 
                  </div>
                  <div className="store_name text-center">
                    <h5>Shoplogo</h5>
                  </div>
                </div>
                {/* /thumb */}
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 thumb">
                  <div className="thumb-inside">
                    <a className="thumbnail" href="index.html#"> 
                    <img className="img-responsive" src={`${process.env.PUBLIC_URL}assets/images/thumb3.png`} alt="" /> 
                    </a> <span className="favorite"><a href="index.html#" data-toggle="tooltip" data-placement="left" title data-original-title="Save store"><i className="ti-heart" /></a></span> 
                  </div>
                  <div className="store_name text-center">
                    <h5>Affiliate</h5>
                  </div>
                </div>
                {/* /thumb */}
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 thumb">
                  <div className="thumb-inside">
                    <a className="thumbnail" href="index.html#"> <img className="img-responsive" src={`${process.env.PUBLIC_URL}assets/images/thumb4.png`} alt="" /> </a> <span className="favorite"><a href="index.html#" data-toggle="tooltip" data-placement="left" title data-original-title="Save store"><i className="ti-heart" /></a></span> 
                  </div>
                  <div className="store_name text-center">
                    <h5>Coupons</h5>
                  </div>
                </div>
                {/* /thumb */}
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 thumb">
                  <div className="thumb-inside">
                    <a className="thumbnail" href="index.html#"> <img className="img-responsive" src={`${process.env.PUBLIC_URL}assets/images/thumb5.png`} alt="" /> </a> <span className="favorite"><a href="index.html#" data-toggle="tooltip" data-placement="left" title data-original-title="Save store"><i className="ti-heart" /></a></span> 
                  </div>
                  <div className="store_name text-center">
                    <h5>Discounts</h5>
                  </div>
                </div>
                {/* /thumb */}
              </div>
            </div>
          </div>    )
  }
}

export default TopStores
