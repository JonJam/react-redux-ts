import * as React from "react";
import { Link } from "react-router-dom";
import { homePath, signUpPath } from "../../../routes/paths";

import logo from "./logo.svg";

import "./NavBar.css";

interface INavBarProps {
  readonly isAuthenticated: boolean;
  handleSignOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function NavBar(props: INavBarProps) {
  let authenticationLink = (
    <Link to={signUpPath} className="nav-link">
      {"Sign in / up"}
    </Link>
  );

  if (props.isAuthenticated) {
    authenticationLink = (
      <a href="#" onClick={props.handleSignOut} className="nav-link">
        {"Sign out"}
      </a>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={homePath} className="navbar-brand">
          <img
            src={logo}
            className="brand-logo d-inline-block align-top"
            alt=""
          />
          {"React app"}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">{authenticationLink}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
