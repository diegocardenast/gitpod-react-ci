import css from "./App.module.css";
import logo from './logo.svg';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreetingWithPrevState';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarSimple />
      <Sidebar />
    </div>

    // <div className="App">
    //   <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
    // </div>

    // <div className="App">
    //   <StatefulGreetingWithPrevState greeting="I'm a stateful class component!" name="Mike"/>
    // </div>
  );
}

export default App;
