import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { handleUserRegister } = useAuth();

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => handleUserRegister(e, credentials)}>
          <div className="field--wrapper">
            <label htmlFor="">Name</label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter your name..."
              value={credentials.name}
              onChange={(e) =>
                setCredentials({ ...credentials, name: e.target.value })
              }
            />
          </div>
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
              name="password1"
              placeholder="Enter your password..."
              value={credentials.password1}
              onChange={(e) =>
                setCredentials({ ...credentials, password1: e.target.value })
              }
            />
          </div>
          <div className="field--wrapper">
            <label htmlFor="">Confirm password</label>
            <input
              type="password"
              required
              name="password2"
              placeholder="Confirm Password"
              value={credentials.password2}
              onChange={(e) =>
                setCredentials({ ...credentials, password2: e.target.value })
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
        <p>
          Already have an account? Login <Link to="/login">here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
