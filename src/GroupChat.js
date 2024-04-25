import React from "react";
import Nav from "./Nav";

class GroupChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")),
    };
  }
  componentDidMount() {
    this.setState({
      messages: getMessagesFromLocalStorage(),
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // page will not refresh
    const newmessage = event.target.elements.message.value;

    let messages = localStorage.getItem("chatMessages")
      ? JSON.parse(localStorage.getItem("chatMessages"))
      : [];
    let message = {
      id: Number(new Date()),
      datetime: new Date(),
      username: this.state.loggedInUser[0].fullname,
      message: newmessage,
    };
    messages.push(message); // adding item inside array
    localStorage.setItem("chatMessages", JSON.stringify(messages));

    this.setState({
      // Whenever state updates, component rerender
      messages: getMessagesFromLocalStorage(),
    });
    event.target.elements.message.value = "";
    event.target.elements.message.focus();
  };

  deleteMessages = (event) => {
    localStorage.setItem("chatMessages", []);
    this.setState({
      // Whenever state updates, component rerender
      messages: [],
    });
  };

  render() {
    return (
      <>
       <div className="container">
        <Nav />       
          <h1>Group Chat</h1>
          <div className="m-4">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <select
                  multiple
                  class="form-control"
                  id="exampleFormControlSelect2"
                >
                  {this.state.messages.map((item, index) => (
                    <option>
                      [{item.datetime}]{item.username}: {item.message}
                    </option>
                  ))}
                </select>
              </div>
              <br></br>
              <br></br>
              <div class="form-group">
                <div className="row">
                  <div className="col-6">
                    {this.state.loggedInUser[0].fullname}
                    <input
                      type="text"
                      className="form-control"
                      name="message"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Send"
                    />
                    &nbsp;
                    <input
                      type="button"
                      className="btn btn-primary"
                      value="Refresh"
                      onClick={this.deleteMessages}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
function getMessagesFromLocalStorage() {
  let messages = localStorage.getItem("chatMessages")
    ? JSON.parse(localStorage.getItem("chatMessages"))
    : [];
  return messages;
}

export default GroupChat;
