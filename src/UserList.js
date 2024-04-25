import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      deleteUserId: 0,
    };
  }

  componentDidMount() {
    this.setState({
      users: getUsersFromLocalStorage(),
    });
  }

  deleteClick = (event) => {
    event.preventDefault(); // page will not refresh
    const id = event.target.dataset.id;
    this.setState({
      deleteUserId: id,
    });
  };

  deleteUser = (event) => {
    event.preventDefault(); // page will not refresh

    let id = this.state.deleteUserId;
    let usersList = this.state.users;
    const userIndex = usersList.findIndex((obj) => obj.id == id);
   
    //Delete user
    usersList.splice(userIndex, 1);

    console.log(usersList);
    localStorage.setItem("users", JSON.stringify(usersList));
   
    this.setState({
      users: getUsersFromLocalStorage(),
    });
  };

  render() {
    console.log("Delete user id", this.state.deleteUserId);
    return (
      <>
        <div className="container">
          <Nav />
          <h1>User List</h1>
          <div className="m-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>User Email Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={`/edituser/${item.id}`}>Edit</Link>&nbsp;|&nbsp;
                      <Link
                        data-id={item.id}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={this.deleteClick}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Confirm User Deletion
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">Are you sure?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={this.deleteUser}
                    >
                      OK
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function getUsersFromLocalStorage() {
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  return users;
}

export default UserList;
