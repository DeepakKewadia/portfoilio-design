import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App relative snap-y snap-mandatory scroll-smooth">
      <Header />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
