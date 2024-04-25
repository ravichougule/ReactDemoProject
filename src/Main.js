import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import LoginSuccessful from "./LoginSuccessful";
import Register from "./Register";
import RegisterSuccessful from "./RegisterSuccessful";
import GroupChat from "./GroupChat";
import UserList from "./UserList";
import EditUser from "./EditUser";
import DocumentList from "./DocumentList";
import Logout from "./Logout";
import NotFound from "./NotFound";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginsuccessful" element={<LoginSuccessful />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registersuccessful" element={<RegisterSuccessful />} />
          <Route path="/groupchat" element={<GroupChat />} />
          <Route path="/manageusers" element={<UserList />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/managedocuments" element={<DocumentList />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
