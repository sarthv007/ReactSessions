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
import WelcomeDemo from "./Components/WelcomeDemo";
import EventBinding from "./Components/EventBinding";
import ParentComponent from "./Components/ParentComponent";
import ProfileComponent from "./Components/ProfileComponent";
import Greet from "./Components/Greet";
import NameList from "./Components/NameList";
import UsersList from "./Components/UsersList";
import TableComponent from "./Components/TableComponent";
import FormComponent from "./Components/FormComponent";
import LifeCycleAComp from "./Components/LifeCycleAComp";
import ComponentC from "./Components/ComponentC";
import UpdateLifeCycleMethod from "./Components/UpdateLifeCycleMethod";
import UnmountingPhaseComp from "./Components/UnmountingPhaseComp";
import LifeCycleDemo from "./Components/LifeCycleDemo";
import HeroComponent from "./Components/HeroComponent";
import ErrorBoundry from "./Components/ErrorBoundry";
import ParentComp from "./Components/ParentComp";
import PortalDemo from "./Components/PortalDemo";

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
      {/* <SubscriberCounter /> */}
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
      {/* <SubscribeCountToggle /> */}
      {/* <WelcomeDemo></WelcomeDemo> */}
      {/* <EventBinding></EventBinding> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <ProfileComponent></ProfileComponent> */}
      {/* <NameList /> */}
      {/* <Greet /> */}
      {/* <UsersList></UsersList> */}
      {/* <Greet /> */}
      {/* <TableComponent /> */}
      {/* <FormComponent></FormComponent> */}
      {/* <ComponentC name="Nitin" /> */}
      {/* <UpdateLifeCycleMethod></UpdateLifeCycleMethod> */}
      {/* <UnmountingPhaseComp /> */}
      {/* <LifeCycleDemo /> */}
      {/* <ErrorBoundry>
        <HeroComponent heroName={"SpiderMan"} />
      </ErrorBoundry>

      <ErrorBoundry>
        <HeroComponent heroName={"BatMan"} />
      </ErrorBoundry>

      <ErrorBoundry>
        <HeroComponent heroName={"jocker"} />
      </ErrorBoundry> */}
      {/* <ParentComp /> */}
      <PortalDemo />
    </div>
  );
}

export default App;
