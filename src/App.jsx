import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing/Landing";
import NavBarComponent from "./components/nav/NavBarComponent";
import { Routes, Route } from "react-router";
import Category from "./components/card/Category";
import SearchCard from "./components/search/SearchCard";
import { ApiContext, ApiProvider } from "./components/context/ApiContext";

function App() {
  return (
    <div className="App">
      <>
        <ApiProvider>
          <NavBarComponent />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/categories/:header" element={<Category />} />
            <Route path="/search" element={<SearchCard />} />
          </Routes>
        </ApiProvider>
      </>
    </div>
  );
}

export default App;
