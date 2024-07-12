import logo from "./assets/SpaceX.png";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Launches from "./Components/Launches";
import Launch from "./Components/Launch"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="Space X logo"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Routes>
            <Route exact path="/" Component={Launches} />
            <Route exact path="/launch/:id" Component={Launch} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
