// jyare class componenet banaie tyare 2 import joie

import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      // <h1>Class Component</h1>
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;

// class component can optionally recieve the propss and returns the html and it maintains a private internal state and it maintain some information to describe the user interface and jyare class component define karie tyare 2 vastu import karvani ek react ne ek component and then ena pachi step1 class classname extends component {} step2 ema render method use karvani je return html karse ka to null

// class components ni value joie to this.props.name thi o/p malse
