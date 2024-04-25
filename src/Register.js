import React from "react";
import { Navigate } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault(); // page will not refresh
    const fullname = event.target.elements.fullname.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    let user = {
      id: Number(new Date()),
      fullname: fullname,
      email: email,
      password: password,
    };
    users.push(user); // adding item inside array
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({
      // Whenever state updates, component rerender
      redirect: true,
    });
  };
  
  render() {
    const { redirect } = this.state;
    return (
      <>
        {redirect && <Navigate to="/registersuccessful" />}
        <div className="container">
          <h1>New Registration</h1>
          <div className="row">
            <div className="col-xxl-6">
              <form onSubmit={this.handleSubmit}>
                Full Name
                <input
                  className="form-control"
                  type="text"
                  name="fullname"
                  placeholder="Enter Full Name"
                />
                Email
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                />
                Password
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                Confirm Password
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                />
                <input
                  className="btn btn-primary mt-2 register-btn"
                  type="submit"
                  value="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
