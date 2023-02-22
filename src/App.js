import logo from "./logo.svg";

import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
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
import ModalDemo from "./Components/ModalDemo";
import RefDemo from "./Components/RefDemo";
import FocusInput from "./Components/FocusInput";
import PrentFRInput from "./Components/PrentFRInput";
import Root from "./Components/Root";
import UserComp from "./Components/UserComp";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverComponent";
import ClickCounter2 from "./ClickCounter2";
import HoverCounter2 from "./HoverCounter2";
import CounterApp from "./CounterApp";
import HoverComponent from "./Components/HoverComponent";

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
      {/* <ModalDemo /> */}
      {/* <PortalDemo /> */}
      {/* <FocusInput /> */}
      {/* <PrentFRInput /> */}
      {/* <Root /> */}
      {/* <RefDemo /> */}
      {/* <HoverCounter name={"sarthak vaidya"} /> */}
      {/* <HOCDemoComponent /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <UserComp
        render={(isLoggedIn) => (isLoggedIn ? "Sarthak Vaidya" : "Guest User")}
      /> */}
      {/* <ClickCounter name={"sarthak vaidya"} />
      <HoverCounter /> */}
      {/* <ClickCounter2 />
      <HoverCounter2 /> */}
      <CounterApp
        render={(counter, increment) => (
          <ClickCounter2 increment={increment} counter={counter} />
        )}
      />

      <CounterApp
        render={(counter, increment) => (
          <HoverCounter2 increment={increment} counter={counter} />
        )}
      />
    </div>
  );
}

export default App;
