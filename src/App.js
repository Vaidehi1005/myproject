import logo from "./logo.svg";
import "./App.css";
// import { Greet } from "./components/greet";
import Greet from "./components/greet";
// import my from "./components/greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";

function App() {
  return (
    <div className="App">
      <Greet name="Vaidehi" heroName="Spiderman">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Parthvi" heroName="Batman" >
        <button>Applied</button>
      </Greet>
      <Greet name="Shivansh" heroName="Ironman"/>
      <Welcome />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
