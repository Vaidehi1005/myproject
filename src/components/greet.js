import React from "react";

// function Greet(){
//     return <h1>Hello Vaidehi</h1>
// }

//  export const Greet = () => <h1>Hello Vaidehi</h1>;
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

// functional components use optionally a props and it is normally js function that returns the jsx or html
// components no code reuse kari sakie and props ek optional property che je component accept kare input and e component ne allow kare to be dynamic aapde app component ma ek property add karisu e name che je app component to greet component pass thase and then browser ma render thase and e props ne aapde components ma use karvu che to as a attribute use karvanu and ema e attribute ma value pn aqpvvani and attribute je che e aapne e componenet ni property aapse and if e value greet component ma joie to pela aapde parameter add karvanu props functional component ma name koi pn aapi sakie pn by default ej che and aapne curly braces lagava padse then aapde console log karisu props ne and return karisu h1 tag ne.props ek object che jema attributes and value che e aapde parent componenet ma pass kari sake.have mare koi ijo content add larvo che app.js ma to e content hu lakhis ema and 2 html tag return karis fun comp ma to e error show karse so aapde ek j html tag ma return karvu padse badhu
