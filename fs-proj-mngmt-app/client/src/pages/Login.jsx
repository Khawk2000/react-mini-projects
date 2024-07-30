import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../mutations/userMutations";
import { useMutation } from "@apollo/client";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: {
      email,
      password: pswd,
    },
    onCompleted: ({ loginUser }) => {
      localStorage.setItem("token", loginUser.token);
      dispatch({ type: "LOGIN", payload: loginUser.token });
      navigate("/");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || pswd === "") {
      return alert("Please fill in all fields");
    }

    loginUser(email, pswd);
    setEmail("");
    setPswd("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <div className="form-outline w-50 h-50 mb-4 bg-secondary rounded d-flex flex-column align-items-center">
        <div className="d-flex w-100 align-items-center justify-content-center">
          <img src={logo} alt="" className="ml-5" />
          <legend className="w-50 mt-5 mb-5">ProjMan Login</legend>
        </div>
        <div className="form-floating mb-4 w-50 p-10">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="emailInput">Email</label>
        </div>
        <div className="form-floating w-50 mb-3 p-10">
          <input
            type="password"
            className="form-control"
            id="passInput"
            placeholder="Password"
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
          />
          <label htmlFor="passInput">Password</label>
        </div>
        <div className="d-grid gap-2 col-4 mt-5">
          <button className="btn btn-secondary" type="submit">
            Login
          </button>
        </div>
        <Link to="/signup" className="mt-3 signup-link">
          Create an account?
        </Link>
      </div>
    </form>
  );
};

export default Login;
