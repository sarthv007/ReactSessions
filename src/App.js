import logo from "./logo.svg";
import "./App.css";
import Hello from "./Components/Hello";
import Container from "./Components/Container";
import HelloWorld from "./Components/HelloWorld";
import HelloWithoutJsx from "./Components/HelloWithoutJsx";

function App() {
  return (
    <div className="App">
      {/* <Container /> */}
      {/* <HelloWorld /> */}
      <HelloWithoutJsx />
    </div>
  );
}

export default App;
