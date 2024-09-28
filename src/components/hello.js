import React from "react";

const Hello = () => {
  //   return(
  //       <div>
  //           <h1>Hello Vaidehi!</h1>
  //       </div>
  //   )
  // }
  // aapde ek simple functional component banaie che and aapde ema div return karie che jema h1 tag che

  return React.createElement(
    "div",
    { id: "hello", className: "bunny" },
    React.createElement("h1", null, "Hello Vaidehi")
  );
};

export defa