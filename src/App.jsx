import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing/Landing";
import NavBarComponent from "./components/nav/NavBarComponent";
import { Routes, Route } from "react-router";
import { useParams } from "react-router-dom";
import Category from "./components/card/Category";
import SearchCard from "./components/search/SearchCard";
import ApiProvider from "./components/context/ApiContext";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  // const { header } = useParams({});
  // const [header, setHeader] = useState({});
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <ApiProvider>
            <NavBarComponent />

            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/categories/:header" element={<Category />} />
            </Routes>
          </ApiProvider>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
