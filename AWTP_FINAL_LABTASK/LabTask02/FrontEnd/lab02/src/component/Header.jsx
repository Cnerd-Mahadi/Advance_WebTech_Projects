import React from "react";
import { Route } from "./Route";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="bla.html">
          Random
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <link to="/dash" className="nav-link">
                Home
              </link>
            </li>
            <li className="nav-item">
              <link to="/logout" className="nav-link">
                LogOut
              </link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
