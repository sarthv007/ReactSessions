import logo from "./logo.svg";
import "./App.css";
import Hello from "./Components/Hello";
import Container from "./Components/Container";
import HelloWorld from "./Components/HelloWorld";
import HelloWithoutJsx from "./Components/HelloWithoutJsx";
import Welcome from "./Components/Welcome";
import SubscriberCounter from "./Components/SubscriberCounter";
import Counter from "./Components/Counter";
import DestructuredComp from "./Components/DestructuredComp";
import DestructureClassComp from "./Components/DestructureClassComp";
import SubscribeCountToggle from "./Components/SubscribeCountToggle";

function App() {
  return (
    <div className="App">
      {/* <Container /> */}
      {/* <HelloWorld /> */}
      {/* <HelloWithoutJsx /> */}
      {/* <Welcome
        count={100}
        name="sarthak"
        title={"Welcome to react js"}
        data={[1, 2, 3, 4]}
        flag={true}
        person={{ firstName: "sarthak", lastName: "vaidya" }}
      >
        <p>This is a paragraph</p>
      </Welcome> */}
      <SubscriberCounter />
      {/* <Counter></Counter> */}
      {/* <DestructuredComp
        count={100}
        name="sarthak"
        title={"Welcome to react js"}
        data={[1, 2, 3, 4]}
        flag={true}
        person={{ firstName: "sarthak", lastName: "vaidya" }}
      >
        <p>This is a paragraph</p>
      </DestructuredComp> */}

      {/* <DestructureClassComp
        count={100}
        name="sarthak"
        title={"Welcome to react js"}
        data={[1, 2, 3, 4]}
        flag={true}
        person={{ firstName: "sarthak", lastName: "vaidya" }}
      >
        <p>This is a paragraph</p>
      </DestructureClassComp> */}
      <SubscribeCountToggle />
    </div>
  );
}

export default App;
