import React, { Component } from 'react'

export class Footer extends Component {


componentWillMount(){

}

  render() {
    return (
        <footer id="footer">
        <div className="btmFooter">
          <div className="container">
            <div className="col-sm-12 text-center m-b-20">
              <p> <strong>
                  Copyright {Date()}
                </strong> 
              </p>
            </div>
          </div>
        </div>
      </footer>
         )
  }
}

export default Footer
