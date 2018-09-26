import React from "react";

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">{props.homeLink}</a></li>
        </ul>
      </div>
    </nav>
  );
};
