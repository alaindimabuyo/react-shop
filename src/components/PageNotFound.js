import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
              <i class='fas fa-exclamation-triangle' />
              <h3>Error 404</h3>
              <h4>Page not Found</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
