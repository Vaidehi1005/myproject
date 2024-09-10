import React from "react";

const Hello = () => {
  // return(
  //     <div>
  //         <h1>Hello Vaidehi!</h1>
  //     </div>
  // )

  return React.createElement(
    "div",
    { id: "hello", class: "bunny" },
    React.createElement("h1", null, "Hello Vaidehi")
  );
};

export default Hello;
