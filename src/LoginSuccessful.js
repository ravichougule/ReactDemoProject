import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";

function LoginSuccessful() {

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(loggedInUser[0].email);

    return (
    <>
     <div className="container">
      <Nav />
      <h1 className="title">Login Successful</h1>
      <h2 className="subtitle">Welcome: {loggedInUser[0].email}</h2>
      </div>
    </>
  );
}

export default LoginSuccessful;
