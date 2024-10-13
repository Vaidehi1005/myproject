import React from "react";

// function Greet(){
//     return <h1>Hello Vaidehi</h1>
// }

//  export const Greet = () => <h1>Hello Vaidehi</h1>;
// direct export greet function ne upar na method thi kari devanu and export karie to aa import ma pn same j name rakhvanu export ma che e  
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
// components no code reuse kari sakie and props ek optional property che je component accept kare input and e component ne allow kare to be dynamic aapde app component ma ek property add karisu e name che je app component to greet component pass thase and then browser ma render thase and e props ne aapde components ma use karvu che to as a attribute use karvanu and ema e attribute ma value pn aqpvvani and attribute je che e aapne e componenet ni property aapse and if e value greet component ma joie to pela aapde parameter add karvanu props functional component ma name koi pn aapi sakie pn by default ej che and aapne curly braces lagava padse then aapde console log karisu props ne and return karisu h1 tag ne.props ek object che jema attributes and value che e aapde parent componenet ma pass kari sake.have mare koi ijo content add larvo che app.js ma to e content hu lakhis ema and 2 html tag return karis fun comp ma to e error show karse so aapde ek j html tag ma return karvu padse badhu and props.children thi if aapde koi content props ma add karvanu bhuli gaya hoi to aapde opening closing tag aavse ema content lakhi devanu ne aema greet.js ma ek div tag banai ne badha chidhren ema nakhi devana and props.chidren lakhisu to badhu content aai jase and props ma aapde value change na kari sakie kyare pn

// have props no use karisu so if mare name input karvu hase to hu props use karis to app.js ma aapde 3 greet component specify karisu <Greet name="a" /> <Greet name="b" /> <Greet name="c" /> then aapde 2 step process che func compononent ni 1st step  parameter add karvanu functional components ma arow functions use karvana aema parameter lakhvanu props aavi ritna -> const Greet = (props) => { } and jyare ek line thi vadhare code hoi tyare {} braces use karvana ok.2nd step che e props ne use karvano func body ma and return statement pn joise so pela console log karvanu props ne then aapde compulsory return karvanu che so return karvanu thml elememt ne and return keyword and { } braces es6 no concept 6e.props je che e object che je attributes contain kare che and eni values je aapde pass karyu che parent component ma means app.js ma pass karyu e show karse objects but mare browser ma show karvu hoi to {props.name} lakhvanu aavi ritna and 2nd props add karvu hoi to app.js ma greet component ma heroname karine bijo props add karyo k eni value add kari and aapne idea na hoi ki kyo content pass karvano che so aapde app.js ma opening and closing banne tag pass karva padse additipnal content mate and if e content add karvu oi to props.children karine e add karvanu and return ma jyare ek karta vadhare line hoi tyare  () add karvana because jsx ne multiple lines ma spilt karie che and have aapde h1 tag pachi {props .children} add karisu to je additional contenet add karvanu bhuli gaya hasu pela ma to ae add thai jase but jsx ne ek wrapper format ma joie so ek j element wrapper element  hovo joie & props ne change na kari sakie immutable che