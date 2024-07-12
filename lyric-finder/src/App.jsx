import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Components/Layout/Index";

function App() {
  return (
    <Router>
      <Navbar />
      <React.Fragment>
        <div className="container">
          <Routes>
            <Route exact path="/" Component={Index} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
