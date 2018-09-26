import React from 'react';
import { Header } from './Header';
import { Home } from "./Home";
export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            <Header />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}