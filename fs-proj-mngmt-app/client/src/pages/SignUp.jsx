import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { SIGNUP_USER } from "../mutations/userMutations";
import { useMutation } from "@apollo/client";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [signupUser] = useMutation(SIGNUP_USER, {
    variables: {
      firstname: firstName,
      lastname: lastName,
      email,
      password: pswd,
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || pswd === "" || firstName === "" || lastName === "") {
      return alert("Please fill in all fields");
    }

    console.log(signupUser(firstName, lastName, email, pswd));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPswd("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <div className="form-outline w-50 h-75 mb-4 bg-secondary rounded d-flex flex-column align-items-center">
        <div className="d-flex w-100 align-items-center justify-content-center">
          <img src={logo} alt="" className="ml-5" />
          <legend className="w-50 mt-5 mb-5">ProjMan Sign Up</legend>
        </div>
        <div className="form-floating mb-4 w-50 p-10">
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstNameInput">First Name</label>
        </div>
        <div className="form-floating mb-4 w-50 p-10">
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lastNameInput">Last Name</label>
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
            Sign Up
          </button>
        </div>
        <Link to="/login" className="mt-3 signup-link">
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
