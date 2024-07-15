import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Components/Layout/Index";
import { Provider } from "./context";
import Lyrics from "./Components/tracks/Lyrics";

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <React.Fragment>
          <div className="container">
            <Routes>
              <Route exact path="/" Component={Index} />
              <Route exact path="/lyrics/track/:id" Component={Lyrics} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
