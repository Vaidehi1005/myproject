import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/greet";
// import my from "./components/greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";

function App() {
  return (
    <div className="App">
      <Greet />
      <Greet />
      <Greet />
      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
