import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

class DocumentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      deleteDocId: 0,
    };
  }

  componentDidMount() {
    this.setState({
      docs: getDocsFromLocalStorage(),
    });
  }


  addDoc = (event) => {
    event.preventDefault(); // page will not refresh
    console.log(event);
    const label = event.target.elements.label.value;
    const filename = event.target.elements.filename.value;

    let docs = localStorage.getItem("docs")
      ? JSON.parse(localStorage.getItem("docs"))
      : [];
    let doc = {
      id: Number(new Date()),
      label: label,
      filename: filename,
    };
    docs.push(doc); // adding item inside array
    localStorage.setItem("docs", JSON.stringify(docs));
    this.setState({
      docs: getDocsFromLocalStorage(),
    });
  };

  editClick = (event) => {

  }

  editDoc = (event) => {

  }

  deleteClick = (event) => {
    event.preventDefault(); // page will not refresh
    const id = event.target.dataset.id;
    this.setState({
      deleteDocId: id,
    });
  };

  deleteDoc = (event) => {
    event.preventDefault(); // page will not refresh

    let id = this.state.deleteDocId;
    let docsList = this.state.docs;
    const docIndex = docsList.findIndex((obj) => obj.id == id);

    //Delete document
    docsList.splice(docIndex, 1);

    console.log(docsList);
    localStorage.setItem("docs", JSON.stringify(docsList));

    this.setState({
      docs: getDocsFromLocalStorage(),
    });
  };

  render() {
    console.log("Delete doc id", this.state.deleteDocId);
    return (
      <>
        <div className="container">
          <Nav />
          <h1>My Uploads</h1>
          <div className="m-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Label</th>
                  <th>File Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.docs.map((item, index) => (
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.filename}</td>
                    <td>
                    <Link
                        data-id={item.id}
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        onClick={this.editlick}
                      >
                        Edit
                      </Link>
                      &nbsp;|&nbsp;
                      <Link
                        data-id={item.id}
                        data-bs-toggle="modal"
                        data-bs-target="#actionModal"
                        onClick={this.deleteClick}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              data-bs-toggle="modal"
              data-bs-target="#addModal"
              className="btn btn-primary"
            >
              Add Upload
            </Link>
                 
            <div
              className="modal fade"
              id="addModal"
              tabIndex="-1"
              aria-labelledby="addModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="addModalLabel">
                      Upload
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form onSubmit={this.addDoc}>
                    <div className="modal-body">
                      File Description
                      <input
                        className="form-control"
                        type="text"
                        name="label"                        
                      />
                      File Upload
                      <input
                        className="form-control"
                        type="file"
                        name="filename"                        
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Upload Now
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="editModal"
              tabIndex="-1"
              aria-labelledby="editModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="editModalLabel">
                      Upload
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form onSubmit={this.editDoc}>
                    <div className="modal-body">
                      File Description
                      <input
                        className="form-control"
                        type="text"
                        name="newlabel"
                      />                     
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="actionModal"
              tabIndex="-1"
              aria-labelledby="actionModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="actionModalLabel">
                      Confirm Document Deletion
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
                      onClick={this.deleteDoc}
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

function getDocsFromLocalStorage() {
  let docs = localStorage.getItem("docs")
    ? JSON.parse(localStorage.getItem("docs"))
    : [];
  return docs;
}

export default DocumentList;
