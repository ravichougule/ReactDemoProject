import React from "react";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">Welcome to Users Management Module</h1>
          <br />
          <br />
          <h2 className="subtitle">Existing Users</h2>
          <div className="btnCenter">
            <Link to="/login" className="btn btn-primary m-2">
              Login
            </Link>
          </div>
          <br/>    
          <h2 className="subtitle">New Users</h2>
          <div className="btnCenter">
            <Link to="/register" className="btn btn-primary m-2">
              Register
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Welcome;
