import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Form from "./components/contact/Contact";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import FlowerPage from "./components/coloringChoices/flower/Flowerpage";
import FiretruckPage from "./components/coloringChoices/firetruck/Firetruckpage";
import HippoPage from "./components/coloringChoices/hippo/Hippopage";

const App = () => {
  return (
    <div className="App">
      <div className="page">
        <section>
          <header>
            <div className="Navbar">
              <NavBar />
            </div>
          </header>
        </section>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Form />} />
          <Route exact path="/flower" element={<FlowerPage />} />
          <Route exact path="/firetruck" element={<FiretruckPage />} />
          <Route exact path="/hippo" element={<HippoPage/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
