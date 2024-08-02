import { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, handleUserLogin } = useAuth();

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => handleUserLogin(e, credentials)}>
          <div className="field--wrapper">
            <label htmlFor="">Email</label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email..."
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className="field--wrapper">
            <label htmlFor="">Password</label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter your password..."
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <div className="field--wrapper">
            <input
              className="btn btn--lg btn--main"
              type="submit"
              required
              name="password"
              placeholder="Enter your password..."
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
