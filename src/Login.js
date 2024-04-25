import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault(); // page will not refresh
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const loggedInUser = users.filter((item, index) => {
      return (item.email == email);
    });

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect } = this.state;
    return (
      <>
        {redirect && <Navigate to="/loginsuccessful" />}
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div class="col-6">
                <label for="Email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label for="Password">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
