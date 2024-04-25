import React from "react";
import { Link } from "react-router-dom";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("loggedInUser");
  }
  state = {};
  render() {
    return (
      <>
        <h1 className="title"> You have been logged out successfully</h1>
        <div className="subtitle">
          <Link to="/">Click here</Link> to Login again
        </div>
      </>
    );
  }
}

export default Logout;
