import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}