import React, { Component } from "react";

class Message extends Component {

  constructor(){
        super()
  }

  render() {
    return (
      <h1>
        Welcome Visitor
      </h1>
    );
  }
}

export default Message;

// first step is to create a state object inside a class constructor and in constructor we call the super method 