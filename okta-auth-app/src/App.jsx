import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Staff from './pages/Staff';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/staff" exact Component={Staff}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
