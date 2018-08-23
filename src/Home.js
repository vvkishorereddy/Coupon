import React, { Component } from 'react';
import Header from './Components/Layouts/Header';
import Slider from './Components/Slider';
import Footer from './Components/Layouts/Footer';
import HomePosts from './Components/HomePosts';
import Subscribe from './Components/Subscribe';
import TopStores from './Components/TopStores';
import PopularTagsWidget from './Components/PopularTagsWidget';
import TrendingCouponWidget from './Components/TrendingCouponWidget';
import PopularCategoriesWidget from './Components/PopularCategoriesWidget';
import BottomBanner from './Components/BottomBanner';
import Modal from './Components/Modal';

export class Home extends Component {
  render() {
    return (
        <div className="site-wrapper animsition" data-animsition-in="fade-in"  data-animsition-out="fade-out">
          <Header />
          <div className="wrapper">
            <div className="container" style={{marginTop:'150px'}}>
              <Slider />
              <div className="row">
                <div className="col-lg-8">
                  <HomePosts />
                  <div className="clearfix" />
                  <TopStores />
                </div>
                <div className="col-lg-4">
                  <PopularCategoriesWidget />
                  <PopularTagsWidget />
                  <TrendingCouponWidget />
                </div>
              </div>
            </div>
            <BottomBanner />
            <Subscribe />
            <Footer />
            <Modal />
            </div>
        </div>
       )
  }
}

export default Home
