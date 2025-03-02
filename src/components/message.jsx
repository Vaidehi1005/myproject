import React, { Component } from "react";

class Message extends Component {

  constructor(){
        super()//super no matlab che k aapde react no component class extend karie che so e parent class ni properties lejo e new class message ma 
        this.state={

        }//aa ek obj che je message mate banayu che 
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