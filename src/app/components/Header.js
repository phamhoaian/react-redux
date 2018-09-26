import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to={"/user"} className="nav-link">User</Link></li>
        </ul>
      </div>
    </nav>
  );
};
