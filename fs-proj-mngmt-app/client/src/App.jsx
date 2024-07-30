import "./App.css";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useAuthContext } from "./hooks/useAuthContext";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://projmgmt.onrender.com",
  cache,
});

function App() {
  const { token } = useAuthContext();

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/signup"
                element={!token ? <SignUp /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={!token ? <Login /> : <Navigate to="/" />}
              />
              <Route path="/projects/:id" Component={Project} />
              <Route
                path="/"
                element={token ? <Home /> : <Navigate to="/signup" />}
              />
              <Route path="*" Component={NotFound} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
