import React, { Component,Fragment } from 'react';
import HomePostsPopular from './HomePostsPopular';
import HomePostsEnding from './HomePostsEnding';
import HomePostsOnline from './HomePostsOnline';

export class HomePosts extends Component {
  render() {
    return (
        <Fragment>
            <ul className="nav nav-tabs responsive-tabs" id="myTab">
                <li className="active"><a data-toggle="tab" href="index.html#popular"><i className="ti-bar-chart" />Popular </a> </li>
                <li className><a data-toggle="tab" href="index.html#ending"><i className="ti-timer" /> Ending soon</a> </li>
                <li className><a data-toggle="tab" href="index.html#online"><i className="ti-link" />Online</a> </li>
            </ul>
            <div className="tab-content clearfix" id="myTabContent">
                <HomePostsPopular />
                <HomePostsEnding />
                <HomePostsOnline />
            </div>
        </Fragment>
    )
  }
}

export default HomePosts
