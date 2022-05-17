import logo from "./logo.svg";
import "./App.css";
import Landing from "./landing/Landing";
import NavBarComponent from "./components/nav/NavBarComponent";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Landing />
    </div>
  );
}

export default App;
