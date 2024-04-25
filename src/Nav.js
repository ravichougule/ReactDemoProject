import React from "react";
import { Link, Outlet } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/groupchat">
                    Group Chat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manageusers">
                    Manage Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/managedocuments">
                    Manage Documents
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-2">
          <Outlet />
        </div>
      </>
    );
  }
}
export default Nav;
