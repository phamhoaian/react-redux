import React from 'react';
import { Header } from './Header';

export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            <Header homeLink="Home" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}