import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  let usersList = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  //console.log("userList before update:", usersList);
  let editUser = usersList.filter((item, index) => {
    if (item.id == id) {
      return true;
    }
  });

  const handleSubmit = (event) => {

    event.preventDefault(); // page will not refresh

    let usersList = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const userIndex = usersList.findIndex((obj) => (obj.id == id));
    usersList[userIndex].fullname = event.target.elements.fullname.value;
    usersList[userIndex].email = event.target.elements.email.value;
    //console.log("userList after update:", usersList);

    localStorage.setItem("users", JSON.stringify(usersList));
    navigate("/manageusers")
    
  };

  return (
    <div>
      <Nav />

      <div className="row m-5">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="col-xxl-4">
            Full Name
            <input
              className="form-control"
              type="text"
              name="fullname"
              defaultValue={editUser[0].fullname}
            />
            Email
            <input
              className="form-control"
              type="text"
              name="email"
              defaultValue={editUser[0].email}
            />
            <button className="btn btn-primary mt-2" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
