import React from "react";

const Hello = () => {
  //   return(
  //       <div className:"bunny">
  //           <h1>Hello Vaidehi!</h1>
  //       </div>
  //   )
  // }
  // aa upar valu je che e jsx use kaine lakyhu che
  // aapde ek simple functional component banaie che and aapde ema div return karie che jema h1 tag che

  return React.createElement(
    "div",
    { id: "hello", className: "bunny" },
    React.createElement("h1", null, "Hello Vaidehi")
  );
};
// aa method without jsx che and aama 3 return React.createElement() karvanu ema element banavanu pela 1st parameter element aavse and 2nd parameter additional properties and 3 property ma element aavse if navu element banavu hase to then ema farithi reactcreateelement karvanu 
export default Hello;
