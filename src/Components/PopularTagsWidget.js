import React, { Component } from 'react'

export class PopularTagsWidget extends Component {
  render() {
    return (
          
        <div className="widget">
        <div className="widget-heading">
          <h3 className="widget-title text-dark">
            Popular tags
          </h3>
          <div className="clearfix" />
        </div>
        <div className="widget-body">
          <ul className="tags">
            <li> <a href="index.html#" className="tag">
                Coupons
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Discounts
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Deals
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Shopname 
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Ebay
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Fashion
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Shoes
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Kids
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Travel
              </a> 
            </li>
            <li> <a href="index.html#" className="tag">
                Hosting
              </a> 
            </li>
          </ul>
        </div>
      </div>
)
  }
}

export default PopularTagsWidget
