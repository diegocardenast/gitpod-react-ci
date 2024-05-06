import css from "./App.module.css";
import logo from './logo.svg';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreetingWithPrevState';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";

function App() {
  return (

    <div className={css.App}>
      {/* Add your components here */}
      {/* <LifeCyclesCDU /> */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>

    //<div className={css.App}>
    //  {/* Add your components here */}
    //  <NavBarSimple />
    //  <Sidebar />
    //  <EventsFunctional />
    //  <EventsClass />
    //</div>

    // <div className="App">
    //   <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
    // </div>

    // <div className="App">
    //   <StatefulGreetingWithPrevState greeting="I'm a stateful class component!" name="Mike"/>
    // </div>
  );
}

export default App;
