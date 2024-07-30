import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="container">
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
