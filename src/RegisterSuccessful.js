import React from "react";
import { Link } from "react-router-dom";

class RegisterSuccessful extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <>
        <h1 className="title">Registration Successful</h1>
        <h2 className="subtitle">Thank you for registration</h2>
        <div className="subtitle">
          <Link to="/">Click here</Link> to return to home page
        </div>
      </>
    );
  }
}

export default RegisterSuccessful;
