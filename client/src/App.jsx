import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Landing />
    </div>
  );
}

export default App;
