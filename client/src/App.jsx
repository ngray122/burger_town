import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing/Landing";
import NavBarComponent from "./components/nav/NavBarComponent";
import { Routes, Route } from "react-router";
import Category from "./components/card/Category";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Landing />

      <Routes>
        {/* <Route path="/">
        </Route>

        <Route exact path="/:categories">
          <Category />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
